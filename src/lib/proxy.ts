import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const AUTH_API_URL = process.env.AUTH_API_URL ?? "http://localhost:5000";
const DATA_API_URL =
  process.env.DATA_API_URL ?? "https://tourist-guide-server-tawny.vercel.app";

// First path segment determines the upstream: auth/user routes go to the local
// backend, everything else (packages, guides, bookings, wishlists) to the data API.
const AUTH_PREFIXES = ["auth", "users"];

function targetBaseFor(segments: string[]): string {
  const first = segments[0] ?? "";
  return AUTH_PREFIXES.includes(first) ? AUTH_API_URL : DATA_API_URL;
}

/**
 * Forwards an incoming /api/proxy/* request to the correct backend, attaching the
 * backend access token from the (server-side, httpOnly) NextAuth session as a
 * Bearer header. The token never reaches the browser.
 */
export async function proxy(
  req: NextRequest,
  segments: string[],
): Promise<Response> {
  // Read the backend access token from the encrypted JWT cookie, server-side.
  // It is never exposed to the browser/session. The `__Secure-` cookie prefix
  // (and the JWE salt, which equals the cookie name) depends on whether the
  // connection is HTTPS — NOT on NODE_ENV. Detect it from the request so this
  // works both on http://localhost and behind an HTTPS proxy in production.
  const proto =
    req.headers.get("x-forwarded-proto") ??
    req.nextUrl.protocol.replace(":", "");
  const secureCookie = proto === "https";
  const cookieName = secureCookie
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";
  const jwt = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie,
    cookieName,
    salt: cookieName,
  });
  const token = jwt?.accessToken as string | undefined;

  const base = targetBaseFor(segments);
  const path = segments.join("/");
  const search = req.nextUrl.search; // includes leading "?" when present
  const url = `${base}/${path}${search}`;

  const headers: Record<string, string> = {};
  const contentType = req.headers.get("content-type");
  if (contentType) headers["content-type"] = contentType;
  if (token) headers["authorization"] = `Bearer ${token}`;

  const method = req.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";
  const body = hasBody ? await req.text() : undefined;

  let upstream: Response;
  try {
    upstream = await fetch(url, { method, headers, body, redirect: "manual" });
  } catch (err) {
    return NextResponse.json(
      { message: "Upstream request failed", error: String(err) },
      { status: 502 },
    );
  }

  const text = await upstream.text();
  const respContentType =
    upstream.headers.get("content-type") ?? "application/json";
  return new NextResponse(text, {
    status: upstream.status,
    headers: { "content-type": respContentType },
  });
}

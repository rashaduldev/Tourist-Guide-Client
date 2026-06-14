import "server-only";

import { cookies, headers } from "next/headers";
import { getToken } from "next-auth/jwt";

const AUTH_API_URL = process.env.AUTH_API_URL ?? "http://localhost:5000";
const DATA_API_URL =
  process.env.DATA_API_URL ?? "https://tourist-guide-server-tawny.vercel.app";

// auth/user routes -> local backend; everything else -> deployed data API.
const AUTH_PREFIXES = ["auth", "users"];

function baseFor(path: string): string {
  const first = path.replace(/^\/+/, "").split("/")[0] ?? "";
  return AUTH_PREFIXES.includes(first) ? AUTH_API_URL : DATA_API_URL;
}

/** Read the backend access token from the encrypted session cookie, server-side. */
export async function getAccessToken(): Promise<string | undefined> {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const secureCookie = proto === "https";
  const cookieName = secureCookie
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";

  const cookieStore = await cookies();
  const jwt = await getToken({
    req: { headers: { cookie: cookieStore.toString() } } as never,
    secret: process.env.AUTH_SECRET,
    secureCookie,
    cookieName,
    salt: cookieName,
  });
  return jwt?.accessToken as string | undefined;
}

type SendOptions = {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  body?: unknown;
  /** Skip attaching the Bearer token (pure public reads). */
  auth?: boolean;
  /** fetch cache hint for GETs. Default "no-store". */
  cache?: RequestCache;
};

/**
 * Server-side fetch to the correct backend, attaching the Bearer token from the
 * session when available. Used by all Server Actions.
 */
export async function serverApi<T = any>(
  path: string,
  { method = "GET", body, auth = true, cache = "no-store" }: SendOptions = {},
): Promise<T> {
  const url = `${baseFor(path)}/${path.replace(/^\/+/, "")}`;
  const requestHeaders: Record<string, string> = {};

  if (body !== undefined) requestHeaders["content-type"] = "application/json";
  if (auth) {
    const token = await getAccessToken();
    if (token) requestHeaders["authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: requestHeaders,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache,
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    throw new Error(
      (data && (data.message as string)) || `Request failed (${res.status})`,
    );
  }
  return data as T;
}

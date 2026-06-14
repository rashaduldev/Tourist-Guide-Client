import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Admin-only sections of the dashboard.
const ADMIN_ROUTES = [
  "/dashboard",
  "/dashboard/manageusers",
  "/dashboard/addpackage",
];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  // Not signed in -> send to login, remembering where they were headed.
  if (!session) {
    const url = new URL("/login", req.nextUrl.origin);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  // Signed in but not admin on an admin-only route -> bounce to profile.
  const isAdminRoute = ADMIN_ROUTES.includes(pathname);
  if (isAdminRoute && !session.isAdmin) {
    return NextResponse.redirect(
      new URL("/dashboard/profile", req.nextUrl.origin),
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*"],
};

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    // accessToken is deliberately omitted — it never leaves the server.
    isAdmin?: boolean;
    user: {
      role?: string;
    } & DefaultSession["user"];
  }

  // Returned by the Credentials `authorize` callback.
  interface User {
    accessToken?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    role?: string;
    isAdmin?: boolean;
  }
}

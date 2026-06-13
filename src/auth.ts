import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const AUTH_API_URL = process.env.AUTH_API_URL ?? "http://localhost:5000";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const res = await fetch(`${AUTH_API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) return null;

        const data = await res.json();
        // Stash the backend access token + role for the jwt callback.
        return {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          image: data.user.photo ?? null,
          accessToken: data.token,
          role: data.user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Credentials sign-in: the authorize() return carries the backend token.
      if (user && "accessToken" in user && user.accessToken) {
        token.accessToken = user.accessToken as string;
        token.role = (user.role as string) ?? "user";
        token.isAdmin = token.role === "admin";
      }
      // Google sign-in: exchange the OAuth profile for a backend token.
      if (account?.provider === "google" && profile?.email) {
        const res = await fetch(`${AUTH_API_URL}/auth/social`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: profile.email,
            name: profile.name,
            photo: profile.picture,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          token.accessToken = data.token;
          token.role = data.user.role;
          token.isAdmin = data.user.role === "admin";
        }
      }
      return token;
    },
    async session({ session, token }) {
      // NOTE: accessToken is intentionally NOT exposed on the session — it stays
      // inside the encrypted JWT cookie and is read server-side by the proxy
      // (src/lib/proxy.ts via getToken). Only non-secret fields are exposed.
      session.isAdmin = (token.isAdmin as boolean | undefined) ?? false;
      if (session.user) session.user.role = token.role as string | undefined;
      return session;
    },
  },
});

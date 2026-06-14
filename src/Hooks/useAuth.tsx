"use client";

import { useSession, signOut } from "next-auth/react";

/**
 * Compatibility shim over NextAuth's session, preserving the Firebase-era
 * `useAuth` surface (`user.displayName`, `user.photoURL`, `loading`, `logOut`)
 * so existing components keep working. Auth actions (sign in / register / Google)
 * now go through NextAuth directly in Login/Signup/ExtraLogin.
 */
const useAuth = () => {
  const { data: session, status } = useSession();
  const sUser = session?.user;

  const user = sUser
    ? {
        email: sUser.email ?? null,
        name: sUser.name ?? null,
        displayName: sUser.name ?? null,
        photoURL: sUser.image ?? null,
        role: sUser.role,
      }
    : null;

  return {
    user,
    loading: status === "loading",
    isAdmin: session?.isAdmin ?? false,
    logOut: () => signOut({ callbackUrl: "/" }),
  };
};

export default useAuth;

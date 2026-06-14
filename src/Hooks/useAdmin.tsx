"use client";

import useAuth from "./useAuth";

// Admin status now comes from the NextAuth session (set at sign-in), so no
// extra request is needed. Returns [isAdmin, isLoading] to match the old API.
const useAdmin = (): [boolean, boolean] => {
  const { isAdmin, loading } = useAuth();
  return [isAdmin, loading];
};

export default useAdmin;

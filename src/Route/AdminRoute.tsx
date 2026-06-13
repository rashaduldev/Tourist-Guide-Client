"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const Spinner = () => (
  <div className="text-center mx-auto flex justify-center py-10">
    <CirclesWithBar
      height="100"
      width="100"
      color="#4fa94d"
      visible={true}
      ariaLabel="circles-with-bar-loading"
    />
  </div>
);

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdminLoading && (!user || !isAdmin)) {
      router.replace("/");
    }
  }, [loading, isAdminLoading, user, isAdmin, router]);

  if (loading || isAdminLoading) return <Spinner />;
  if (user && isAdmin) return <>{children}</>;
  return <Spinner />;
};

export default AdminRoute;

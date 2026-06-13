"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import useAuth from "../Hooks/useAuth";

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

const PrivetRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) return <Spinner />;
  if (user) return <>{children}</>;
  return <Spinner />;
};

export default PrivetRoute;

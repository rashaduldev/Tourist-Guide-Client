import { Suspense } from "react";
import type { Metadata } from "next";
import Login from "@/Pages/Login/Login";

export const metadata: Metadata = { title: "Tourist login" };

export default function LoginPage() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}

import { Suspense } from "react";
import type { Metadata } from "next";
import Signup from "@/Pages/Signup/Signup";

export const metadata: Metadata = { title: "Tourist | Signup" };

export default function SignupPage() {
  return (
    <Suspense>
      <Signup />
    </Suspense>
  );
}

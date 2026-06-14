"use client";

import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import ExtraLogin from "../../Components/ExtraLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FiMail, FiLock } from "react-icons/fi";
import AuthShell from "@/components/shared/AuthShell";

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Email or password did not match.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    Swal.fire({
      title: "Login Successfully!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    router.replace(from);
    router.refresh();
  };

  return (
    <AuthShell
      title="স্বাগতম 👋"
      subtitle="আপনার অ্যাকাউন্টে লগইন করে যাত্রা শুরু করুন।"
    >
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            ইমেইল
          </label>
          <div className="relative">
            <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              পাসওয়ার্ড
            </label>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
              ভুলে গেছেন?
            </a>
          </div>
          <div className="relative">
            <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className={inputClass}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="পাসওয়ার্ড দেখান"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "লগইন হচ্ছে..." : "লগ ইন"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        <span className="text-xs uppercase tracking-wider text-slate-400">
          অথবা
        </span>
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>

      <ExtraLogin />

      <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
        নতুন ব্যবহারকারী?{" "}
        <Link href="/signup" className="font-semibold text-blue-600 hover:underline">
          সাইন আপ করুন
        </Link>
      </p>
    </AuthShell>
  );
};

export default Login;

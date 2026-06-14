"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FiUser, FiMail, FiLock, FiImage } from "react-icons/fi";
import { signIn } from "next-auth/react";
import ExtraLogin from "../../Components/ExtraLogin";
import { registerUser } from "@/app/actions/auth";
import AuthShell from "@/components/shared/AuthShell";

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, password } = data;
    setLoading(true);
    const result = await registerUser({ name, email, password });
    if (!result.ok) {
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: result.error ?? "Signup failed",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const signInResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (signInResult?.error) {
      router.push("/login");
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signup",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/");
    router.refresh();
  };

  return (
    <AuthShell
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="কয়েক সেকেন্ডে রেজিস্টার করে যাত্রা শুরু করুন।"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              নাম
            </label>
            <div className="relative">
              <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="পুরো নাম"
                {...register("name", { required: true })}
                className={inputClass}
              />
            </div>
            {errors.name && (
              <span className="mt-1.5 block text-xs text-rose-600">
                নাম আবশ্যক
              </span>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              ছবি
            </label>
            <div className="relative">
              <FiImage className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="file"
                {...register("photourl")}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 pt-2.5 text-sm text-slate-600 outline-none transition-colors file:hidden focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            ইমেইল
          </label>
          <div className="relative">
            <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
              className={inputClass}
            />
          </div>
          {errors.email && (
            <span className="mt-1.5 block text-xs text-rose-600">
              ইমেইল আবশ্যক
            </span>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            পাসওয়ার্ড
          </label>
          <div className="relative">
            <FiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 99,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
              })}
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
          {errors.password?.type === "required" && (
            <p className="mt-1.5 text-xs text-rose-600">পাসওয়ার্ড আবশ্যক</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="mt-1.5 text-xs text-rose-600">
              কমপক্ষে ৬ অক্ষর দিন
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="mt-1.5 text-xs text-rose-600">
              একটি বড় হাতের, ছোট হাতের অক্ষর, সংখ্যা ও প্রতীক ব্যবহার করুন
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "তৈরি হচ্ছে..." : "সাইন আপ"}
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
        আগে থেকেই অ্যাকাউন্ট আছে?{" "}
        <Link href="/login" className="font-semibold text-blue-600 hover:underline">
          লগ ইন করুন
        </Link>
      </p>
    </AuthShell>
  );
};

export default Signup;

"use client";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiGenderMaleBold } from "react-icons/pi";
import { RiVerifiedBadgeFill, RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { Reveal } from "@/lib/motion";

const Profile = () => {
  const user: any = useAuth().user;

  const handleVerify = () => {
    Swal.fire({
      title: "ভেরিফাই করতে ৳২৫ পরিশোধ করুন",
      icon: "info",
      showCloseButton: true,
      confirmButtonText: "পেমেন্টে যান",
      confirmButtonColor: "#2563eb",
    });
  };

  const info = [
    { icon: <RiContactsFill />, label: "নিকনেম", value: user?.displayName },
    { icon: <PiGenderMaleBold />, label: "লিঙ্গ", value: "Male" },
    { icon: <MdEmail />, label: "ইমেইল", value: user?.email },
    { icon: <IoLocationSharp />, label: "অবস্থান", value: "ঢাকা, বাংলাদেশ" },
    {
      icon: <RiContactsFill />,
      label: "যোগাযোগ নম্বর",
      value: user?.phoneNumber || "যোগ করা হয়নি",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Profile header card */}
      <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm dark:border-border dark:bg-card">
        <div className="h-32 bg-brand" />
        <div className="px-6 pb-6 sm:px-8">
          <div className="-mt-12 flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
              <img
                src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                alt="Profile"
                className="h-24 w-24 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-slate-900"
              />
              <div className="pb-1 text-center sm:text-left">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <h1 className="text-2xl font-extrabold text-foreground dark:text-white">
                    {user?.displayName || "ব্যবহারকারী"}
                  </h1>
                  <RiVerifiedBadgeFill className="text-xl text-emerald-500" />
                </div>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                  Dream big. Think different. Do great!
                </p>
              </div>
            </div>
            <Link
              href="/dashboard/edituser"
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              এডিট প্রোফাইল
            </Link>
          </div>
        </div>
      </Reveal>

      {/* General info */}
      <Reveal delay={0.1} className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 dark:border-border dark:bg-card">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-brand" />
            <h2 className="text-lg font-bold text-foreground dark:text-white">
              সাধারণ তথ্য
            </h2>
          </div>
          <dl className="space-y-4">
            {info.map((i) => (
              <div
                key={i.label}
                className="flex items-center gap-3 border-b border-border pb-4 last:border-0 last:pb-0 dark:border-border"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary dark:bg-accent/40 dark:text-primary">
                  {i.icon}
                </span>
                <div>
                  <dt className="text-xs text-muted-foreground dark:text-muted-foreground">
                    {i.label}
                  </dt>
                  <dd className="font-semibold text-foreground dark:text-white">
                    {i.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center shadow-sm dark:border-border dark:bg-card">
          <RiVerifiedBadgeFill className="text-7xl text-emerald-500" />
          <p className="mt-4 text-sm text-muted-foreground dark:text-muted-foreground">
            ভেরিফাই করলে বিনিয়োগকারীদের কাছে আপনার আস্থা বাড়বে।
          </p>
          <button
            onClick={handleVerify}
            className="mt-5 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-border dark:text-slate-200"
          >
            ভেরিফিকেশনের আবেদন
          </button>
        </div>
      </Reveal>
    </div>
  );
};

export default Profile;

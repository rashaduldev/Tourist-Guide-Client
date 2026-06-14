"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1] as const;

const perks = [
  "৫০+ গন্তব্যে এক্সক্লুসিভ ট্যুর প্যাকেজ",
  "অভিজ্ঞ ও নির্ভরযোগ্য স্থানীয় গাইড",
  "নিরাপদ বুকিং ও ২৪/৭ সাপোর্ট",
];

export default function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-0 px-4 py-10 lg:grid-cols-2 lg:py-16">
      {/* Branded panel */}
      <div className="relative hidden overflow-hidden rounded-l-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        <Link href="/" className="relative flex items-center gap-2.5">
          <img
            src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
            alt="Logo"
            className="h-11 w-11 rounded-xl object-cover ring-2 ring-white/20"
          />
          <span className="text-lg font-extrabold">ট্রাভেল কো.</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative"
        >
          <h2 className="text-3xl font-extrabold leading-tight">
            আপনার পরবর্তী অভিযাত্রা <br /> শুরু হোক এখান থেকে
          </h2>
          <ul className="mt-8 space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-blue-50">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FaCheck className="text-xs" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="relative text-sm text-blue-100">
          ১২,০০০+ সন্তুষ্ট ভ্রমণকারীর সাথে যুক্ত হোন।
        </p>
      </div>

      {/* Form panel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 lg:rounded-l-none lg:border-l-0 dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

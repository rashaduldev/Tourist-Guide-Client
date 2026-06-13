"use client";

import { Reveal } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/** Consistent section header: small gradient eyebrow + bold title + optional subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal
      className={`flex flex-col ${alignment} ${align === "center" ? "mx-auto" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
          {eyebrow}
        </span>
      )}
      <h2 className="bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:to-slate-400">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
      <span
        className={`mt-5 block h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}

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
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <span
        className={`bg-brand mt-5 block h-1 w-20 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}

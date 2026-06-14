"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import useGuide from "../../../Hooks/useGuide";
import { FaEnvelope, FaLocationDot, FaStar } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Reveal } from "@/lib/motion";

const GuideDetails = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [guide, loading] = useGuide();
  const findGuide: any = guide.find((d: any) => d.id == id);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="h-80 animate-pulse rounded-3xl border border-border bg-muted dark:border-border dark:bg-muted" />
      </div>
    );
  }

  if (!findGuide) {
    return (
      <div className="py-24 text-center text-lg font-semibold text-foreground dark:text-white">
        গাইড পাওয়া যায়নি
      </div>
    );
  }

  const { name, email, image, description } = findGuide;

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <Reveal className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl dark:border-border dark:bg-card">
        {/* gradient banner */}
        <div className="relative h-40 bg-brand">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_50%,white,transparent_40%)]" />
        </div>

        <div className="px-6 pb-8 sm:px-10">
          <div className="-mt-16 flex flex-col items-center sm:flex-row sm:items-end sm:gap-6">
            <img
              src={image}
              alt={name}
              className="h-32 w-32 rounded-2xl object-cover shadow-lg ring-4 ring-white dark:ring-slate-900"
            />
            <div className="mt-4 flex-1 text-center sm:mt-0 sm:pb-2 sm:text-left">
              <h1 className="text-2xl font-extrabold text-foreground dark:text-white">
                {name}
              </h1>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground dark:text-muted-foreground">
                <FaLocationDot className="text-primary" /> ট্যুর গাইড · বাংলাদেশ
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-600 sm:mb-2 dark:bg-amber-950/30">
              <FaStar /> ৪.৯
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { v: "১০+", l: "বছরের অভিজ্ঞতা" },
              { v: "২০০+", l: "সম্পন্ন ট্যুর" },
              { v: "৫", l: "ভাষা" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border p-4 text-center dark:border-border"
              >
                <p className="text-2xl font-extrabold text-primary">{s.v}</p>
                <p className="text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="mb-2 text-lg font-bold text-foreground dark:text-white">
              পরিচিতি
            </h2>
            <p className="leading-relaxed text-muted-foreground dark:text-muted-foreground">
              {description ||
                "একজন অভিজ্ঞ ও বন্ধুত্বপূর্ণ ট্যুর গাইড, যিনি প্রতিটি যাত্রাকে নিরাপদ, তথ্যবহুল ও আনন্দদায়ক করে তোলেন।"}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row dark:border-border">
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <FaEnvelope className="text-primary" /> {email}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-white dark:bg-muted"
                  >
                    <Icon />
                  </span>
                ))}
              </div>
              <Link
                href="/allpackage"
                className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                বুক করুন
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default GuideDetails;

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
        <div className="h-80 animate-pulse rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800" />
      </div>
    );
  }

  if (!findGuide) {
    return (
      <div className="py-24 text-center text-lg font-semibold text-slate-900 dark:text-white">
        গাইড পাওয়া যায়নি
      </div>
    );
  }

  const { name, email, image, description } = findGuide;

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* gradient banner */}
        <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-600">
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
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {name}
              </h1>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <FaLocationDot className="text-blue-500" /> ট্যুর গাইড · বাংলাদেশ
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
                className="rounded-2xl border border-slate-200 p-4 text-center dark:border-slate-800"
              >
                <p className="text-2xl font-extrabold text-blue-600">{s.v}</p>
                <p className="text-xs text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
              পরিচিতি
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              {description ||
                "একজন অভিজ্ঞ ও বন্ধুত্বপূর্ণ ট্যুর গাইড, যিনি প্রতিটি যাত্রাকে নিরাপদ, তথ্যবহুল ও আনন্দদায়ক করে তোলেন।"}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row dark:border-slate-800">
            <p className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <FaEnvelope className="text-blue-500" /> {email}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-blue-600 hover:text-white dark:bg-slate-800"
                  >
                    <Icon />
                  </span>
                ))}
              </div>
              <Link
                href="/allpackage"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
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

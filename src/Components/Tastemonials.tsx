"use client";

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteRight } from "react-icons/fa";
import { motion } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";

interface ReviewItem {
  id: number;
  name: string;
  role: string;
  img: string;
  text: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "আয়েশা খান",
    role: "ভ্রমণকারী",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "পর্যটনটি একদম ভালো লেগেছে! সবকিছু সুশৃঙ্খল ও আনন্দদায়ক ছিল। অত্যন্ত প্রস্তাবিত!",
  },
  {
    id: 2,
    name: "নাঈম রহমান",
    role: "ফটোগ্রাফার",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "প্রকৃতির দৃশ্য অসাধারণ এবং গাইড খুবই বন্ধুত্বপূর্ণ ছিলেন। সুন্দর মুহূর্তগুলো ক্যাপচার করতে পেরেছি।",
  },
  {
    id: 3,
    name: "শাকিলা জাহান",
    role: "ব্লগার",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "আরামদায়ক ভ্রমণ ও খুব তথ্যবহুল ও মজার অভিজ্ঞতা। আবার বুক করব!",
  },
  {
    id: 4,
    name: "তানভীর ইসলাম",
    role: "ভ্রমণ উৎসাহী",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "এই ট্যুরে আমি অনেক কিছু শিখেছি। দামের জন্য দারুন মান এবং শীর্ষ মানের সেবা।",
  },
];

export default function Tastemonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-transparent" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading
            eyebrow="মতামত"
            title="আমাদের যাত্রীর মতামত"
            align="left"
          />
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              aria-label="বামে স্ক্রল করুন"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              aria-label="ডানে স্ক্রল করুন"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[320px] flex-shrink-0 snap-start rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl md:w-[380px] dark:border-slate-800 dark:bg-slate-900"
            >
              <FaQuoteRight className="absolute right-6 top-6 text-4xl text-blue-100 dark:text-slate-800" />
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-blue-100 dark:ring-slate-700"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="relative text-slate-600 dark:text-slate-300">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

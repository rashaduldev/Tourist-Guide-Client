"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

interface TourAuthor {
  name: string;
  img: string;
}

interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  author: TourAuthor;
  status: string;
}

const toursData: Tour[] = [
  {
    id: "1",
    title: "সুন্দরবন বন্যপ্রাণী ভ্রমণ",
    description:
      "বাংলাদেশের সবচেয়ে বড় ম্যানগ্রোভ ফরেস্ট সুন্দরবনে বন্যপ্রাণী ও প্রকৃতির অভিজ্ঞতা।",
    image: "https://i.ibb.co/gR20XrV/coxs.jpg",
    author: { name: "আব্দুল করিম", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    status: "available",
  },
  {
    id: "2",
    title: "চট্টগ্রাম পাহাড়ি টুর",
    description:
      "চট্টগ্রামের পাহাড়ি অঞ্চলে এক অনন্য অভিজ্ঞতা ও ঐতিহ্যবাহী গ্রাম পরিদর্শন।",
    image: "https://i.ibb.co/YWGNtBg/mixphoto.jpg",
    author: { name: "মাহমুদা খাতুন", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    status: "coming_soon",
  },
  {
    id: "3",
    title: "সেন্ট মার্টিন দ্বীপ ভ্রমণ",
    description:
      "বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্ট মার্টিনে সাগর ও প্রাকৃতিক সৌন্দর্যের আনন্দ।",
    image: "https://i.ibb.co/7SqD1Gb/help-desk-right.png",
    author: { name: "রফিকুল ইসলাম", img: "https://randomuser.me/api/portraits/men/56.jpg" },
    status: "available",
  },
  {
    id: "4",
    title: "রাজশাহী ঐতিহাসিক দর্শন",
    description:
      "রাজশাহীর ঐতিহাসিক স্থাপনা ও সাংস্কৃতিক ভ্রমণ, ইতিহাসের স্বাদ নিন।",
    image: "https://i.ibb.co/YWGNtBg/mixphoto.jpg",
    author: { name: "নাসরিন আক্তার", img: "https://randomuser.me/api/portraits/women/22.jpg" },
    status: "coming_soon",
  },
];

const tabs = [
  { key: "available", label: "উপলব্ধ" },
  { key: "coming_soon", label: "শীঘ্রই আসছে" },
];

const ToursSection = () => {
  const [activeTab, setActiveTab] = useState("available");
  const filteredTours = toursData.filter((tour) => tour.status === activeTab);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeading eyebrow="ট্যুর স্ট্যাটাস" title="ট্যুরের অবস্থা" />

      {/* Segmented filter */}
      <div className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? "text-white"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {activeTab === tab.key && (
              <motion.span
                layoutId="tourTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredTours.map((tour) => (
            <motion.article
              layout
              key={tour.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
                    tour.status === "available"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-amber-500/90 text-white"
                  }`}
                >
                  {tour.status === "available" ? "উপলব্ধ" : "শীঘ্রই আসছে"}
                </span>
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 line-clamp-2 text-xl font-bold text-slate-900 dark:text-white">
                  {tour.title}
                </h3>
                <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={tour.author.img}
                      alt={tour.author.name}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tour.author.name}
                    </span>
                  </div>
                  <Link
                    href={`/tour/${tour.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-indigo-600 dark:text-blue-400"
                    aria-label={`${tour.title} এর বিস্তারিত দেখুন`}
                  >
                    বিস্তারিত
                    <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ToursSection;

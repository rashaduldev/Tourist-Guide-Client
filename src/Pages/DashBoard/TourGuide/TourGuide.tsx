"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";
import { getGuides } from "@/app/actions/data";

const TourGuide = () => {
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGuides().then((data) => {
      setGuides(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
          />
        ))}
      </div>
    );
  }

  return (
    <StaggerGroup className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
      {guides.map((pack: any) => (
        <motion.div
          key={pack._id}
          variants={fadeUp}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={pack.image}
              alt={pack.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-grow flex-col p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {pack.title}
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {pack.name}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {pack.description?.length > 100
                ? pack.description.slice(0, 100) + "..."
                : pack.description}
            </p>
            <Link
              href={`/guidedetails/${pack._id}`}
              className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white dark:border-slate-700 dark:text-slate-200"
            >
              বিস্তারিত
              <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </StaggerGroup>
  );
};

export default TourGuide;

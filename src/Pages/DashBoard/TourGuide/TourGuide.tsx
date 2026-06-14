"use client";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";
import useGuide from "@/Hooks/useGuide";

const TourGuide = () => {
  const [guides, loading] = useGuide();

  if (loading) {
    return (
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-80 animate-pulse rounded-2xl border border-border bg-muted dark:border-border dark:bg-muted"
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
          className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-border dark:bg-card"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={pack.image}
              alt={pack.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-grow flex-col p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary">
              {pack.title}
            </span>
            <h3 className="mt-1 text-lg font-bold text-foreground dark:text-white">
              {pack.name}
            </h3>
            <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
              {pack.description?.length > 100
                ? pack.description.slice(0, 100) + "..."
                : pack.description}
            </p>
            <Link
              href={`/guidedetails/${pack._id}`}
              className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-transparent hover:bg-brand hover:text-white dark:border-border dark:text-slate-200"
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

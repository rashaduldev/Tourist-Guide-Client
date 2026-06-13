"use client";

import { useEffect, useState } from "react";
import usePackages from "../../Hooks/usePackages";
import MyWishList from "../MyWishList/MyWishList";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { StaggerGroup, StaggerItem } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";

const OurPopularPackages = () => {
  const [packages] = usePackages();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (packages.length > 0) setLoading(false);
  }, [packages]);

  const popular = packages.filter(
    (item: any) => item.tour_type?.toLowerCase() === "sports",
  );

  return (
    <div className="mx-auto max-w-7xl py-12 lg:py-16">
      <SectionHeading eyebrow="জনপ্রিয়" title="জনপ্রিয় স্পোর্টস প্যাকেজসমূহ" />

      {loading ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
            />
          ))}
        </div>
      ) : popular.length === 0 ? (
        <div className="mt-12 text-center text-slate-500">
          কোনো স্পোর্টস প্যাকেজ পাওয়া যায়নি।
        </div>
      ) : (
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((item: any) => (
            <StaggerItem key={item._id}>
              <MyWishList item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/allpackage"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
        >
          সকল প্যাকেজ দেখুন
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default OurPopularPackages;

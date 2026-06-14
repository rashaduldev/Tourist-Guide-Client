"use client";

import { useMemo } from "react";
import usePackages from "../../Hooks/usePackages";
import MyWishList from "../MyWishList/MyWishList";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { StaggerGroup, StaggerItem } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";

const OurPopularPackages = () => {
  const [packages, loading] = usePackages();

  const popular = useMemo(
    () =>
      packages.filter(
        (item: any) => item.tour_type?.toLowerCase() === "sports",
      ),
    [packages],
  );

  return (
    <div className="mx-auto max-w-7xl py-12 lg:py-16">
      <SectionHeading eyebrow="জনপ্রিয়" title="জনপ্রিয় স্পোর্টস প্যাকেজসমূহ" />

      {loading ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-2xl border border-border bg-muted dark:border-border dark:bg-muted"
            />
          ))}
        </div>
      ) : popular.length === 0 ? (
        <div className="mt-12 text-center text-muted-foreground">
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
          className="group inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
        >
          সকল প্যাকেজ দেখুন
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default OurPopularPackages;

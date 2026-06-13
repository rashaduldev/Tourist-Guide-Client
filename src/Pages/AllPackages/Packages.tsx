"use client";

import { useMemo, useState } from "react";
import usePackages from "../../Hooks/usePackages";
import AllPackages from "./AllPackages";
import { FiSearch } from "react-icons/fi";
import { LuSlidersHorizontal } from "react-icons/lu";
import { StaggerGroup, StaggerItem, Reveal } from "@/lib/motion";

const filters = [
  { value: "all", label: "সব ট্যুর" },
  { value: "adventure", label: "অ্যাডভেঞ্চার" },
  { value: "leisure", label: "বিনোদন" },
  { value: "cultural", label: "সাংস্কৃতিক" },
];

const Packages = () => {
  const [packages, loading] = usePackages();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("all");

  const filteredPackages = useMemo(() => {
    let filtered: any[] = packages;
    if (filterQuery !== "all") {
      filtered = filtered.filter(
        (item: any) =>
          item.trip_category?.toLowerCase() === filterQuery.toLowerCase(),
      );
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((item: any) =>
        item.trip_title?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return filtered;
  }, [packages, filterQuery, searchQuery]);

  return (
    <div>
      {/* Hero band */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/40">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="mx-auto max-w-[85rem] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 backdrop-blur dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300">
              ট্যুর প্যাকেজ
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              সকল{" "}
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                প্যাকেজ
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
              আপনার স্বপ্নের গন্তব্য খুঁজে নিন — সার্চ করুন বা ধরন অনুযায়ী ফিল্টার করুন।
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        {/* Toolbar */}
        <div className="-mt-8 mb-10 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
          <div className="relative flex-1">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="এখানে খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div className="relative sm:w-64">
            <LuSlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-8 text-sm outline-none transition-colors focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              {filters.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800"
              />
            ))}
          </div>
        ) : filteredPackages.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">
                {filteredPackages.length}
              </span>{" "}
              টি প্যাকেজ পাওয়া গেছে
            </p>
            <StaggerGroup className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPackages.map((pack: any) => (
                <StaggerItem key={pack.id ?? pack._id}>
                  <AllPackages pack={pack} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </>
        ) : (
          <div className="my-24 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl dark:bg-slate-800">
              🔍
            </div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              কোন তথ্য পাওয়া যায়নি
            </p>
            <p className="mt-1 text-sm text-slate-500">
              অন্য কীওয়ার্ড বা ফিল্টার চেষ্টা করুন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;

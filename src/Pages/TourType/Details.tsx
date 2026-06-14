"use client";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface DetailsItem {
  id: string;
  _id?: string;
  trip_title: string;
  image: string;
  price: number | string;
}

const Details = ({ item }: { item: DetailsItem }) => {
  const { id, trip_title, image, price } = item;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={trip_title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-blue-600 backdrop-blur dark:bg-slate-900/80">
          ৳{price}
        </span>
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
          {trip_title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-grow text-sm text-slate-600 dark:text-slate-400">
          অসাধারণ এক ভ্রমণ অভিজ্ঞতা — প্রকৃতি, সংস্কৃতি ও রোমাঞ্চের নিখুঁত মিশ্রণ।
        </p>
        <Link
          href={`/details/${id}`}
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white dark:border-slate-700 dark:text-slate-200"
        >
          View Package
          <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default Details;

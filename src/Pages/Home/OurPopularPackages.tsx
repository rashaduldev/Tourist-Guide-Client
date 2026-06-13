"use client";

import { useEffect, useState } from "react";
import usePackages from "../../Hooks/usePackages";
import MyWishList from "../MyWishList/MyWishList";
import Link from "next/link";

const OurPopularPackages = () => {
  const [packages] = usePackages();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (packages.length > 0) {
      setLoading(false);
    }
  }, [packages]);

  const popular = packages.filter(
    (item: any) => item.tour_type.toLowerCase() === "sports"
  );

  return (
    <div className="max-w-7xl mx-auto my-5 py-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        জনপ্রিয় স্পোর্টস প্যাকেজসমূহ
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-yellow-500"></div>
        </div>
      ) : popular.length === 0 ? (
        <div className="text-center text-gray-500">কোনো স্পোর্টস প্যাকেজ পাওয়া যায়নি।</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popular.map((item: any) => (
            <MyWishList key={item._id} item={item} />
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link href="/allpackage">
          <button
            type="button"
            className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full shadow-md border border-transparent bg-gray-700 text-white hover:bg-gray-900 transition-all duration-200 disabled:opacity-50"
          >
            সকল প্যাকেজ দেখুন
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurPopularPackages;

"use client";

import { useState } from "react";
import Link from "next/link";

interface TourAuthor {
  name: string;
  img: string;
}

interface Tour {
  id: string;
  title: string;
  description: string;
  author: TourAuthor;
  status: string;
}

const toursData: Tour[] = [
  {
    id: "1",
    title: "সুন্দরবন বন্যপ্রাণী ভ্রমণ",
    description: "বাংলাদেশের সবচেয়ে বড় ম্যানগ্রোভ ফরেস্ট সুন্দরবনে বন্যপ্রাণী ও প্রকৃতির অভিজ্ঞতা।",
    author: {
      name: "আব্দুল করিম",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    status: "available",
  },
  {
    id: "2",
    title: "চট্টগ্রাম পাহাড়ি টুর",
    description: "চট্টগ্রামের পাহাড়ি অঞ্চলে এক অনন্য অভিজ্ঞতা ও ঐতিহ্যবাহী গ্রাম পরিদর্শন।",
    author: {
      name: "মাহমুদা খাতুন",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    status: "coming_soon",
  },
  {
    id: "3",
    title: "সেন্ট মার্টিন দ্বীপ ভ্রমণ",
    description: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্ট মার্টিনে সাগর ও প্রাকৃতিক সৌন্দর্যের আনন্দ।",
    author: {
      name: "রফিকুল ইসলাম",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    status: "available",
  },
  {
    id: "4",
    title: "রাজশাহী ঐতিহাসিক দর্শন",
    description: "রাজশাহীর ঐতিহাসিক স্থাপনা ও সাংস্কৃতিক ভ্রমণ, ইতিহাসের স্বাদ নিন।",
    author: {
      name: "নাসরিন আক্তার",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    status: "coming_soon",
  },
];

const ToursSection = () => {
  const [activeTab, setActiveTab] = useState("available");

  const filteredTours = toursData.filter((tour: Tour) => tour.status === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 my-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
        ট্যুরের অবস্থা
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab("available")}
          className={`py-2 px-6 rounded-full font-semibold transition ${
            activeTab === "available"
              ? "bg-gray-800 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-800 hover:text-white"
          }`}
        >
          উপলব্ধ (Available)
        </button>
        <button
          onClick={() => setActiveTab("coming_soon")}
          className={`py-2 px-6 rounded-full font-semibold transition ${
            activeTab === "coming_soon"
              ? "bg-gray-800 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-800 hover:text-white"
          }`}
        >
          শীঘ্রই আসছে (Coming Soon)
        </button>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour: Tour) => (
          <div
            key={tour.id}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                {tour.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
                {tour.description}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={tour.author.img}
                  alt={tour.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {tour.author.name}
                </p>
              </div>

              {/* Status Badge */}
              <span
                className={`inline-block px-3 w-32 text-center py-1 rounded-full text-sm font-semibold border
                    ${
                    tour.status === "available"
                        ? "bg-gray-800 text-white border-black"
                        : "bg-white text-black border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-500"
                    }`}
                >
                {tour.status === "available" ? "উপলব্ধ" : "শীঘ্রই আসছে"}
                </span>
            </div>

            {/* Details button */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                href={`/tour/${tour.id}`}
                className="block text-center font-semibold transition"
                aria-label={`${tour.title} এর বিস্তারিত দেখুন`}
              >
                বিস্তারিত দেখুন
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToursSection;

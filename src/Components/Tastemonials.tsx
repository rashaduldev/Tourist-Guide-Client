"use client";

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

interface ReviewItem {
  id: number;
  name: string;
  role: string;
  img: string;
  text: string;
}

const রিভিউসমূহ: ReviewItem[] = [
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
    text: "প্রকৃতির দৃশ্য অসাধারণ এবং গাইড খুবই বন্ধুত্বপূর্ণ ছিলেন। সুন্দর মুহূর্তগুলো আমি ক্যাপচার করতে পেরেছি।",
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
  const রেফারেন্স = useRef<HTMLDivElement>(null);

  // স্ক্রল করার ফাংশন — ডানে বা বামে স্ক্রল করবে
  const স্ক্রল_করো = (দিক: string) => {
    const পরিমাণ = 340;
    রেফারেন্স.current?.scrollBy({
      left: দিক === "বাম" ? -পরিমাণ : পরিমাণ,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">আমাদের যাত্রীর মতামত</h2>

      <div className="relative">
        <button
          onClick={() => স্ক্রল_করো("বাম")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          aria-label="বামে স্ক্রল করো"
        >
          <FaArrowLeft />
        </button>

        <div
          ref={রেফারেন্স}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth px-10"
        >
          {রিভিউসমূহ.map((রিভিউ: ReviewItem, index: number) => (
            <div
              key={index}
              className="w-[300px] md:w-[380px]  p-5 rounded border duration-300 flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={রিভিউ.img}
                  alt={রিভিউ.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{রিভিউ.name}</h3>
                  <p className="text-sm text-gray-500">{রিভিউ.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{রিভিউ.text}"</p>
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_: number, i: number) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => স্ক্রল_করো("ডান")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
          aria-label="ডানে স্ক্রল করো"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

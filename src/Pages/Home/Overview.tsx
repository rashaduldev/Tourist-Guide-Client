"use client";

import { FaMapMarkedAlt, FaMountain, FaInfoCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";

const Overview = () => {
  const cards = [
    {
      title: "মারায়ন তং পাহাড়",
      location: "আলীকদম, বান্দরবান",
      height: "১৬৫০ ফুট",
      summary:
        "বৌদ্ধ উপাসনালয় ও চূড়ার সমতল ভূমি থেকে দেখা যায় চারপাশের পাহাড় আর মাতামুহুরি নদী।",
    },
    {
      title: "আদিবাসী সংস্কৃতি",
      location: "মারায়ন তং অঞ্চল",
      height: "উঁচু-নিচু পাহাড়",
      summary:
        "ত্রিপুরা, মারমা ও মুরং জাতিগোষ্ঠীর বৈচিত্র্যময় জীবনযাপন, পাহাড়ে চাষাবাদ ও সংস্কৃতি।",
    },
    {
      title: "মাচাং ঘর সংস্কৃতি",
      location: "পাহাড়ি পাড়া",
      height: "চূড়ার নিচে",
      summary:
        "উপরে ঘর, নিচে গবাদি পশুর ঠাঁই — পাহাড়িদের চিরাচরিত মাচাং সংস্কৃতি।",
    },
    {
      title: "পাহাড়ি কৃষি জীবন",
      location: "বান্দরবান",
      height: "পার্বত্য এলাকা",
      summary: "ফল, শস্য ও তামাক চাষ নির্ভরশীল — জীবন চলে পাহাড়ের ছায়ায়।",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-12 lg:py-16">
      <SectionHeading eyebrow="ওভারভিউ" title="ভ্রমণ সারাংশ" />

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <FaMapMarkedAlt />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <FaMountain /> {card.height}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <FaMapMarkedAlt /> {card.location}
              </span>
            </div>

            <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <FaInfoCircle className="mt-1 flex-shrink-0 text-blue-500" />
              {card.summary}
            </p>

            <span className="mt-5 inline-flex items-center gap-1 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-600 dark:border-slate-800 dark:text-blue-400">
              আরও জানুন
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.div>
        ))}
      </StaggerGroup>
    </div>
  );
};

export default Overview;

"use client";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";
import useStories from "@/Hooks/useStories";

const Stories = () => {
  const [stories] = useStories(6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeading
        eyebrow="গল্পসমূহ"
        title="আমাদের ট্যুর গল্পসমূহ"
        subtitle="ভ্রমণকারীদের চোখে দেখা সত্যিকারের অভিজ্ঞতা ও স্মৃতিময় মুহূর্তগুলো।"
      />

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story: any) => (
          <motion.article
            key={story._id}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={story.image || "https://i.ibb.co/gR20XrV/coxs.jpg"}
                alt={story.title || "ট্যুর ছবি"}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 line-clamp-2 text-xl font-bold text-slate-900 dark:text-white">
                {story.title || "অজানা গল্প"}
              </h3>
              <p className="line-clamp-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {story.description ||
                  "এটি একটি সুন্দর ভ্রমণ অভিজ্ঞতা যা আমাদের মনে দাগ কেটে গেছে।"}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                <Link
                  href={`/blogs`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-indigo-600 dark:text-blue-400"
                >
                  বিস্তারিত দেখুন
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <button
                  className="text-xl text-slate-400 transition-colors hover:text-rose-500"
                  aria-label="প্রিয় চিহ্ন"
                >
                  <MdOutlineFavoriteBorder />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </StaggerGroup>

      <div className="mt-14 flex justify-center">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
        >
          সব গল্প দেখুন
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Stories;

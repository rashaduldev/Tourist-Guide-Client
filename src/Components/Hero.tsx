"use client";

import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineBlock } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { motion } from "@/lib/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const [text] = useTypewriter({
    words: ["পর্যটন", "অভিযাত্রা", "ভ্রমণ", "আবিষ্কার"],
    loop: 0,
    typeSpeed: 90,
    deleteSpeed: 55,
    delaySpeed: 1600,
  });

  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      </div>

      <div className="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 xl:gap-20">
          {/* Copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              বাংলাদেশের সেরা ট্যুর প্ল্যাটফর্ম
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              শুরু করুন আপনার যাত্রা
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {text}
              </span>
              <Cursor cursorColor="#2563eb" />
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              পর্যটন মানে হলো বিনোদন, অভিযাত্রা, সংস্কৃতি ও ব্যবসার জন্য ভ্রমণ। ভ্রমণ
              মানুষের মধ্যে ব্যক্তিগত উন্নতি এবং বিশ্বজনীন বোঝাপড়া গড়ে তোলে।
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/allpackage"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                শুরু করুন
                <AiOutlineBlock className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              </Link>
              <a
                href="https://maps.app.goo.gl/s2bhhzKgE5Z7Mbbd9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70 dark:text-white dark:hover:border-blue-500 dark:hover:text-blue-300"
              >
                <LuMapPin className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                ম্যাপ দেখুন
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[32, 44, 56, 22].map((n, i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${n}.jpg`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow dark:border-slate-900"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    ৪.৯/৫
                  </span>{" "}
                  — ১২,০০০+ সন্তুষ্ট ভ্রমণকারী
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20 ring-1 ring-black/5">
              <img
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src="https://i.ibb.co/YWGNtBg/mixphoto.jpg"
                alt="ভ্রমণ গন্তব্য"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
              className="absolute -bottom-6 -left-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:-left-6 dark:border-white/10 dark:bg-slate-800/90"
            >
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                ৫০+
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">গন্তব্য</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
              className="absolute -right-3 -top-5 rounded-2xl border border-white/60 bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-3 text-white shadow-xl sm:-right-6"
            >
              <p className="text-lg font-bold">ট্যুর গাইড</p>
              <p className="text-xs text-blue-100">বিশেষজ্ঞ টিম</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

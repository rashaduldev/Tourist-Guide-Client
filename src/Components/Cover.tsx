"use client";

import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

interface CoverProps {
  img: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const Cover = ({ img, title, subtitle, eyebrow }: CoverProps) => {
  return (
    <div className="mx-4 my-8 overflow-hidden rounded-3xl shadow-xl md:mx-10">
      <Parallax
        blur={{ min: -12, max: 12 }}
        bgImage={img}
        bgImageAlt="cover image"
        strength={-220}
      >
        <div className="relative flex h-[280px] items-center justify-center sm:h-[360px] md:h-[460px]">
          {/* gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-950/80 via-slate-900/55 to-blue-950/70" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative z-20 px-4 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-100 backdrop-blur">
              {eyebrow ?? "ট্রাভেল কো."}
            </span>
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow md:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-xl">
              {subtitle}
            </p>
            <span className="mx-auto mt-6 block h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;

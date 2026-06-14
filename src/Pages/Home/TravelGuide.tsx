"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Overview from "./Overview";
import OurPackages from "./OurPopularPackages";
import TourGuide from "../DashBoard/TourGuide/TourGuide";

const tabs = [
  { label: "ওভারভিউ", node: <Overview /> },
  { label: "স্পেশাল প্যাকেজসমূহ", node: <OurPackages /> },
  { label: "টপ রেটেড ট্যুর গাইড", node: <TourGuide /> },
];

const TravelGuide = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8">
      {/* Segmented tab control */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-1 rounded-2xl border border-border bg-muted p-1.5 dark:border-border dark:bg-muted">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors sm:px-6 ${
                active === i
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-white"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="travelGuideTab"
                  className="absolute inset-0 rounded-xl bg-brand shadow"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {tabs[active].node}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TravelGuide;

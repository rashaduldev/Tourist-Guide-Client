"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaLocationDot, FaClock, FaUserGroup, FaStar } from "react-icons/fa6";
import SinglePageTourGuide from "./SinglePageTourGuide";
import BookingForm from "../Form/TourBookingFrom";
import useGuide from "../Hooks/useGuide";
import SectionHeading from "@/components/shared/SectionHeading";
import { Reveal } from "@/lib/motion";

const img1 = "/assets/contact.jpg";
const img2 = "/assets/about.jpg";
const img3 = "/assets/bgimg.jpg";
const img4 = "/assets/tourbgimg.jpg";

const SingleCard = ({ data }: { data: any }) => {
  const { image, price, tour_type, trip_title } = data;
  const [packages] = useGuide();

  const tourDetails = [
    { day: "দিন ১", description: "আগমন, হোটেল চেক-ইন এবং স্থানীয় এলাকা পরিদর্শন।" },
    { day: "দিন ২", description: "মূল গন্তব্যে ভ্রমণ, গাইডেড ট্যুর ও দুপুরের খাবার।" },
    { day: "দিন ৩", description: "প্রকৃতি অভিযান, ছবি তোলা এবং বিদায়।" },
  ];

  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const toggle = (i: number) => setActiveAccordion(activeAccordion === i ? null : i);

  const gallery = [image || img1, img2, img3, img4];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Title row */}
      <Reveal className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-accent/40 dark:text-primary">
          {tour_type}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl dark:text-white">
          {trip_title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <FaLocationDot className="text-primary" /> বাংলাদেশ
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FaClock className="text-primary" /> ৩ দিন / ২ রাত
          </span>
          <span className="inline-flex items-center gap-1.5 text-amber-500">
            <FaStar /> ৪.৯ (১২০ রিভিউ)
          </span>
        </div>
      </Reveal>

      {/* Gallery */}
      <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl sm:col-span-2">
          <img
            src={gallery[0]}
            alt={trip_title}
            className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-full"
          />
        </div>
        {gallery.slice(1, 4).map((g, i) => (
          <div key={i} className="overflow-hidden rounded-2xl">
            <img
              src={g}
              alt=""
              className="h-36 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[140px]"
            />
          </div>
        ))}
      </Reveal>

      {/* Body: details + booking summary */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div>
          {/* Itinerary accordion */}
          <h2 className="mb-4 text-2xl font-bold text-foreground dark:text-white">
            ভ্রমণ পরিকল্পনা
          </h2>
          <div className="space-y-3">
            {tourDetails.map((detail, index) => {
              const open = activeAccordion === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    open
                      ? "border-primary bg-accent/40 dark:border-blue-800 dark:bg-accent/20"
                      : "border-border bg-card dark:border-border dark:bg-card"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-foreground dark:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {detail.day}
                    </span>
                    <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-primary">
                      <FaPlus />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                          {detail.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky booking summary */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg dark:border-border dark:bg-card">
            <img src={image || img1} alt={trip_title} className="h-40 w-full object-cover" />
            <div className="p-6">
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">শুরু মাত্র</p>
              <p className="mt-1 text-3xl font-extrabold text-primary">৳{price}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-center gap-2">
                  <FaClock className="text-primary" /> মেয়াদ: ৩ দিন
                </li>
                <li className="flex items-center gap-2">
                  <FaUserGroup className="text-primary" /> গ্রুপ সাইজ: ১৫ জন
                </li>
                <li className="flex items-center gap-2">
                  <FaLocationDot className="text-primary" /> ধরন: {tour_type}
                </li>
              </ul>
              <a
                href="#booking"
                className="mt-6 block rounded-xl bg-brand px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
              >
                এখনই বুক করুন
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guides */}
      <section className="mt-16">
        <SectionHeading eyebrow="আমাদের গাইড" title="আপনার যাত্রার সঙ্গী" />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.slice(0, 6).map((pack: any) => (
            <SinglePageTourGuide pack={pack} key={pack._id} />
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mt-16 scroll-mt-24">
        <SectionHeading eyebrow="বুকিং" title="আপনার ট্রিপ বুক করুন" />
        <div className="mt-8">
          <BookingForm price={price} packages={packages} />
        </div>
      </section>
    </div>
  );
};

export default SingleCard;

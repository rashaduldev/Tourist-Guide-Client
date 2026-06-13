"use client";

import { FaUserTie, FaStar, FaMapMarkedAlt, FaShieldAlt } from "react-icons/fa";
import { motion, StaggerGroup, fadeUp } from "@/lib/motion";
import SectionHeading from "@/components/shared/SectionHeading";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "অভিজ্ঞতা",
      description:
        "১০+ বছরের অভিজ্ঞতা সম্পন্ন ট্যুর গাইড ও টিম, যারা সবকিছু সুসংগঠিতভাবে পরিচালনা করে।",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "মানসম্মত সার্ভিস",
      description:
        "হোটেল, খাবার ও ট্রান্সপোর্ট সব কিছুতেই আমরা নিশ্চিত করি প্রিমিয়াম মানের সেবা।",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <FaMapMarkedAlt className="text-2xl" />,
      title: "দক্ষ গাইড",
      description:
        "লোকাল ও অভিজ্ঞ ট্যুর গাইড যারা গন্তব্য সম্পর্কে ভালোভাবে জানে।",
      gradient: "from-violet-500 to-indigo-600",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "নিরাপত্তা",
      description:
        "সেফটি ফার্স্ট – আমরা যাত্রীদের নিরাপত্তাকে সর্বোচ্চ অগ্রাধিকার দিয়ে থাকি।",
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeading
        eyebrow="কেন আমরা"
        title="কেন আমাদের নির্বাচন করবেন?"
        subtitle="আপনার ভ্রমণ অভিজ্ঞতাকে নিরাপদ, আরামদায়ক ও স্মরণীয় করতে আমরা প্রতিশ্রুতিবদ্ধ।"
      />

      <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            {/* hover glow */}
            <div
              className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
            />
            <div
              className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
            >
              {feature.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  );
}

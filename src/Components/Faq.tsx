"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/lib/motion";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqdata: FaqItem[] = [
  {
    id: 1,
    question: "ভ্রমণের জন্য সেরা সময় কখন?",
    answer:
      "ভ্রমণের সেরা সময় আপনার গন্তব্যের উপর নির্ভর করে। গ্রীষ্মমন্ডলীয় দেশের জন্য শুষ্ক মৌসুম আদর্শ, আর ঠান্ডা অঞ্চলের জন্য গ্রীষ্মকাল উত্তম।",
  },
  {
    id: 2,
    question: "আমার কি ট্রাভেল ইনস্যুরেন্স দরকার?",
    answer:
      "হ্যাঁ, আমরা ট্রাভেল ইনস্যুরেন্স নেওয়ার পরামর্শ দিই, কারণ এটি হঠাৎ ট্রিপ বাতিল, চিকিৎসা জরুরি বা মালপত্র হারানোর ক্ষেত্রে সহায়তা করে।",
  },
  {
    id: 3,
    question: "আমি কীভাবে একটি ট্যুর প্যাকেজ বুক করতে পারি?",
    answer:
      "আমাদের ওয়েবসাইট থেকে সহজেই একটি ট্যুর প্যাকেজ বুক করতে পারেন। আপনার পছন্দের প্যাকেজ বেছে নিয়ে সহজ স্টেপ অনুসরণ করুন।",
  },
  {
    id: 4,
    question: "আন্তর্জাতিক ভ্রমণের জন্য কী কী ডকুমেন্ট দরকার?",
    answer:
      "আন্তর্জাতিক ভ্রমণের জন্য পাসপোর্ট এবং অনেক সময় ভিসার প্রয়োজন হয়। কিছু দেশে ভ্যাকসিন সার্টিফিকেট বা স্বাস্থ্য সংক্রান্ত প্রমাণপত্র চাওয়া হয়।",
  },
  {
    id: 5,
    question: "ভ্রমণের সময় কী ধরনের পোশাক নেওয়া উচিত?",
    answer:
      "আপনার গন্তব্যের আবহাওয়া অনুযায়ী পোশাক নেওয়া উচিত। শীতল স্থানে গরম কাপড় এবং উষ্ণ স্থানে হালকা, আরামদায়ক পোশাক নেওয়া ভালো।",
  },
  {
    id: 6,
    question: "ফ্লাইট মিস করলে আমি কী করতে পারি?",
    answer:
      "ফ্লাইট মিস করলে দ্রুত এয়ারলাইন্সের কাস্টমার সার্ভিসে যোগাযোগ করুন। তারা পরবর্তী ফ্লাইটে আসন খালি থাকলে সাহায্য করতে পারে।",
  },
  {
    id: 7,
    question: "আমি কি আমার বুকিং বাতিল করতে পারবো?",
    answer:
      "হ্যাঁ, আপনি নির্দিষ্ট সময়ের মধ্যে বুকিং বাতিল করতে পারবেন। তবে নির্ভর করে শর্ত ও প্যাকেজের উপর।",
  },
  {
    id: 8,
    question: "আমি কি শিশু বা প্রবীণদের জন্য বিশেষ সুবিধা পাব?",
    answer:
      "হ্যাঁ, আমাদের প্যাকেজে শিশু ও প্রবীণদের জন্য বিশেষ ডিসকাউন্ট ও সুবিধা প্রদান করা হয়। বুকিংয়ের সময় এটি নিশ্চিত করুন।",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Left */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary dark:border-accent/60 dark:bg-accent/40 dark:text-primary">
            সহায়তা কেন্দ্র
          </span>
          <h2 className="bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:to-slate-400">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
            আমাদের প্ল্যাটফর্ম সম্পর্কিত সবচেয়ে সাধারণ প্রশ্নের উত্তর খুঁজে নিন, আপনার
            ভ্রমণ যাত্রা সহজ করতে।
          </p>
          <span className="mt-5 block h-1 w-20 rounded-full bg-brand" />
        </Reveal>

        {/* Right — accordion */}
        <div className="space-y-3">
          {faqdata.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.id} delay={index * 0.04} y={16}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary bg-accent/40 shadow-md dark:border-blue-800 dark:bg-accent/20"
                      : "border-border bg-card hover:border-slate-300 dark:border-border dark:bg-card"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="flex items-center gap-3 text-base font-semibold text-foreground dark:text-white">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold text-white">
                        {item.id}
                      </span>
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground"
                      }`}
                    >
                      <FaPlus className="text-xs" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

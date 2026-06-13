"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi";
import Cover from "../../Components/Cover";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion, Reveal, StaggerGroup, fadeUp } from "@/lib/motion";

const coverImg = "/assets/contact.jpg";

const infos = [
  { icon: <FiMapPin />, title: "ঠিকানা", value: "৭৭৭ ফ্র্যাঙ্কলিন স্ট্রিট, সান ফ্রান্সিসকো" },
  { icon: <FiPhone />, title: "ফোন", value: "+১ ৪২০-২৪০-৬০০০" },
  { icon: <FiMail />, title: "ইমেইল", value: "contact@adventuretours.com" },
  { icon: <FiMessageSquare />, title: "স্কাইপ", value: "adventure.tours" },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

const ContactUs = () => {
  return (
    <div>
      <Cover
        img={coverImg}
        eyebrow="যোগাযোগ"
        title="যোগাযোগ করুন"
        subtitle="আমরা আপনার বার্তার অপেক্ষায় আছি!"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: info */}
        <div>
          <SectionHeading
            eyebrow="আমাদের সাথে কথা বলুন"
            title="যোগাযোগের ঠিকানা"
            align="left"
          />
          <p className="mt-6 max-w-md text-slate-600 dark:text-slate-400">
            আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে নিচের মাধ্যমগুলোতে যোগাযোগ করুন, অথবা
            পাশের ফর্মটি পূরণ করুন।
          </p>

          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {infos.map((info) => (
              <motion.div
                key={info.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  {info.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {info.title}
                  </p>
                  <p className="mt-0.5 break-words text-sm text-slate-600 dark:text-slate-400">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Right: form */}
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
              বার্তা পাঠান
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    নাম
                  </label>
                  <input type="text" placeholder="পুরো নাম" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  বিষয়
                </label>
                <input
                  type="text"
                  placeholder="আপনার প্রশ্নের বিষয়"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  বার্তা
                </label>
                <textarea
                  rows={6}
                  placeholder="সম্পূর্ণ বার্তা লিখুন..."
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
              >
                পাঠান
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactUs;

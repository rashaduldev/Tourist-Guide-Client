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
  "w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-card focus:ring-2 focus:ring-ring/20 dark:border-border dark:bg-muted dark:text-white";

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
          <p className="mt-6 max-w-md text-muted-foreground dark:text-muted-foreground">
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
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md dark:border-border dark:bg-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary dark:bg-accent/40 dark:text-primary">
                  {info.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground dark:text-white">
                    {info.title}
                  </p>
                  <p className="mt-0.5 break-words text-sm text-muted-foreground dark:text-muted-foreground">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* Right: form */}
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg dark:border-border dark:bg-card">
            <h3 className="mb-6 text-xl font-bold text-foreground dark:text-white">
              বার্তা পাঠান
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground dark:text-muted-foreground">
                    নাম
                  </label>
                  <input type="text" placeholder="পুরো নাম" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground dark:text-muted-foreground">
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
                <label className="mb-2 block text-sm font-medium text-foreground dark:text-muted-foreground">
                  বিষয়
                </label>
                <input
                  type="text"
                  placeholder="আপনার প্রশ্নের বিষয়"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground dark:text-muted-foreground">
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
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
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

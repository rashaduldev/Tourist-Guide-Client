"use client";

import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";
import { motion, Reveal, StaggerGroup, fadeUp } from "@/lib/motion";

const contacts = [
  { icon: <FaPhoneAlt />, title: "কল করুন", value: "+8801603010103" },
  { icon: <FaEnvelope />, title: "ইমেইল করুন", value: "tour@gmail.com" },
  { icon: <FaHeadset />, title: "হেল্পলাইন", value: "+990564847621" },
];

const Needhelp = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <Reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-blue-950 p-8 shadow-xl sm:p-12 dark:border-slate-800">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left copy + cards */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur">
              ২৪/৭ সাপোর্ট
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              সাহায্য দরকার?
            </h2>
            <p className="mt-3 max-w-md text-blue-100/80">
              যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের টিম সবসময় আপনার পাশে আছে।
            </p>

            <StaggerGroup className="mt-8 space-y-4">
              {contacts.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-blue-600/30">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{c.title}</h3>
                    <p className="text-sm text-blue-100/70">{c.value}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <img
              src="https://i.ibb.co/7SqD1Gb/help-desk-right.png"
              alt="Help Desk"
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};

export default Needhelp;

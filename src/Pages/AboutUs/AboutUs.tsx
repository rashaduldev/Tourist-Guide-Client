"use client";

import Cover from "../../Components/Cover";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion, Reveal, StaggerGroup, fadeUp } from "@/lib/motion";
import { FaCompass, FaHeart, FaLeaf, FaShieldHalved } from "react-icons/fa6";

const coverImg = "/about.jpg";

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const stats = [
  { value: "১২ক+", label: "সন্তুষ্ট ভ্রমণকারী" },
  { value: "৫০+", label: "গন্তব্য" },
  { value: "১০+", label: "বছরের অভিজ্ঞতা" },
  { value: "৪.৯", label: "গড় রেটিং" },
];

const values = [
  {
    icon: <FaCompass />,
    title: "অভিযাত্রা",
    desc: "প্রতিটি ট্রিপ সাজানো হয় রোমাঞ্চ ও আবিষ্কারের কথা মাথায় রেখে।",
  },
  {
    icon: <FaHeart />,
    title: "যত্ন",
    desc: "আমরা ভ্রমণকারীদের আরাম ও আনন্দকে সর্বোচ্চ গুরুত্ব দিই।",
  },
  {
    icon: <FaShieldHalved />,
    title: "নিরাপত্তা",
    desc: "প্রতিটি যাত্রায় নিরাপত্তাই আমাদের প্রথম অগ্রাধিকার।",
  },
  {
    icon: <FaLeaf />,
    title: "টেকসই ভ্রমণ",
    desc: "পরিবেশ ও স্থানীয় সংস্কৃতির প্রতি দায়বদ্ধ ভ্রমণ।",
  },
];

const team: TeamMember[] = [
  {
    "name": "ডেভিড ফরেন",
    "role": "প্রতিষ্ঠাতা / প্রধান নির্বাহী কর্মকর্তা",
    "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "অমিল ইভারা",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "এবেলে এগবুনা",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "মারিয়া পাওয়ারস",
    "role": "বিক্রয় পরিচালক",
    "img": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ডেলিয়া পাওয়েলকে",
    "role": "ফ্রন্ট-এন্ড ডেভেলপার",
    "img": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "টম লোরি",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "লুইস ডোনাডিয়ু",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "জেফ ফিশার",
    "role": "প্রজেক্ট ম্যানেজার",
    "img": "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "সোফিয়া হ্যারিংটন",
    "role": "প্রজেক্ট ম্যানেজার",
    "img": "https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ক্রিস্টিনা ক্রে",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "এমি ফরেন",
    "role": "প্রোডাক্ট ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ফিলিপ উইলিয়ামস",
    "role": "সাপোর্ট পরামর্শক",
    "img": "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "ব্রায়ান লোফোটেন",
    "role": "ইউআই/ইউএক্স ডিজাইনার",
    "img": "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "টানিয়া হ্যারিংটন",
    "role": "মার্কেটিং স্পেশালিস্ট",
    "img": "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  },
  {
    "name": "যাকারি রে",
    "role": "বিক্রয় প্রতিনিধি",
    "img": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
  }
];

export default function AboutUs() {
  return (
    <div>
      <Cover
        img={coverImg}
        eyebrow="আমাদের সম্পর্কে"
        title="আমাদের সম্পর্কে"
        subtitle="আপনার মতামত জানতে আমরা আগ্রহী!"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://i.ibb.co/YWGNtBg/mixphoto.jpg"
                alt="আমাদের টিম"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/60 bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-4 text-white shadow-xl">
              <p className="text-3xl font-extrabold">১০+</p>
              <p className="text-sm text-blue-100">বছরের অভিজ্ঞতা</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="আমাদের গল্প"
              title="ভ্রমণকে সহজ ও স্মরণীয় করাই আমাদের লক্ষ্য"
              align="left"
            />
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                ট্রাভেল কো. একটি অভিজ্ঞ টিম, যারা বিশ্বাস করে — ভ্রমণ শুধু গন্তব্যে
                পৌঁছানো নয়, বরং পথের প্রতিটি মুহূর্ত উপভোগ করা। আমরা প্রতিটি ট্রিপ
                সাজাই যত্ন, নিরাপত্তা ও আনন্দের কথা মাথায় রেখে।
              </p>
              <p>
                স্থানীয় গাইড, প্রিমিয়াম সেবা ও টেকসই ভ্রমণের প্রতি প্রতিশ্রুতি নিয়ে
                আমরা আপনার স্বপ্নের যাত্রাকে বাস্তবে রূপ দিই।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <StaggerGroup className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <p className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-4xl font-extrabold text-transparent">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {s.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading
          eyebrow="আমাদের মূল্যবোধ"
          title="যা আমাদের আলাদা করে"
        />
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
                {v.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>

      {/* Team */}
      <section
        aria-label="Team Members"
        className="mx-auto max-w-7xl px-4 pb-20 lg:px-8"
      >
        <SectionHeading eyebrow="আমাদের টিম" title="পরিচিত হোন আমাদের সাথে" />
        <StaggerGroup className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {team.map((member: TeamMember, idx: number) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-60" />
                <img
                  className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                  src={member.img}
                  alt={member.name}
                />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                {member.role}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}

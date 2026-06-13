"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { Reveal } from "@/lib/motion";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "সমস্ত প্যাকেজ", href: "/allpackage" },
  { label: "ব্লগসমূহ", href: "/blogs" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "যোগাযোগ", href: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden bg-slate-950 text-slate-300">
      {/* top gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600" />
      {/* glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-white/10"
              />
              <span className="text-lg font-extrabold text-white">
                ট্রাভেল কো.
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              আমরা বিশ্বজুড়ে স্মরণীয় ভ্রমণের অভিজ্ঞতা প্রদান করি। আমাদের সাথে আপনার
              পরবর্তী অ্যাডভেঞ্চারে যোগ দিন।
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-blue-500 transition-all duration-300 group-hover:w-5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              যোগাযোগ
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 flex-shrink-0 text-blue-500" />
                ১২৩ ট্রাভেল রোড, অ্যাডভেঞ্চার সিটি
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0 text-blue-500" />
                <a href="tel:+8801603010103" className="hover:text-white">
                  +৮৮০১৬০৩০১০১০৩
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0 text-blue-500" />
                <a href="mailto:info@travel.com" className="hover:text-white">
                  info@travel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              নিউজলেটার
            </h3>
            <p className="mb-4 text-sm text-slate-400">
              সর্বশেষ অফার ও ভ্রমণ আপডেট পেতে সাবস্ক্রাইব করুন।
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5 focus-within:border-blue-500"
            >
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="সাবস্ক্রাইব"
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-white transition-opacity hover:opacity-90"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>&copy; ২০২৫ ট্রাভেল কো. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              প্রাইভেসি পলিসি
            </a>
            <a href="#" className="transition-colors hover:text-white">
              শর্তাবলী
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

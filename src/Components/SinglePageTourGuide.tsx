"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const SinglePageTourGuide = ({ pack }: { pack: any }) => {
  const { id, name, email, image, description } = pack;

  return (
    <Link href={`/detailsuser/${id}`} className="block">
      <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <img
          src={image}
          alt={name}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-blue-100 transition-transform duration-300 group-hover:scale-105 dark:ring-slate-700"
        />
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-slate-900 dark:text-white">
            {name}
          </h3>
          <p className="mt-0.5 line-clamp-1 text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
            {description}
          </p>
          <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
            {email}
          </p>
          <div className="mt-2 flex gap-2 text-slate-400">
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs transition-colors hover:bg-blue-600 hover:text-white dark:bg-slate-800"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SinglePageTourGuide;

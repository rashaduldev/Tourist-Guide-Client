"use client";

import Cover from "../../Components/Cover";
import useBlogs from "../../Hooks/useBlogs";
import { FaArrowRightLong, FaRegCalendar, FaRegStar, FaStar } from "react-icons/fa6";
import { motion, Reveal, StaggerGroup, fadeUp } from "@/lib/motion";

const coverImg = "/assets/bgimg.jpg";

const tags = [
  "অ্যাডভেঞ্চার",
  "আলাস্কা",
  "চেকলিস্ট",
  "হিমবাহ",
  "বীমা",
  "প্রকৃতি",
  "সুরক্ষা",
  "ছুটি",
];

const Blogs = () => {
  const [blogs, loading] = useBlogs();

  return (
    <div>
      <Cover
        img={coverImg}
        eyebrow="ব্লগ"
        title="ব্লগসমূহ"
        subtitle="আমরা গল্প শেয়ার করি এবং পরামর্শ দিই"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        {/* Main column */}
        <div className="space-y-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-2xl border border-border bg-muted dark:border-border dark:bg-muted"
              />
            ))
          ) : blogs.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-16 text-center dark:border-border dark:bg-card">
              <p className="text-lg font-semibold text-foreground dark:text-white">
                এখনও কোনো ব্লগ নেই
              </p>
              <p className="mt-1 text-sm text-muted-foreground">শীঘ্রই নতুন গল্প আসছে।</p>
            </div>
          ) : (
            <StaggerGroup className="space-y-8">
              {blogs.map((blog: any) => (
                <motion.article
                  key={blog._id}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl dark:border-border dark:bg-card"
                >
                  {blog.image && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={blog.image}
                        alt="ব্লগ ছবি"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        ব্লগ
                      </span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground dark:text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <FaRegCalendar /> {blog.date ?? "৩ দিন আগে"}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-white">
                      {blog.content_head}
                    </h2>
                    <p className="mt-3 line-clamp-3 leading-relaxed text-muted-foreground dark:text-muted-foreground">
                      {blog.description} {blog.content}
                    </p>
                    <button className="group/btn mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-indigo-600 dark:text-primary">
                      বিস্তারিত দেখুন
                      <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </StaggerGroup>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-sm dark:border-border dark:bg-card">
            <h3 className="mb-4 text-lg font-bold text-foreground dark:text-white">
              ট্যাগসমূহ
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-accent hover:text-primary dark:border-border dark:bg-muted dark:text-muted-foreground"
                >
                  {tag}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="group relative overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://i.ibb.co/dWNYVtb/costa-rica-360x240.jpg"
              alt="কোস্টা রিকা"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="mb-2 flex items-center gap-0.5 text-amber-400">
                {[1, 2, 3, 4].map((i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
                <FaRegStar className="h-4 w-4 text-amber-400" />
              </div>
              <p className="text-xl font-bold text-white">
                আবিষ্কার করুন কোস্টা রিকা
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
};

export default Blogs;

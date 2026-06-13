"use client";

import { useEffect, useState } from "react";
import Cover from "../../Components/Cover";

const coverImg = "/assets/bgimg.jpg";

const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://tourist-guide-server-tawny.vercel.app/blogs")
      .then((res) => res.json())
      .then((data: any[]) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="">
      <Cover img={coverImg} title="ব্লগসমূহ" subtitle="আমরা গল্প শেয়ার করি এবং পরামর্শ দিই" />
      <div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:mx-10">
          <div className="col-span-3">
            {blogs.map((blog: any) => (
              <div
                key={blog._id}
                className="max-w-7xl px-4 md:px-0 py-10 lg:py-14 mx-auto"
              >
                <div className="">
                  <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <h1 className="text-3xl text-left font-bold my-5 ml-5">
                      শিরোনাম: {blog.content_head}
                    </h1>
                    <div className="flex justify-between mx-5 my-2">
                      <p>তারিখ: {blog.date}</p>
                      <p>৩ দিন আগে</p>
                    </div>
                    <img src={blog.image} alt="ব্লগ ছবি" />
                    <div className="p-4 md:p-6">
                      <p className="mt-3 text-gray-500">{blog.description}</p>
                      <p className="mt-3 text-gray-500">{blog.content}</p>
                    </div>
                    <button className="p-5 bg-gray-400 text-white text-xl rounded-b-xl">
                      বিস্তারিত দেখুন
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ডান পাশে Tags */}
          <div className="mt-14">
            <div className="w-full h-[300px] border rounded">
              <p className="text-3xl text-center font-bold pt-5">ট্যাগসমূহ</p>
              <div className="italic grid grid-cols-2 pt-6 text-center leading-10 gap-4 mx-2">
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">অ্যাডভেঞ্চার</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">আলাস্কা</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">চেকলিস্ট</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">হিমবাহ</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">বীমা</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">প্রকৃতি</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">সুরক্ষা</p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">ছুটি</p>
              </div>
            </div>

            <div className="w-full h-[250px] rounded my-5 relative">
              <img
                className="h-full rounded"
                src="https://i.ibb.co/dWNYVtb/costa-rica-360x240.jpg"
                alt="কোস্টা রিকা"
              />
              <div className="absolute bottom-3 left-5">
                {/* রেটিং */}
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i: number) => (
                    <button
                      key={i}
                      type="button"
                      className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400"
                    >
                      ⭐
                    </button>
                  ))}
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400"
                  >
                    ⭐
                  </button>
                </div>
                <p className="text-2xl text-white mt-5 font-bold">আবিষ্কার করুন কোস্টা রিকা</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

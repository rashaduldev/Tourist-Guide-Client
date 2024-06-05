import { useEffect, useState } from "react";
import Cover from "../../Components/Cover";
import coverImg from "../../assets/bgimg.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  //   const [date, content_head, image, description, content] = blogs;

  useEffect(() => {
    fetch("https://tourist-guide-server-tawny.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      <Cover img={coverImg} title="Blogs" subtitle=" We share stories and give advice"></Cover>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 mx-10">
          <div className="col-span-3">
            {blogs.map(
              (blog) => (
                // <!-- Card Blog -->
                <div
                  key={blog._id}
                  className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
                >
                  {/* <!-- Grid --> */}
                  <div className="">
                    {/* <!-- Card --> */}
                    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <h1 className="text-3xl text-center font-bold my-5">
                        {" "}
                        {blog.content_head}{" "}
                      </h1>
                      <div className="flex justify-between mx-5 my-2">
                        <p>Date {blog.date}</p>
                        <p>3 Days Ago</p>
                      </div>
                      <img src={blog.image} alt="" />
                      <div className="p-4 md:p-6">
                        <p className="mt-3 text-gray-500">{blog.description}</p>
                        <p className="mt-3 text-gray-500">{blog.content}</p>
                      </div>
                      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <a
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          <FaFacebook></FaFacebook>
                          Facebook
                        </a>
                        <a
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          <FaYoutube></FaYoutube>
                          Youtube
                        </a>
                        <a
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          <FaInstagram></FaInstagram>
                          Instagram
                        </a>
                        <a
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          <FaTwitter></FaTwitter>
                          Twitter
                        </a>
                      </div>
                    </div>
                    {/* <!-- End Card --> */}
                  </div>
                  {/* <!-- End Grid --> */}
                </div>
              )
              // <!-- End Card Blog -->
            )}
          </div>
          <div className="mt-14">
            <div className="w-full h-[300px]  shadow-2xl shadow-blue-600 rounded">
              <p className="text-3xl text-center text-white font-bold">Tags</p>
              <div className="italic grid grid-cols-2 pt-6 text-center leading-10 gap-4 mx-2">
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Adventure
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Alaska
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Checklist
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Glaciers
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Insurance
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Nature
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Protection
                </p>
                <p className="shadow-2xl bg-slate-400 cursor-pointer text-white">
                  Vacation
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] rounded my-5 relative">
              <img
              className="h-full rounded"
                src="https://i.ibb.co/dWNYVtb/costa-rica-360x240.jpg"
                alt=""
              />
              <div className="absolute bottom-3 left-5">
                {/* <!-- Rating --> */}
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-yellow-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-5 h-5 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-600 dark:hover:text-yellow-500"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </button>
                </div>
                {/* <!-- End Rating --> */}
                <p className="text-2xl text-white mt-5 font-bold">Discover Costa Rica</p>
              </div>
            </div>
            <div className="w-full h-[350px] ">
            <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div className="flex items-center gap-x-4">
          <img className="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
          <div className="grow">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              Maria Powers
            </h3>
            <p className="text-xs uppercase text-gray-500">
              Director of sales
            </p>
          </div>
        </div>
  
        <p className="mt-3 text-gray-500">
          I am an ambitious workaholic, but apart from that, pretty simple person.
        </p>
  
        {/* <!-- Social Brands --> */}
        <div className="mt-3 space-x-1">
          <a className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a className="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
            <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
            </svg>
          </a>
        </div>
        {/* <!-- End Social Brands --> */}
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

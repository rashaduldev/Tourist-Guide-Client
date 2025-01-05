import { useEffect, useState } from "react";
import useAxiosPublick from "../Hooks/useAxiosPublick";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Stories = () => {
    const [stories, setStories] = useState([]);
    const axiosPublick = useAxiosPublick();

    useEffect(() => {
        axiosPublick.get('/stories')
            .then((res) => {
                setStories(res.data.slice(0, 6));
            })
            .catch((err) => {
                console.error('Error fetching stories:', err);
            });
    }, [axiosPublick]);

    return (
        <div className="max-w-[85rem] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center my-9 text-black/90">Tour Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story) => (
                    <div key={story._id} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div className=" cursor-pointer">
                            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="">
                                    <img className="w-full rounded-t-xl h-[50%]" src="https://i.ibb.co.com/gR20XrV/coxs.jpg" alt="" />
                                </div>
                                <div className="p-4 md:p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                        Atlassian
                                    </h3>
                                    <p className="mt-3 text-gray-500">
                                        A software that develops products for software developers and developments.
                                    </p>
                                </div>
                                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        View Details
                                    </a>
                                    <a className="text-2xl p-3" href="">
                                    <MdOutlineFavoriteBorder />
                                    </a>
                                </div>
                            </div>
                            {/* <!-- End Card --> */}
                        </div>
                        {/* <!-- End Grid --> */}
                    </div>
                    // <!-- End Card Blog -->
                ))}
            </div>
           <div className="flex justify-center ">
           <button type="button" className="py-3 px-4 gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mb-10">
                All Stories
            </button>
           </div>
        </div>
    );
};

export default Stories;

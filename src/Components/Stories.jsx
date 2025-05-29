import { useEffect, useState } from "react";
import useAxiosPublick from "../Hooks/useAxiosPublick";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Stories = () => {
    const [stories, setStories] = useState([]);
    const axiosPublick = useAxiosPublick();

    useEffect(() => {
        axiosPublick.get('/stories')
            .then((res) => {
                setStories(res.data.slice(0, 6));
            })
            .catch((err) => {
                console.error('তথ্য আনতে সমস্যা হয়েছে:', err);
            });
    }, [axiosPublick]);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-8 mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center my-12 text-gray-900 dark:text-white">
                আমাদের ট্যুর গল্পসমূহ
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story) => (
                    <div
                        key={story._id}
                        className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                    >
                        <img
                            src={story.image || "https://i.ibb.co/gR20XrV/coxs.jpg"}
                            alt={story.title || "ট্যুর ছবি"}
                            className="w-full h-56 object-cover rounded-t-lg"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                {story.title || "অজানা গল্প"}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 flex-grow line-clamp-3">
                                {story.description || "এটি একটি সুন্দর ভ্রমণ অভিজ্ঞতা যা আমাদের মনে দাগ কেটে গেছে।"}
                            </p>
                        </div>
                        <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                                className="text-sm text-blue-600 hover:underline font-medium transition"
                                onClick={() => window.location.href = `/story/${story._id}`}
                                aria-label={`বিস্তারিত দেখুন: ${story.title}`}
                            >
                                বিস্তারিত দেখুন
                            </button>
                            <button
                                className="text-2xl text-gray-500 hover:text-red-500 transition"
                                aria-label="প্রিয় চিহ্ন"
                            >
                                <MdOutlineFavoriteBorder />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link to="/blogs">
                    <button
                        type="button"
                        className="py-3 px-8 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
                    >
                        সব গল্প দেখুন
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Stories;

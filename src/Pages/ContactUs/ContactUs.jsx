import { FaLocationArrow, FaMessage, FaPhone, FaSeedling, FaSkype } from "react-icons/fa6";
import coverImg from "../../assets/contact.jpg";
import Cover from "../../Components/Cover";

const ContactUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Cover
        img={coverImg}
        title="যোগাযোগ করুন"
        subtitle="আমরা আপনার বার্তার অপেক্ষায় আছি!"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <p className="italic text-gray-600 dark:text-gray-400">আমাদের সাথে কথা বলতে চান?</p>
          <h2 className="text-4xl font-semibold mt-4 mb-6">যোগাযোগের ঠিকানা</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
            আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে, নিচের যোগাযোগের মাধ্যমগুলোতে আমাদের সাথে যোগাযোগ করুন বা পাশে থাকা ফর্মটি পূরণ করুন।
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaLocationArrow className="text-blue-500" />
              <span>৭৭৭ ফ্র্যাঙ্কলিন স্ট্রিট, সান ফ্রান্সিসকো</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-500" />
              <span>+১ ৪২০-২৪০-৬০০০</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMessage className="text-blue-500" />
              <span>contact@adventuretours.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaSkype className="text-blue-500" />
              <span>adventure.tours</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-lg">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">ইমেইল</label>
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">আপনার নাম</label>
                <input
                  type="text"
                  placeholder="পুরো নাম / ফোন নাম্বার"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium">বিষয়</label>
              <input
                type="text"
                placeholder="আপনার প্রশ্নের বিষয়"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>

            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium">বার্তা</label>
              <textarea
                rows="6"
                placeholder="সম্পূর্ণ বার্তা লিখুন..."
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              পাঠান
              <FaSeedling />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import { useTypewriter } from 'react-simple-typewriter';
import { LuMapPin } from "react-icons/lu";
import { AiOutlineBlock } from "react-icons/ai"; // নতুন আইকন উদাহরণ হিসেবে

const Hero = () => {
  const [text] = useTypewriter({
    words: ["র্যটন ও ভ্রমণ"],
    loop: 9,
  });

  return (
    <div className="my-10 py-10 bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* <!-- Hero --> */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              শুরু করুন আপনার যাত্রা <br />
              <span className="text-gray-800">প{text}</span>
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              পর্যটন মানে হলো বিনোদন, অভিযাত্রা, সংস্কৃতি ও ব্যবসার জন্য ভ্রমণ। এটি অর্থনীতি উন্নত করে এবং সাংস্কৃতিক বিনিময় বাড়ায়। ভ্রমণ মানুষের মধ্যে ব্যক্তিগত উন্নতি এবং বিশ্বজনীন বোঝাপড়া গড়ে তোলে। পরিবেশ এবং সাংস্কৃতিক প্রভাব কমাতে টেকসই প্রক্রিয়া অত্যন্ত জরুরি।
            </p>

            {/* <!-- Buttons --> */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="allpackage"
              >
                শুরু করুন
                <AiOutlineBlock className="w-4 h-4" />
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="https://maps.app.goo.gl/s2bhhzKgE5Z7Mbbd9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuMapPin />
                ম্যাপ দেখুন
              </a>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="https://i.ibb.co/YWGNtBg/mixphoto.jpg"
              alt="ছবির বর্ণনা"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
};

export default Hero;

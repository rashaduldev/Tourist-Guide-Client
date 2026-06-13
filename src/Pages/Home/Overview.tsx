"use client";

import { FaMapMarkedAlt, FaMountain, FaInfoCircle } from "react-icons/fa";

const Overview = () => {
  const cards = [
    {
      title: "মারায়ন তং পাহাড়",
      location: "আলীকদম, বান্দরবান",
      height: "১৬৫০ ফুট",
      summary:
        "বৌদ্ধ উপাসনালয় ও চূড়ার সমতল ভূমি থেকে দেখা যায় চারপাশের পাহাড় আর মাতামুহুরি নদী।",
    },
    {
      title: "আদিবাসী সংস্কৃতি",
      location: "মারায়ন তং অঞ্চল",
      height: "উঁচু-নিচু পাহাড়",
      summary:
        "ত্রিপুরা, মারমা ও মুরং জাতিগোষ্ঠীর বৈচিত্র্যময় জীবনযাপন, পাহাড়ে চাষাবাদ ও সংস্কৃতি।",
    },
    {
      title: "মাচাং ঘর সংস্কৃতি",
      location: "পাহাড়ি পাড়া",
      height: "চূড়ার নিচে",
      summary:
        "উপরে ঘর, নিচে গবাদি পশুর ঠাঁই — পাহাড়িদের চিরাচরিত মাচাং সংস্কৃতি।",
    },
    {
      title: "পাহাড়ি কৃষি জীবন",
      location: "বান্দরবান",
      height: "পার্বত্য এলাকা",
      summary:
        "ফল, শস্য ও তামাক চাষ নির্ভরশীল — জীবন চলে পাহাড়ের ছায়ায়।",
    },
  ];

  const footerTexts = [
    "আরও জানুন...",
    "পড়া চালিয়ে যান →",
    "গুরুত্বপূর্ণ তথ্য দেখুন",
    "অন্তর্ভুক্ত বিষয়াবলী",
    "আরো তথ্যের জন্য ক্লিক করুন",
    "Discover more →",
  ];

  const getFooterText = (index: number) => footerTexts[index % footerTexts.length];

  return (
    <div className="max-w-7xl py-10 lg:py-14 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        ভ্রমণ সারাংশ
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded p-6 shadow-sm dark:shadow-md hover:shadow-md dark:hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                <FaMapMarkedAlt className="text-gray-800 dark:text-gray-200 mr-2 text-lg" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
              </div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>
                  <FaMountain className="inline mr-1" /> {card.height}
                </span>
                <span>
                  <FaMapMarkedAlt className="inline mr-1" /> {card.location}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex items-start mt-2">
                <FaInfoCircle className="text-gray-500 dark:text-gray-400 mr-2 mt-1" />
                {card.summary}
              </p>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-700 mt-6"></div>

            <p
              className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 text-center cursor-pointer select-none
                         hover:text-indigo-800 dark:hover:text-indigo-300 transition duration-300"
            >
              {getFooterText(index)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;

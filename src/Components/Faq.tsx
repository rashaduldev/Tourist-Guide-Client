"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

const faqdata: FaqItem[] = [
    {
        id: 1,
        question: "ভ্রমণের জন্য সেরা সময় কখন?",
        answer: "ভ্রমণের সেরা সময় আপনার গন্তব্যের উপর নির্ভর করে। গ্রীষ্মমন্ডলীয় দেশের জন্য শুষ্ক মৌসুম আদর্শ, আর ঠান্ডা অঞ্চলের জন্য গ্রীষ্মকাল উত্তম। পরিকল্পনার আগে আবহাওয়া ও ঋতু সম্পর্কে জেনে নিন।"
    },
    {
        id: 2,
        question: "আমার কি ট্রাভেল ইনস্যুরেন্স দরকার?",
        answer: "হ্যাঁ, আমরা ট্রাভেল ইনস্যুরেন্স নেওয়ার পরামর্শ দিই, কারণ এটি হঠাৎ ট্রিপ বাতিল, চিকিৎসা জরুরি বা মালপত্র হারানোর ক্ষেত্রে সহায়তা করে। এটি আপনার ভ্রমণকে আরও নিশ্চিন্ত করে তোলে।"
    },
    {
        id: 3,
        question: "আমি কীভাবে একটি ট্যুর প্যাকেজ বুক করতে পারি?",
        answer: "আমাদের ওয়েবসাইট থেকে সহজেই একটি ট্যুর প্যাকেজ বুক করতে পারেন। আপনার পছন্দের প্যাকেজ বেছে নিয়ে সহজ স্টেপ অনুসরণ করুন। সাহায্যের জন্য আমাদের কাস্টমার সার্ভিসে যোগাযোগ করুন।"
    },
    {
        id: 4,
        question: "আন্তর্জাতিক ভ্রমণের জন্য কী কী ডকুমেন্ট দরকার?",
        answer: "আন্তর্জাতিক ভ্রমণের জন্য পাসপোর্ট এবং অনেক সময় ভিসার প্রয়োজন হয়। কিছু দেশে ভ্যাকসিন সার্টিফিকেট বা স্বাস্থ্য সংক্রান্ত প্রমাণপত্র চাওয়া হয়। গন্তব্যের প্রয়োজনীয়তা জেনে নিন।"
    },
    {
        id: 5,
        question: "ভ্রমণের সময় কী ধরনের পোশাক নেওয়া উচিত?",
        answer: "আপনার গন্তব্যের আবহাওয়া অনুযায়ী পোশাক নেওয়া উচিত। শীতল স্থানে গরম কাপড় এবং উষ্ণ স্থানে হালকা, আরামদায়ক পোশাক নেওয়া ভালো।"
    },
    {
        id: 6,
        question: "ফ্লাইট মিস করলে আমি কী করতে পারি?",
        answer: "ফ্লাইট মিস করলে দ্রুত এয়ারলাইন্সের কাস্টমার সার্ভিসে যোগাযোগ করুন। তারা পরবর্তী ফ্লাইটে আসন খালি থাকলে সাহায্য করতে পারে।"
    },
    {
        id: 7,
        question: "আমি কি আমার বুকিং বাতিল করতে পারবো?",
        answer: "হ্যাঁ, আপনি নির্দিষ্ট সময়ের মধ্যে বুকিং বাতিল করতে পারবেন। তবে নির্ভর করে শর্ত ও প্যাকেজের উপর। বিস্তারিত জানতে আমাদের কাস্টমার কেয়ারে যোগাযোগ করুন।"
    },
    {
        id: 8,
        question: "আমি কি শিশু বা প্রবীণদের জন্য বিশেষ সুবিধা পাব?",
        answer: "হ্যাঁ, আমাদের প্যাকেজে শিশু ও প্রবীণদের জন্য বিশেষ ডিসকাউন্ট ও সুবিধা প্রদান করা হয়। বুকিংয়ের সময় এটি নিশ্চিত করুন।"
    }
];


const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleCollapse = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 md:px-0 py-10 my-0 md:my-10">
            <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-36">
                {/* Left Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                        সাধারণ জিজ্ঞাসা
                    </h1>
                    <p className="mt-6 text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                        আমাদের ই-লার্নিং প্ল্যাটফর্ম সম্পর্কিত সবচেয়ে সাধারণ প্রশ্নের উত্তর খুঁজে নিন, আপনার শেখার যাত্রা সহজ করতে।
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-[700px]">
                    {faqdata.map((item: FaqItem, index: number) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg my-3 transition-all duration-300"
                        >
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleCollapse(index)}
                            >
                                <span className="text-base md:text-lg font-medium text-black dark:text-white flex gap-2">
                                    <strong>প্রঃ {item.id}</strong> {item.question}
                                </span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-black dark:text-white" />
                                ) : (
                                    <FaChevronDown className="text-black dark:text-white" />
                                )}
                            </div>

                            {/* Answer section */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                {openIndex === index && (
                                    <div className="p-4 pt-0 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                                        উত্তরঃ {item.answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

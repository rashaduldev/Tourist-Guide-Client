import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqdata = [
    {
        id: 1,
        question: "What are the best times of the year to travel?",
        answer: "The best travel time depends on your destination. For tropical countries, the dry season is typically ideal, while for colder regions, summer is the best time. Always check local seasons and weather conditions before planning your trip."
    },
    {
        id: 2,
        question: "Do I need travel insurance?",
        answer: "Yes, we recommend purchasing travel insurance for unexpected events like trip cancellations, medical emergencies, or lost luggage. Travel insurance provides peace of mind during your trip."
    },
    {
        id: 3,
        question: "How can I book a tour package?",
        answer: "You can easily book a tour package online through our website. Browse our available packages, select the one that suits you best, and follow the simple booking process. For any assistance, contact our customer service team."
    },
    {
        id: 4,
        question: "What documents do I need to travel internationally?",
        answer: "For international travel, you will need a valid passport and, depending on your destination, a visa. Some countries also require proof of vaccinations or specific health certificates. Be sure to check the entry requirements for your destination."
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleCollapse = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
       <div className='max-w-[85rem] mx-auto'>
           <div className="flex flex-col lg:flex-row justify-center lg:my-36 my-8 lg:gap-72 gap-12 px-4 lg:px-0 py-6">
            <div className='text-center lg:text-left'>
                <h1 className="header_text">
                    Frequently Asked <br /> Questions
                </h1>
                <p className='mt-6 text-xl'>
                    Explore our eLearning platform FAQ section for quick <br className='hidden lg:inline' />
                    solutions to common queries, ensuring a seamless <br className='hidden lg:inline' />
                    learning journey.
                </p>
            </div>
            <div className="w-full lg:w-[700px]">
                {faqdata.map((item, index) => (
                    <div key={item.id} className="bg-base-200 my-2 rounded-lg bg-gray-100">
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer "
                            onClick={() => toggleCollapse(index)}
                        >
                            <span className="text-lg lg:text-xl font-medium flex gap-2">
                                <h4 className='font-bold'>Q:{item.id}</h4>
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <button className='flex items-center gap-3 btn bg-[#E5F4EE] hover:bg-[#E5F4EE] text-[#007B55] py-2 px-5 rounded'>
                                    <p className=''>Answer</p>
                                    <FaChevronUp className="text-xl" />
                                </button>
                            ) : (
                                <button className='flex items-center gap-3 btn bg-[#E5F4EE] hover:bg-[#E5F4EE] text-[#007B55] py-2 px-5 rounded'>
                                    <p className=''>Answer</p>
                                    <FaChevronDown className="text-xl" />
                                </button>
                            )}
                        </div>
                        {openIndex === index && (
                            <div className="p-4">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
       </div>
    );
};

export default Faq;

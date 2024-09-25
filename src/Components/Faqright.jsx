import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <h3 className="text-2xl font-semibold">{question}</h3>
        <button
          className="text-blue-500 focus:outline-none text-3xl w-10 h-10"
          onClick={toggleAnswer}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faqright = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
      id: 4,
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available."
    },
  ];

  return (
    <div className="lg:w-[600px] mx-auto mt-8 p-10">
      {/* <h1 className="text-2xl font-bold mb-16">Frequently Asked Questions</h1> */}
      {faqs.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faqright;

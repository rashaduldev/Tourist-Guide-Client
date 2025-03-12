import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    text: "I'm absolutely floored by the level of care and attention to detail in this product!",
    name: "Nicole Grazioso",
    role: "Director Payments & Risk | HubSpot",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    text: "The user experience is fantastic, and the support team is amazing!",
    name: "Alex Johnson",
    role: "CEO | Tech Innovators",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    text: "The customization options are endless, and the design is sleek and modern.",
    name: "Jamie Lee",
    role: "Marketing Specialist | Creative Agency",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 4,
    text: "This is by far the best investment I have made for my business!",
    name: "Michael Smith",
    role: "Founder | StartUp",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 5,
    text: "I love how easy it is to use, and the customer support is top-notch.",
    name: "Sarah Davis",
    role: "Product Manager | E-commerce Inc.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 6,
    text: "Seamless integration and great performance. Highly recommend!",
    name: "David Brown",
    role: "Lead Developer | SaaS Solutions",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3); // Default for large screens

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Responsive design logic
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile (sm)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet (md)
      } else {
        setCardsPerView(3); // Desktop (lg, xl)
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  return (
    <div className="px-4 py-10 sm:px-6 md:px-10 lg:py-14">
      <div className="md:mx-36">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-10 text-gray-900 dark:text-white">
          Testimonials
        </h1>
        <hr className="border-gray-700" />
      </div>

      {/* Testimonials Carousel */}
      <div className="relative overflow-hidden container mx-auto mt-10">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: `-${startIndex * (100 / cardsPerView)}%` }} // Adjusts based on screen size
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ width: "calc(100% + 1rem)" }}
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`flex-none px-2`}
              style={{ width: `${100 / cardsPerView}%` }} // Dynamic width based on screen size
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div
                className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-700 p-6"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-base text-gray-800 md:text-xl dark:text-white italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center mt-4">
                  <img
                    className="w-12 h-12 rounded-full border border-gray-300"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="ml-3">
                    <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

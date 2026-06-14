"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface SwipsliderProps {
  heading: string;
  icon: React.ReactNode;
  itemsss: any;
}

const Swipslider = ({ heading, icon }: SwipsliderProps) => {
  const router = useRouter();
  const handleClick = () => router.push(`/single/${heading}`);

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="group mx-auto my-8 flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-full border border-white/40 bg-card/10 text-foreground shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-transparent hover:bg-card hover:shadow-xl lg:h-40 lg:w-40 dark:text-white dark:hover:text-foreground"
    >
      <span className="text-2xl text-primary transition-transform duration-300 group-hover:scale-125 lg:text-4xl">
        {icon}
      </span>
      <span className="text-sm font-semibold capitalize lg:text-base">
        {heading}
      </span>
    </motion.button>
  );
};

export default Swipslider;

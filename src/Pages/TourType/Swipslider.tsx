"use client";

import { useRouter } from "next/navigation";

interface SwipsliderProps {
  heading: string;
  icon: React.ReactNode;
  itemsss: any;
}

const Swipslider = ({ heading, icon, itemsss }: SwipsliderProps) => {
  const router = useRouter();
  const handleClick = (itemsss: any) => {
    router.push(`/single/${heading}`);
  };

    return (
        <div
       onClick={() => handleClick(itemsss)}
        style={{ border: "1px solid white" }}
        className="border-spacing-3 border-white h-24 w-24 lg:h-40 rounded-full lg:w-40 text-center items-center lg:text-4xl mx-auto text-black cursor-pointer hover:text-black hover:bg-white my-10">
        <p className="text-center mx-auto flex justify-center pt-4">
          {icon}
        </p>
        <p className="lg:pt-4">{heading}</p>
      </div>
    );
};

export default Swipslider;

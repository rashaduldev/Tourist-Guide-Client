"use client";

import { Parallax } from 'react-parallax';

interface CoverProps {
  img: string;
  title: string;
  subtitle: string;
}

const Cover = ({ img, title, subtitle }: CoverProps) => {
  return (
    <div className="mx-4 md:mx-10 my-10 rounded overflow-hidden">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="cover image"
        strength={-200}
      >
        {/* Parallax Section */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[600px] flex items-center justify-center">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

          {/* Content box */}
          <div className="relative z-20 px-4 text-center w-full max-w-4xl">
            <div className="bg-gray-700 bg-opacity-30 px-6 md:px-20 py-6 rounded mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold uppercase text-white">
                {title}
              </h1>
              <p className="mt-3 text-base md:text-2xl text-white">{subtitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;

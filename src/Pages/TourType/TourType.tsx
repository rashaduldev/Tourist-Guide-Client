"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaBagShopping,
  FaCat,
  FaPersonWalking,
  FaShapes,
  FaWheelchair,
  FaWind,
} from "react-icons/fa6";
import Swipslider from "./Swipslider";
import SectionHeading from "@/components/shared/SectionHeading";
import { getPackages } from "@/app/actions/data";

const backgroundImg = "/assets/tourbgimg.jpg";

const TourType = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPackages().then((data) => {
      setPackages(data);
      setLoading(false);
    });
  }, []);

  const byType = (t: string) =>
    packages.filter((item: any) => item.tour_type === t);

  const slides = [
    { items: byType("sports"), heading: "Sports", icon: <FaWheelchair /> },
    { items: byType("walking"), heading: "Walking", icon: <FaPersonWalking /> },
    { items: byType("wildlife"), heading: "wildlife", icon: <FaCat /> },
    { items: byType("airrides"), heading: "এয়ার রাইডস", icon: <FaWind /> },
    { items: byType("cruises"), heading: "ক্রুজেস", icon: <FaShapes /> },
    { items: byType("hiking"), heading: "হাইকিং", icon: <FaBagShopping /> },
  ];

  return (
    <section className="relative my-16 overflow-hidden rounded-3xl">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/85 via-white/80 to-blue-50/80 dark:from-slate-950/90 dark:via-slate-900/85 dark:to-blue-950/80" />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <SectionHeading
          eyebrow="ট্যুরের ধরন"
          title="এখানে আপনার জন্য ট্যুর খুঁজুন"
          subtitle="আপনার পছন্দের ধরন বেছে নিন — প্রতিটি ধরনে রয়েছে নানা রকম রোমাঞ্চকর প্যাকেজ।"
        />

        {loading ? (
          <div className="mt-12 flex justify-center gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-28 w-28 animate-pulse rounded-full bg-slate-200 lg:h-40 lg:w-40 dark:bg-slate-800"
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 px-4 lg:px-12">
            <Swiper
              watchSlidesProgress
              slidesPerView={2}
              breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {slides.map((s) => (
                <SwiperSlide key={s.heading}>
                  <Swipslider itemsss={s.items} heading={s.heading} icon={s.icon} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourType;

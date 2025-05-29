import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import backgroundImg from "../../assets/tourbgimg.jpg";
import { FaBagShopping, FaCat, FaPersonWalking, FaShapes, FaWheelchair, FaWind } from "react-icons/fa6";
import Swipslider from "./Swipslider";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const TourType = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublick = useAxiosPublick();

  useEffect(() => {
    axiosPublick.get('/packages')
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('প্যাকেজ লোড করতে সমস্যা হয়েছে:', err);
        setLoading(false);
      });
  }, [axiosPublick]);

  const cruises = packages.filter((item) => item.tour_type === "cruises");
  const wildlife = packages.filter((item) => item.tour_type === "wildlife");
  const walking = packages.filter((item) => item.tour_type === "walking");
  const sports = packages.filter((item) => item.tour_type === "sports");
  const hiking = packages.filter((item) => item.tour_type === "hiking");
  const airrides = packages.filter((item) => item.tour_type === "airrides");

  return (
    <div className="relative lg:h-[450px] max-w-7xl mx-auto py-10 my-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          opacity: 0.3,
          backgroundColor: "rgb(0, 0, 0)",
        }}
      />
      <div className="relative text-center z-20">
        <h2 className="text-gray-900 dark:text-gray-100 font-bold pt-7 text-lg md:text-xl italic">এখানে আপনার জন্য ট্যুর খুঁজুন</h2>
        <h2 className="text-3xl md:text-5xl my-5 text-gray-900 dark:text-gray-100 font-bold">ট্যুরের ধরন</h2>
      </div>
      {loading ? (
        <div className="text-center text-gray-900 dark:text-gray-100">লোড হচ্ছে...</div>
      ) : (
        <>
          <br />
          <div className="md:mx-16">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={3}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <Swipslider itemsss={sports} heading={'Sports'} icon={<FaWheelchair />} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={walking} heading={'Walking'} icon={<FaPersonWalking />} />
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={wildlife} heading={'wildlife'} icon={<FaCat />} />
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={airrides} heading={'এয়ার রাইডস'} icon={<FaWind />} />
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={cruises} heading={'ক্রুজেস'} icon={<FaShapes />} />
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={hiking} heading={'হাইকিং'} icon={<FaBagShopping />} />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default TourType;

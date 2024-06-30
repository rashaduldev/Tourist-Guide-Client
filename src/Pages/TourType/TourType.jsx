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
        console.error('Error fetching packages:', err);
        setLoading(false);
      });
  }, [axiosPublick]);

  const cruises = packages.filter((item) => item.tour_type === "cruises");
  const wildlife = packages.filter((item) => item.tour_type === "wildlife");
  const walking = packages.filter((item) => item.tour_type === "walking");
  const sports = packages.filter((item) => item.tour_type === "sports");
  const hiking = packages.filter((item) => item.tour_type === "hiking");
  const airrides = packages.filter((item) => item.tour_type === "airrides");

  const handleClick = () => {
    console.log('good');
  }

  return (
    <div className="relative lg:h-[450px] lg:mx-36 py-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          opacity: 0.4, // Adjust the opacity as needed
          backgroundColor: "rgba(0, 0, 0, 0.966)", // Overlay color
        }}
      ></div>
      <div className="relative text-center z-20">
        <h2 className="text-black pt-7 text-xl italic">Here Find a tour</h2>
        <h2 className="text-5xl my-5 text-black font-bold">Tour Type</h2>
      </div>
      <hr className="border-white dark:border-white mx-10"></hr>
      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <>
          <h3></h3>
          <br />
          <div className="mx-16">
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={3}
              className="mySwiper"
            >
              <SwiperSlide>
                <div onClick={handleClick}>
                  <Swipslider itemsss={sports} heading={'Sports'} icon={<FaWheelchair />}>
                  </Swipslider>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={walking} heading={'Walking'} icon={<FaPersonWalking />}/>
                
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={wildlife} heading={'Wildlife'} icon={<FaCat />}/>
               
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={airrides} heading={'Air Rides'} icon={<FaWind />}/>
                
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={cruises} heading={'Cruises'} icon={<FaShapes />}/>
               
              </SwiperSlide>
              <SwiperSlide>
                <Swipslider itemsss={hiking} heading={'Hiking'} icon={<FaBagShopping />}/>
               
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default TourType;

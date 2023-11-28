import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import backgroundImg from "../../assets/tourbgimg.jpg";
import { FaBagShopping, FaCat, FaPersonWalking, FaShapes, FaWheelchair, FaWind } from "react-icons/fa6";
import Swipslider from "./Swipslider";

const TourType = () => {

  return (
    <div className="relative lg:h-96">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          opacity: 0.5, // Adjust the opacity as needed
          backgroundColor: "rgba(0, 0, 0, 0.966)", // Overlay color
        }}
      ></div>
      <div className="relative text-center z-20">
        <h2 className="text-white pt-7">Find a tour</h2>
        <h2 className="text-5xl my-5 text-white font-bold">Tour Type</h2>
      </div>
      <hr className="border-white dark:border-white mx-10"></hr>
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
        <Swipslider heading={'Sports'} icon={<FaWheelchair></FaWheelchair>}>
        </Swipslider>
            </SwiperSlide>

            <SwiperSlide>
            <Swipslider heading={'Walking'} icon={<FaPersonWalking></FaPersonWalking>}>
          </Swipslider>   
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Swipslider heading={'WildLife'} icon={<FaCat></FaCat>}>
        </Swipslider>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Swipslider heading={'Air Rides'} icon={<FaWind></FaWind>}>
        </Swipslider>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Swipslider heading={'Cruises'} icon={<FaShapes></FaShapes>}>
        </Swipslider>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Swipslider heading={'Hiking'} icon={<FaBagShopping></FaBagShopping>}>
        </Swipslider>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </div>
  );
};

export default TourType;

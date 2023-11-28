
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import backgroundImg from '../../assets/tourbgimg.jpg'
import Swipslider from './Swipslider';


const TourType = () => {
    return (
        <div className='lg:h-96' style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className='text-center'>
            <h2 className='text-white '>Find a tour</h2>
            <h2 className='text-5xl my-5 text-white font-bold'>Tour Type</h2>
            </div>
            <hr className="border-white dark:border-white mx-10"></hr>
            <>
      <h3>
        
      </h3>{" "}
      <br />
      <div className='mx-16'>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>
            <Swipslider></Swipslider>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </>
        </div>
    );
};

export default TourType;
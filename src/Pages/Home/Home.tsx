"use client";

import Faq from "../../Components/Faq";
import Hero from "../../Components/Hero";
import Needhelp from "../../Components/Needhelp";
import Stories from "../../Components/Stories";
import Tastemonials from "../../Components/Tastemonials";
import ToursSection from "../../Components/ToursSection";
import WhyChooseUs from "../../Components/WhyChooseUs";
// import TourStories from "../../Components/TourStories";
import TourType from "../TourType/TourType";
import TravelGuide from "./TravelGuide";


const Home = () => {
    return (
        <div>
              <Hero/>
            <TravelGuide/>
            <TourType/>
            <ToursSection/>
            <Tastemonials/>
            {/* <TourStories/> */}
            <WhyChooseUs/>
            <Stories/>
            <Faq/>
            <Needhelp/>
        </div>
    );
};

export default Home;

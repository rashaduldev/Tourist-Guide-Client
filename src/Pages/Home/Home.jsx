import Faq from "../../Components/Faq";
import Hero from "../../Components/Hero";
// import Slider from "../../Components/Slider";
import Stories from "../../Components/Stories";
import Tastemonials from "../../Components/Tastemonials";
import TourStories from "../../Components/TourStories";
import TourType from "../TourType/TourType";
import TravelGuide from "./TravelGuide";


const Home = () => {
    return (
        <div>
              <Hero></Hero>
            {/* <Slider></Slider> */}
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <Tastemonials/>
            <TourStories></TourStories>
            <Stories></Stories>
            <Faq/>
          
        </div>
    );
};

export default Home;
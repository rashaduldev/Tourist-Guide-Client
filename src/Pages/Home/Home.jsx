import Faq from "../../Components/Faq";
import Hero from "../../Components/Hero";
import Needhelp from "../../Components/Needhelp";
// import Slider from "../../Components/Slider";
import Stories from "../../Components/Stories";
import Tastemonials from "../../Components/Tastemonials";
import TourStories from "../../Components/TourStories";
import TourType from "../TourType/TourType";
import TravelGuide from "./TravelGuide";


const Home = () => {
    return (
        <div>
              <Hero/>
            {/* <Slider></Slider> */}
            <TravelGuide/>
            <TourType/>
            <Tastemonials/>
            <TourStories/>
            <Stories/>
            <Faq/>
            <Needhelp/>
          <hr />
        </div>
    );
};

export default Home;
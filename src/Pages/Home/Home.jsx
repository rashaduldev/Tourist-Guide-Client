import Slider from "../../Components/Slider";
import TourStories from "../../Components/TourStories";
import TourType from "../TourType/TourType";
import TravelGuide from "./TravelGuide";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
            <TourStories></TourStories>
        </div>
    );
};

export default Home;
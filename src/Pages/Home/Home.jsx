import Slider from "../../Components/Slider";
import Stories from "../../Components/Stories";
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
            <Stories></Stories>
        </div>
    );
};

export default Home;
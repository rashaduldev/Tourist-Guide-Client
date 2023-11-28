import Slider from "../../Components/Slider";
import TourType from "../TourType/TourType";
import TravelGuide from "./TravelGuide";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TravelGuide></TravelGuide>
            <TourType></TourType>
        </div>
    );
};

export default Home;
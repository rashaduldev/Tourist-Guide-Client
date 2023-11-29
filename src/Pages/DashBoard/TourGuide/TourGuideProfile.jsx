import { useLoaderData, useParams } from "react-router-dom";

const TourGuideProfile = () => {
    const {id}=useParams();
    console.log(id);
    const loadedData=useLoaderData();
    console.log(loadedData);
    return (
        <div>
            
        </div>
    );
};

export default TourGuideProfile;
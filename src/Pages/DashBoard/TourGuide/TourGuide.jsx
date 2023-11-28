import { useState } from "react";
import useAxiosPublick from "../../../Hooks/useAxiosPublick";


const TourGuide = () => {
    const [packages,setPackages]=useState([]);
    const [loading,setLoading]=useState(true);
    const axiosPublic=useAxiosPublick();
    axiosPublic.get('/guides')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setPackages(data);
       setLoading(false);
    })
    return (
        <div>
            <h2>Tour Guide</h2>
            {
                packages.length
            }
        </div>
    );
};

export default TourGuide;
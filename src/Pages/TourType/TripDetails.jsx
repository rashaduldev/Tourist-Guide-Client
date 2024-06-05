import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TripDetails = () => {
    const [datafil,setDatafil]=useState([]);
    const params=useParams();
    console.log(params);

    useEffect(()=>{
        fetch('https://tourist-guide-server-tawny.vercel.app/packages')
        .then(response => response.json())
        .then(data=>{
          console.log(data);
          setDatafil(data);
        })
      },[])
     const newData = datafil.find((item) => item.id == params.id);
        console.log(newData);
        const {image} = newData;
    return (
        <div>
         <img src={image} alt="" />
        </div>
    );
};

export default TripDetails;
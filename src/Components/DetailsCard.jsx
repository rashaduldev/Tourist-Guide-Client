import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const DetailsCard = () => {
    const [data,setData]=useState([]);
    const dataLoaded=useLoaderData();
    console.log(dataLoaded);
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        const findcard=dataLoaded.find(daata=>daata.id==id);
        setData(findcard);
    },[id,dataLoaded])
    return (
        <div>
           <SingleCard data={data}></SingleCard>
        </div>
    );
};

export default DetailsCard;
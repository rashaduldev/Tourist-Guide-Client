import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";


const SingleType = () => {
  const [datafil,setDatafil]=useState([]);
  const packagess = useLoaderData();
  console.log(packagess);
  const params=useParams();
  console.log(params.name);
  useEffect(()=>{
    fetch('http://localhost:8000/packages')
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      setDatafil(data);
    })
  },[])
 const newData = datafil.filter((item) => item.tour_type === params.name.toLowerCase());
    console.log(newData);


    return (
        <div>
          <h1 className="text-5xl text-center uppercase font-bold my-5">{params.name}</h1>
          <div className="grid grid-cols-3">
          {
            newData.map((item) =>  
           <Details item={item} key={item._id}></Details>
           
            )
          }
         
        </div>
        </div>
    );
};

export default SingleType;
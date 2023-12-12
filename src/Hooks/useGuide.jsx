
import { useEffect, useState } from "react";
const useGuide = () => {
    const [guide,setGuide]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://tourist-guide-server-jhy7d3hy9-rashaduldev.vercel.app/guides')
        .then(res=>res.json())
        .then(data=>{
            setGuide(data);
           setLoading(false);
        })
    },[])
    return [guide,loading]
};

export default useGuide;
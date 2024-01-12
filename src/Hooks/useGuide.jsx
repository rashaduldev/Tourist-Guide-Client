
import { useEffect, useState } from "react";
const useGuide = () => {
    const [guide,setGuide]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:8000/guides')
        .then(res=>res.json())
        .then(data=>{
            setGuide(data);
           setLoading(false);
        })
    },[])
    return [guide,loading]
};

export default useGuide;
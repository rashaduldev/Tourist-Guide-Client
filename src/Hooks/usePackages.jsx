
import { useEffect, useState } from "react";

const usePackages = () => {
    const [packages,setPackages]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://tourist-guide-server-tawny.vercel.app/packages')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setPackages(data);
           setLoading(false);
        })
    },[])
    return [packages,loading]
};

export default usePackages;

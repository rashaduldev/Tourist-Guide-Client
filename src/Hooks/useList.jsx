import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useList = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    // tanstack quarry
    const {refetch, data : list=[]}=useQuery({
        queryKey:['list',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/wishlists?email=${user?.email}`);
            return res.data;
        }
    })
    return [list,refetch]
};

export default useList;
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";


const axiosSecure=axios.create({
    baseURL:'https://tourist-guide-server-jhy7d3hy9-rashaduldev.vercel.app'
})
const useAxiosSecure = () => {
    // const {logOut}=useAuth();
    const navigate=useNavigate();
    // interceptors request
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access-token');
        // console.log('stoped by interceptor',token);
        config.headers.authorization=`Bearer ${token}`;
        return config;
    }), function(error){
        return Promise.reject(error);
    }

    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error)=> {
    const status=error.response.status;
    console.log('Status error in the interceptor',status);
    if (status=== 401 || status=== 403) {
        // await logOut();
        navigate('/login');
    }
    return Promise.reject(error);
  });
    return axiosSecure;
};

export default useAxiosSecure;
import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://tourist-guide-server-tawny.vercel.app'
    // baseURL:'http://localhost:8000'

})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;
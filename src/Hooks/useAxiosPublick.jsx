import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://tourist-guide-server-tawny.vercel.app'
    // baseURL:'https://tourist-guide-server-tawny.vercel.app'

})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;
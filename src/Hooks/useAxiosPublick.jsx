import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://tourist-guide-server-blush.vercel.app'
})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;
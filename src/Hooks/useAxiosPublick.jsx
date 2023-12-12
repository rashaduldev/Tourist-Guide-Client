import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://tourist-guide-server-jhy7d3hy9-rashaduldev.vercel.app'
})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;
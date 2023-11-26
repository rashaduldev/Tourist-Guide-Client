import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'http://localhost:3000'
})
const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;
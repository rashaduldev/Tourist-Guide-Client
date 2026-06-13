import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://tourist-guide-server-tawny.vercel.app",
});

const useAxiosPublick = () => {
  return axiosPublic;
};

export default useAxiosPublick;

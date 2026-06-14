import axios from "axios";

// All backend calls go through the Next.js proxy (/api/proxy), which routes to
// the correct upstream and attaches the auth token server-side.
const axiosPublic = axios.create({
  baseURL: "/api/proxy",
});

const useAxiosPublick = () => {
  return axiosPublic;
};

export default useAxiosPublick;

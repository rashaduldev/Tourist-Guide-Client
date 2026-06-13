"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://tourist-guide-server-tawny.vercel.app",
});

const useAxiosSecure = () => {
  const router = useRouter();

  // request interceptor — attach the JWT
  axiosSecure.interceptors.request.use(
    (config) => {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("access-token")
          : null;
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error),
  );

  // response interceptor — bounce to /login on auth errors
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        router.push("/login");
      }
      return Promise.reject(error);
    },
  );

  return axiosSecure;
};

export default useAxiosSecure;

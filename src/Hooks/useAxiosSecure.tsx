"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

// Secured calls also go through the proxy; the Bearer token is injected
// server-side from the httpOnly session, so no client-side token handling.
const axiosSecure = axios.create({
  baseURL: "/api/proxy",
});

const useAxiosSecure = () => {
  const router = useRouter();

  // Bounce to /login on auth errors from the upstream API.
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

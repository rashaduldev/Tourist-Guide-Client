"use client";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";

import useAxiosPublick from "../Hooks/useAxiosPublick";
import useAuth from "../Hooks/useAuth";

const ExtraLogin = () => {
    const { googleSignin } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const from = pathname || "/";
    const axiosPublic = useAxiosPublick();

    const handleGoogleSignin = () => {
        googleSignin()
        .then((res: any) => {
            const userInfo = {
              email: res.user?.email,
              name: res.user?.displayName
            };
            axiosPublic.post('/users', userInfo);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          router.replace(from);
        });
    };
  return (
    <div className="px-4 flex flex-row gap-3 mb-3 mx-auto text-center mt-10 justify-center">
      <div
      onClick={handleGoogleSignin}
      className="btn btn-primary flex items-center gap-2 text-xl">

        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 rounded-lg border text-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border-neutral-400 focus:border-accent font-light bg-primary text-base">
        <FaGoogle/>

      </button>
      </div>
      <div
      onClick={handleGoogleSignin}
      className="btn btn-primary flex items-center gap-2 text-xl">

        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 rounded-lg border text-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border-neutral-400 focus:border-accent font-light bg-primary text-base">
        <FaFacebook/>

      </button>
      </div>
      <div
      onClick={handleGoogleSignin}
      className="btn btn-primary flex items-center gap-2 text-xl">

        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 rounded-lg border text-black hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border-neutral-400 focus:border-accent font-light bg-primary text-base">
        <FaGithub/>

      </button>
      </div>
    </div>
  );
};

export default ExtraLogin;

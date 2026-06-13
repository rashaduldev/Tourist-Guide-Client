"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import ExtraLogin from "../../Components/ExtraLogin";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const img = "/assets/authentication2.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const axiosPublic = useAxiosPublick();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, password } = data;
    try {
      // Register the user in the backend (creates the account + hashes password).
      await axiosPublic.post("/auth/register", { name, email, password });

      // Then sign in with NextAuth so a session cookie is established.
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        router.push("/login");
        return;
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Signup",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
      router.refresh();
    } catch (error: any) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: error?.response?.data?.message ?? "Signup failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="mt-10 my-8">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-20 justify-center lg:mx-36">
          <div className="text-center lg:text-center">
            <h1 className="text-2xl lg:text-5xl font-bold mb-9">Signup Here</h1>
            <img src={img} alt="" />
          </div>
          <div className=" w-full max-w-lg bg-base-300 rounded pt-8 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-black/60">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    {...register("name", { required: true })}
                    className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-2">Name is required !</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-black/60">
                      Photo
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="Photo Url"
                    className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-2 text-base placeholder:text-black/60 outline-none"
                    {...register("photourl", { required: true })}
                  />
                  {errors.photourl && (
                    <span className="text-red-600 mt-2">
                      photourl is required !
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-black/60">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-2">
                      Email is required !
                    </span>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text font-bold text-black/60">
                      Password
                    </span>
                  </label>
                  <input
                    type={!showPassword ? "password" : "text"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 99,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                    })}
                    placeholder="password"
                    className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 mt-2">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 mt-2">
                      Please minimum enter 6 charecter
                    </p>
                  )}
                  {errors.password?.type === "max" && (
                    <p className="text-red-600">
                      Please maximum enter 20 charecter
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Please enter at least a symbol, upper and lower case
                      letters and a number
                    </p>
                  )}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[37px] right-3"
                  >
                    {showPassword ? (
                      <button type="button">
                        <FaEye />
                      </button>
                    ) : (
                      <button type="button">
                        <FaEyeSlash />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  className="w-full py-3 px-4 my-7 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  SignUp
                </button>
              </div>
            </form>
            <p className="text-center italic">
              Already Have an Account ?{" "}
              <Link className="text-blue-400 underline" href="/login">
                Please Login
              </Link>{" "}
            </p>
            <ExtraLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

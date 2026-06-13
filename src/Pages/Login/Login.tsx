"use client";

import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import ExtraLogin from "../../Components/ExtraLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const img = "/assets/authentication2.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: "Email or password did not match.",
        timer: 2000,
        showConfirmButton: false,
      });
      return;
    }

    Swal.fire({
      title: "Login Successfully!",
      icon: "success",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
    router.replace(from);
    router.refresh();
  };
  return (
    <div>
      <div className="w-full my-20">
        <div className="flex flex-col lg:flex-row justify-center container mx-auto">
          <div className="text-center flex-1  md:max-w-lg lg:text-left mx-auto">
            <h1 className="text-5xl text-black font-bold text-center mb-9">
              Login now!
            </h1>
            <img src={img} alt="" />
          </div>
          <div className="md:max-w-md w-full flex-1 md:p-10 bg-base-300 mx-auto">
            {/* <!-- Form --> */}
            <form className="mx-4" onSubmit={handleLogin}>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-bold text-black/60"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white font-bold text-black/60"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={!showPassword ? "password" : "text"}
                      id="password"
                      name="password"
                      placeholder="password"
                      className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                      required
                      aria-describedby="password-error"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[10px] right-3"
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
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                <button
                  type="submit"
                  className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Log in
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
            <p className="text-center italic mt-7">
              New hare ?{" "}
              <Link className="text-blue-400 underline" href="/signup">
                Please signup
              </Link>{" "}
            </p>
            <ExtraLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

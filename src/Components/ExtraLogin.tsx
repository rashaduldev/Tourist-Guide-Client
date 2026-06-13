"use client";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const ExtraLogin = () => {
    const searchParams = useSearchParams();
    const from = searchParams.get("from") || "/";

    // NextAuth handles the OAuth redirect; /auth/social creates the backend user.
    const handleGoogleSignin = () => {
        signIn("google", { callbackUrl: from });
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

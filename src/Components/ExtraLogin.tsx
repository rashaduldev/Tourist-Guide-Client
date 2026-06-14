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

  const providers = [
    { icon: <FaGoogle />, label: "Google", onClick: handleGoogleSignin },
    { icon: <FaFacebook />, label: "Facebook", onClick: handleGoogleSignin },
    { icon: <FaGithub />, label: "GitHub", onClick: handleGoogleSignin },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {providers.map((p) => (
        <button
          key={p.label}
          type="button"
          onClick={p.onClick}
          aria-label={`${p.label} দিয়ে চালিয়ে যান`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          <span className="text-lg">{p.icon}</span>
          <span className="hidden text-sm font-medium sm:inline">{p.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ExtraLogin;

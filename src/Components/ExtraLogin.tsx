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
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md dark:border-border dark:bg-muted dark:text-muted-foreground"
        >
          <span className="text-lg">{p.icon}</span>
          <span className="hidden text-sm font-medium sm:inline">{p.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ExtraLogin;

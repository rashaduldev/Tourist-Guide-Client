"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <div className="p-8 rounded-lg text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-black">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="text-primary hover:underline"
          >
            Try again
          </button>
          <Link href="/" className="text-primary hover:underline">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

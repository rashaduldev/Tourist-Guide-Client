"use client";

import { FaHeart } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { addToWishlist } from "@/app/actions/secure";

interface MyWishListProps {
  item?: any;
}

const MyWishList = ({ item = {} }: MyWishListProps) => {
  const { tour_type, image, trip_title, price, _id, id } = item;
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        id,
        email: user.email,
        tour_type,
        image,
        trip_title,
        price,
      };
      addToWishlist(cartItem).then((res: any) => {
        if (res?.insertedId) {
          Swal.fire({
            icon: "success",
            title: `${trip_title} আপনার ইচ্ছেতালিকায় যোগ হয়েছে`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "আপনি লগইন করেননি!",
        text: "দয়া করে আগে লগইন করুন।",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "লগইন করুন",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/login?from=${encodeURIComponent(pathname ?? "/")}`);
        }
      });
    }
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={trip_title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {tour_type && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 backdrop-blur dark:bg-slate-900/80 dark:text-slate-200">
            {tour_type}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          aria-label="ইচ্ছেতালিকায় যোগ করুন"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-400 backdrop-blur transition-all hover:scale-110 hover:bg-white hover:text-rose-500 dark:bg-slate-800/90"
        >
          <FaHeart />
        </button>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h2 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
          {trip_title}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          শুরু{" "}
          <span className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
            ৳{price}
          </span>
        </p>

        <Link
          href={`/details/${id}`}
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white dark:border-slate-700 dark:text-slate-200"
        >
          বিস্তারিত দেখুন
          <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default MyWishList;

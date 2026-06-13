"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaHeart, FaArrowRightLong } from "react-icons/fa6";
import { addToWishlist } from "@/app/actions/secure";

interface PackProps {
  pack: {
    id: string;
    tour_type: string;
    image: string;
    trip_title: string;
    price: number | string;
  };
}

const AllPackages = ({ pack }: PackProps) => {
  const { id, tour_type, image, trip_title, price } = pack;
  const { user } = useAuth();
  const router = useRouter();

  const handleAddtoCart = () => {
    if (user && user.email) {
      const cartItem = {
        email: user.email,
        tour_type,
        image,
        trip_title,
        price
      };

      addToWishlist(cartItem).then(() => {
        Swal.fire({
          icon: 'success',
          title: `${trip_title} Added to wishlist`,
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in first, then try again.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in here..."
      }).then((result: any) => {
        if (result.isConfirmed) {
          router.push('/login');
        }
      });
    }
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-48 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={image}
          alt={trip_title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {tour_type && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 backdrop-blur dark:bg-slate-900/80 dark:text-slate-200">
            {tour_type}
          </span>
        )}
        <button
          onClick={handleAddtoCart}
          aria-label="ইচ্ছেতালিকায় যোগ করুন"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-400 backdrop-blur transition-all hover:scale-110 hover:bg-white hover:text-rose-500 dark:bg-slate-800/90"
        >
          <FaHeart />
        </button>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h3 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
          {trip_title}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {tour_type}
        </p>
        <Link
          href={`/details/${id}`}
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white dark:border-slate-700 dark:text-slate-200"
        >
          View Package
          <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default AllPackages;

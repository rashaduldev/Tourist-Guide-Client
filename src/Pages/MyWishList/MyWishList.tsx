"use client";

import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

interface MyWishListProps {
  item?: any;
}

const MyWishList = ({ item = {} }: MyWishListProps) => {
  const { tour_type, image, trip_title, price, _id, id } = item;
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const axiosSecure = useAxiosSecure();

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
      axiosSecure.post("/wishlists", cartItem).then((res: any) => {
        if (res.data.insertedId) {
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
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "লগইন করুন",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/login?from=${encodeURIComponent(pathname ?? '/')}`);
        }
      });
    }
  };

  return (
    <div className="bg-white rounded shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden group dark:bg-slate-900">
      <div className="relative">
        <img src={image} alt={trip_title} className="w-full h-52 object-cover" />
        <button
          onClick={handleAddToCart}
          className="absolute top-2 right-2 bg-white p-2 rounded-full text-pink-500 text-xl hover:bg-pink-100 transition"
        >
          <FaHeart />
        </button>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
          {tour_type}
        </h3>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {trip_title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">৳ {price}</p>
      </div>

      <div className="flex items-center justify-between px-5 pb-4">
        <Link
          href={`/details/${id}`}
          className="text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-full transition"
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
};

export default MyWishList;

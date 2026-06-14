"use client";

import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useBooking from "../../../../Hooks/useBooking";
import { deleteBooking } from "@/app/actions/secure";

const Booking = () => {
  const [booking, refetch] = useBooking();

  const handleDeleteCart = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch();
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          আমার বুকিং
        </h1>
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          মোট: {booking.length}
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">ছবি</th>
                <th className="px-6 py-4">গাইড</th>
                <th className="px-6 py-4">তারিখ</th>
                <th className="px-6 py-4">মূল্য</th>
                <th className="px-6 py-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {booking.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center text-slate-500">
                    কোনো বুকিং নেই।
                  </td>
                </tr>
              ) : (
                booking.map((item: any, index: number) => (
                  <tr
                    key={item._id}
                    className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-6 py-4 font-medium text-slate-400">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        className="h-12 w-12 rounded-xl object-cover"
                        src={item?.touristImage}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                      {item.tourGuide}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                      {item.tourDate}
                    </td>
                    <td className="px-6 py-4 font-semibold text-blue-600">
                      ৳{item.prices}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDeleteCart(item._id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30"
                        aria-label="মুছে ফেলুন"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;

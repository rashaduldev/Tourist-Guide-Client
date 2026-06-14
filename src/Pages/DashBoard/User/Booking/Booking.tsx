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
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground dark:text-white">
          আমার বুকিং
        </h1>
        <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-primary dark:bg-accent/40 dark:text-primary">
          মোট: {booking.length}
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:border-border dark:bg-card">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:bg-muted/60 dark:text-muted-foreground">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">ছবি</th>
                <th className="px-6 py-4">গাইড</th>
                <th className="px-6 py-4">তারিখ</th>
                <th className="px-6 py-4">মূল্য</th>
                <th className="px-6 py-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border">
              {booking.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center text-muted-foreground">
                    কোনো বুকিং নেই।
                  </td>
                </tr>
              ) : (
                booking.map((item: any, index: number) => (
                  <tr
                    key={item._id}
                    className="transition-colors hover:bg-muted dark:hover:bg-muted/40"
                  >
                    <td className="px-6 py-4 font-medium text-muted-foreground">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        className="h-12 w-12 rounded-xl object-cover"
                        src={item?.touristImage}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground dark:text-white">
                      {item.tourGuide}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">
                      {item.tourDate}
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary">
                      ৳{item.prices}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDeleteCart(item._id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30"
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

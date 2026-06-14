"use client";

import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import Link from "next/link";
import useList from "../../../../Hooks/useList";
import { removeWishlist } from "@/app/actions/secure";

const List = () => {
  const [list, refetch] = useList();
  const totatPrice = list.reduce(
    (total: number, item: any) => total + item.price,
    0,
  );

  const handleDeleteCart = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeWishlist(id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  return (
    <div className="mt-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground dark:text-white">
          আমার উইশলিস্ট
        </h1>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-primary dark:bg-accent/40 dark:text-primary">
            মোট: {list.length} · ৳{totatPrice}
          </span>
          <Link
            href="/dashboard/payment"
            aria-disabled={!list.length}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all ${
              list.length
                ? "bg-brand hover:-translate-y-0.5"
                : "pointer-events-none bg-slate-300 dark:bg-slate-700"
            }`}
          >
            পেমেন্ট
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:border-border dark:bg-card">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:bg-muted/60 dark:text-muted-foreground">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">ছবি</th>
                <th className="px-6 py-4">ধরন</th>
                <th className="px-6 py-4">মূল্য</th>
                <th className="px-6 py-4">ডিটেইলস</th>
                <th className="px-6 py-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border">
              {list.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center text-muted-foreground">
                    উইশলিস্ট খালি।
                  </td>
                </tr>
              ) : (
                list.map((item: any, index: number) => (
                  <tr
                    key={item._id}
                    className="transition-colors hover:bg-muted dark:hover:bg-muted/40"
                  >
                    <td className="px-6 py-4 font-medium text-muted-foreground">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={item.image}
                        alt=""
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 capitalize text-muted-foreground dark:text-muted-foreground">
                      {item.tour_type}
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary">
                      ৳{item.price}
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href={`/details/${item.id ?? item.menuId}`}
                        className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-border dark:text-muted-foreground"
                      >
                        ডিটেইলস
                      </Link>
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

export default List;

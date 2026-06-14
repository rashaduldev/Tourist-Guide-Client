"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUsers, FaTrash } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { getUsers, updateUserRole, deleteUser } from "@/app/actions/secure";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({ queryKey: ["users"], queryFn: () => getUsers() });

  const filteredUsers = useMemo(() => {
    const value = searchTerm.toLowerCase();
    if (!value) return users;
    return users.filter(
      (user: any) =>
        user.name?.toLowerCase().includes(value) ||
        user.email?.toLowerCase().includes(value),
    );
  }, [users, searchTerm]);

  // Promote a user to admin
  const handleMakeAdmin = (user: any) => {
    if (!user?._id) return;
    updateUserRole(user._id, "admin")
      .then(() => {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.name} is an admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() =>
        Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" }),
      );
  };

  // Delete a user
  const handleDeleteUser = (user: any) => {
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
        deleteUser(user._id)
          .then((res: any) => {
            if (res?.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: `${user.name} has been deleted`,
                icon: "success",
              });
            }
          })
          .catch(() =>
            Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" }),
          );
      }
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground dark:text-white">
            ম্যানেজ ইউজার
          </h1>
          <p className="mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
            মোট {filteredUsers.length} জন ব্যবহারকারী
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="ইউজার খুঁজুন..."
            value={searchTerm}
            onChange={handleSearch}
            className="h-11 w-full rounded-xl border border-border bg-card pl-11 pr-4 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20 dark:border-border dark:bg-card dark:text-white"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:border-border dark:bg-card">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:bg-muted/60 dark:text-muted-foreground">
              <tr>
                <th className="px-6 py-4">নাম</th>
                <th className="px-6 py-4">ইমেইল</th>
                <th className="px-6 py-4">রোল</th>
                <th className="px-6 py-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border">
              {filteredUsers.map((user: any) => (
                <tr
                  key={user._id}
                  className="transition-colors hover:bg-muted dark:hover:bg-muted/40"
                >
                  <td className="px-6 py-4 font-medium text-foreground dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.role === "admin" ? (
                      <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary dark:bg-accent/40 dark:text-primary">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary dark:border-border dark:text-muted-foreground"
                      >
                        <FaUsers /> অ্যাডমিন করুন
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30"
                      aria-label="মুছে ফেলুন"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

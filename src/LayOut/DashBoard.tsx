"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import useAdmin from "../Hooks/useAdmin";
import {
  FiGrid,
  FiUsers,
  FiUser,
  FiEdit,
  FiPlusSquare,
  FiHeart,
  FiCalendar,
  FiCreditCard,
  FiStar,
  FiHome,
  FiSearch,
} from "react-icons/fi";

const DashBoard = ({ children }: { children: ReactNode }) => {
  const [isAdmin] = useAdmin();
  const pathname = usePathname();

  const adminLinks = [
    { name: "ড্যাশবোর্ড", path: "/dashboard", icon: <FiGrid /> },
    { name: "ম্যানেজ ইউজার", path: "/dashboard/manageusers", icon: <FiUsers /> },
    { name: "প্রোফাইল", path: "/dashboard/profile", icon: <FiUser /> },
    { name: "এডিট প্রোফাইল", path: "/dashboard/edituser", icon: <FiEdit /> },
    { name: "প্যাকেজ যোগ করুন", path: "/dashboard/addpackage", icon: <FiPlusSquare /> },
  ];
  const userLinks = [
    { name: "আমার প্রোফাইল", path: "/dashboard/profile", icon: <FiUser /> },
    { name: "এডিট প্রোফাইল", path: "/dashboard/edituser", icon: <FiEdit /> },
    { name: "আমার উইশলিস্ট", path: "/dashboard/list", icon: <FiHeart /> },
    { name: "আমার বুকিং", path: "/dashboard/booking", icon: <FiCalendar /> },
    { name: "পেমেন্ট হিস্ট্রি", path: "/dashboard/payment", icon: <FiCreditCard /> },
    { name: "রিভিউ যোগ করুন", path: "/dashboard/review", icon: <FiStar /> },
  ];
  const links = isAdmin ? adminLinks : userLinks;

  const NavItem = ({
    name,
    path,
    icon,
  }: {
    name: string;
    path: string;
    icon: ReactNode;
  }) => {
    const active = pathname === path;
    return (
      <Link
        href={path}
        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
          active
            ? "bg-brand text-white shadow-lg shadow-primary/25"
            : "text-muted-foreground hover:bg-muted hover:text-foreground dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
        }`}
      >
        <span className="text-lg">{icon}</span>
        {name}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted md:flex-row dark:bg-background">
      {/* Sidebar */}
      <aside className="w-full border-r border-border bg-card md:fixed md:h-screen md:w-72 dark:border-border dark:bg-card">
        <div className="flex h-full flex-col p-5">
          <Link href="/" className="mb-8 flex items-center gap-2.5">
            <img
              src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span className="font-extrabold text-foreground dark:text-white">
              ট্রাভেল<span className="text-primary"> কো.</span>
            </span>
          </Link>

          <span className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {isAdmin ? "অ্যাডমিন প্যানেল" : "আমার অ্যাকাউন্ট"}
          </span>

          <nav className="flex flex-1 flex-col gap-1.5">
            {links.map((l) => (
              <NavItem key={l.name} {...l} />
            ))}

            <hr className="my-4 border-border dark:border-border" />

            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:text-muted-foreground dark:hover:bg-muted"
            >
              <FiHome className="text-lg" /> হোম
            </Link>
            <Link
              href="/allpackage"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:text-muted-foreground dark:hover:bg-muted"
            >
              <FiSearch className="text-lg" /> প্যাকেজসমূহ
            </Link>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:ml-72 md:p-8">{children}</main>
    </div>
  );
};

export default DashBoard;

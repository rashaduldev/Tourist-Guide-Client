"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiUser, FiLogOut, FiGrid, FiEdit } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "হোম", path: "/" },
  { name: "সমস্ত প্যাকেজ", path: "/allpackage" },
  { name: "ব্লগসমূহ", path: "/blogs" },
  { name: "আমাদের সম্পর্কে", path: "/about" },
  { name: "যোগাযোগ", path: "/contact" },
];

const Navber = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut, isAdmin } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setShowUserMenu(false);
  }, [pathname]);

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "সফলভাবে লগ আউট হয়েছ!",
        text: "অনুগ্রহ করে আবার লগইন করো।",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    });
  };

  const userLinks = [
    ...(isAdmin
      ? [{ name: "ড্যাশবোর্ড", path: "/dashboard", icon: <FiGrid /> }]
      : []),
    { name: "প্রোফাইল", path: "/dashboard/profile", icon: <FiUser /> },
    { name: "প্রোফাইল সম্পাদনা", path: "/dashboard/edituser", icon: <FiEdit /> },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-card/80 shadow-sm backdrop-blur-lg dark:border-border/70 dark:bg-card/80"
          : "border-b border-transparent bg-card dark:bg-card"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
            alt="Logo"
            className="h-11 w-11 rounded-xl object-cover ring-2 ring-accent dark:ring-border"
          />
          <span className="hidden text-lg font-extrabold tracking-tight text-foreground sm:block dark:text-white">
            ট্রাভেল<span className="text-primary"> কো.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary dark:text-primary"
                    : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-white"
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {user?.email ? (
            <div className="relative hidden lg:block">
              <button
                onClick={() => setShowUserMenu((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-border py-1 pl-1 pr-3 transition-colors hover:border-primary dark:border-border"
              >
                <img
                  src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                  alt="Profile"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="max-w-[8rem] truncate text-sm font-medium text-foreground dark:text-slate-200">
                  {user?.displayName || "ব্যবহারকারী"}
                </span>
              </button>

              <AnimatePresence>
                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowUserMenu(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-card shadow-xl dark:border-border dark:bg-muted"
                    >
                      <div className="border-b border-border px-4 py-3 dark:border-border">
                        <p className="truncate text-sm font-semibold text-foreground dark:text-white">
                          {user?.displayName}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {user?.email}
                        </p>
                      </div>
                      {userLinks.map((l) => (
                        <Link
                          key={l.path}
                          href={l.path}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-primary dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                          <span className="text-muted-foreground">{l.icon}</span>
                          {l.name}
                        </Link>
                      ))}
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 border-t border-border px-4 py-2.5 text-sm text-rose-600 transition-colors hover:bg-rose-50 dark:border-border dark:hover:bg-slate-700"
                      >
                        <FiLogOut />
                        লগআউট
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 lg:block"
            >
              লগইন
            </Link>
          )}

          {/* Mobile toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden dark:text-slate-200 dark:hover:bg-muted"
            aria-label="মেনু খুলুন"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-card/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 flex w-80 max-w-[85%] flex-col bg-card shadow-2xl lg:hidden dark:bg-card"
            >
              <div className="flex items-center justify-between border-b border-border p-4 dark:border-border">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
                    alt="Logo"
                    className="h-10 w-10 rounded-xl object-cover"
                  />
                  <span className="font-extrabold text-foreground dark:text-white">
                    ট্রাভেল কো.
                  </span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted dark:text-muted-foreground dark:hover:bg-muted"
                  aria-label="মেনু বন্ধ করুন"
                >
                  <AiOutlineClose size={22} />
                </button>
              </div>

              {user?.email && (
                <div className="flex items-center gap-3 border-b border-border p-4 dark:border-border">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt="Profile"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground dark:text-white">
                      {user?.displayName}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                </div>
              )}

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.path
                        ? "bg-accent text-primary dark:bg-accent/40 dark:text-primary"
                        : "text-foreground hover:bg-muted dark:text-slate-200 dark:hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {user?.email &&
                  userLinks.map((l) => (
                    <Link
                      key={l.path}
                      href={l.path}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted dark:text-slate-200 dark:hover:bg-muted"
                    >
                      {l.icon}
                      {l.name}
                    </Link>
                  ))}
              </nav>

              <div className="border-t border-border p-4 dark:border-border">
                {user?.email ? (
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 font-semibold text-rose-600 transition-colors hover:bg-rose-100 dark:bg-rose-950/30"
                  >
                    <FiLogOut /> লগআউট
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block rounded-xl bg-brand px-4 py-3 text-center font-semibold text-white shadow-lg"
                  >
                    লগইন
                  </Link>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navber;

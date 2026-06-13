"use client";

import { FaHouseMedical, FaSearchengin } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = ({ children }: { children: ReactNode }) => {
  const [isAdmin] = useAdmin();
  const pathname = usePathname();

  const Adninlinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Manage User", path: "/dashboard/manageusers" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Edit Profile", path: "/dashboard/edituser" },
    { name: "Add Packages", path: "/dashboard/addpackage" },
  ];
  const Userlinks = [
    { name: "MY Profile", path: "/dashboard/profile" },
    { name: "Edit Profile", path: "/dashboard/edituser" },
    { name: "My wishList", path: "/dashboard/list" },
    { name: "My Booking", path: "/dashboard/booking" },
    { name: "Payment History", path: "/dashboard/payment" },
    { name: "Add Review", path: "/dashboard/review" },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-72 min-h-screen bg-blue-900 text-white lg:fixed md:static z-10">
        <ul className="menu p-4 md:p-0">
          {isAdmin ? (
            <>
              <h2 className="text-center font-bold my-4">Admin</h2>
              {Adninlinks.map((link, index) => (
                <li className="mb-2 p-3 rounded-lg mx-5" key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname &&
                      "mb-2 bg-white text-blue-900 p-3 rounded-lg mx-5"
                    } capitalize font-medium hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              <h2 className="text-center font-bold my-4">User Part</h2>
              {Userlinks.map((link, index) => (
                <li className="mb-2 p-3 rounded-lg mx-5" key={index}>
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname &&
                      "mb-2 bg-white text-blue-900 p-3 rounded-lg mx-5"
                    } capitalize font-medium hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </>
          )}
          <hr className="border-gray-800 dark:border-white mx-10 my-5" />
          {/* Shared navlinks */}
          <li className="mb-2 hover:bg-white hover:text-blue-900 hover:p-3 p-3 rounded-lg mx-5">
            <Link href="/">
              <div className="flex items-center gap-3">
                <FaHouseMedical />
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li className="mb-2 hover:bg-white hover:text-blue-900 hover:p-3 p-3 rounded-lg mx-5">
            <Link href="/allpackage">
              <div className="flex items-center gap-3">
                <FaSearchengin />
                <p>Packages</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow ml-0 md:ml-72 mt-16 md:mt-0 p-4">{children}</div>
    </div>
  );
};

export default DashBoard;

import {
  FaArtstation,
  FaCalendar,
  FaCartShopping,
  FaHouseMedical,
  FaMoneyBill,
  FaSearchengin,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useAdmin from "../Hooks/useAdmin";
import useList from "../Hooks/useList";

const DashBoard = () => {
  const [list] = useList();
  const [isAdmin] = useAdmin();
  const [isGuide] = useState(false);

  const Adninlinks=[
    {
        name:"Dashboard",
        path:"/dashboard",
    },
    {
        name:"Manage User",
        path:"/dashboard/manageusers",
    },
    {
        name:"Profile",
        path:"/dashboard/profile",
    },
    {
        name:"Edit Profile",
        path:"/dashboard/edituser",
    },
    {
        name:"Add Packages",
        path:"/dashboard/addpackage",
    },
]
const Userlinks=[
  {
      name:"MY Profile",
      path:"/dashboard/profile",
  },
  {
      name:"Edit Profile",
      path:"/dashboard/edituser",
  },
  {
    name:"My wishList",
    path:"/dashboard/list",
  },
  {
    name:"My Booking",
    path:"/dashboard/booking",
  },
  {
    name:"Payment History",
    path:"/dashboard/payment",
  },
  {
    name:"Add Review",
    path:"/dashboard/review",
},
]

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-72 min-h-screen bg-blue-900 text-white lg:fixed md:static z-10">
        <ul className="menu p-4 md:p-0">
          {isAdmin ? (
            <>
              <h2 className="text-center font-bold my-4">Admin</h2>

              {
                 Adninlinks.map((link,index)=>{
                     return(
                        <li className="mb-2 p-3 rounded-lg mx-5" key={index}>
                           <NavLink to={link.path} href={link.path}  className={`${link.path === location.pathname && "mb-2 bg-white text-blue-900 p-3 rounded-lg mx-5"} capitalize font-medium hover:text-accent transition-all`}>
                         {link.name}
                         </NavLink>
                        </li>
                        
                     )
                 })
            }

              {/* <li className="mb-2 hover:bg-white hover:text-blue-900 hover:p-3 p-3 rounded-lg mx-5">
                <NavLink to={"/dashboard"}>
                  <div className="flex items-center gap-3">
                    <FaCalendar />
                    <p>Dashboard</p>
                  </div>
                </NavLink>
              </li> */}
            </>
          ) : (
            <>
              <h2 className="text-center font-bold my-4">User Part</h2>
              {
                 Userlinks.map((link,index)=>{
                     return(
                        <li className="mb-2 p-3 rounded-lg mx-5" key={index}>
                           <NavLink to={link.path} href={link.path}  className={`${link.path === location.pathname && "mb-2 bg-white text-blue-900 p-3 rounded-lg mx-5"} capitalize font-medium hover:text-accent transition-all`}>
                         {link.name}
                         </NavLink>
                        </li>
                        
                     )
                 })
            }
              {/* <li className="mb-2">
                <NavLink to={"/dashboard/profile"}>
                  <div className="flex items-center gap-3">
                    <FaHouseMedical />
                    <p>MY Profile</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/list"}>
                  <div className="flex items-center gap-3">
                    <FaCartShopping />
                    <p>My wishList ({list.length})</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/booking"}>
                  <div className="flex items-center gap-3">
                    <FaCalendar />
                    <p>My Booking</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/payment"}>
                  <div className="flex items-center gap-3">
                    <FaMoneyBill />
                    <p>Payment History</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/review"}>
                  <div className="flex items-center gap-3">
                    <FaArtstation />
                    <p> Add Review</p>
                  </div>
                </NavLink>
              </li> */}
            </>
          )}
          {isGuide && (
            <>
              <h2 className="text-center font-bold my-4">Guide Part</h2>
              <li className="mb-2">
                <NavLink to={"/dashboard"}>
                  <div className="flex items-center gap-3">
                    <FaHouseMedical />
                    <p>MY Profile</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/list"}>
                  <div className="flex items-center gap-3">
                    <FaCartShopping />
                    <p>My wishList ({list?.length})</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/booking"}>
                  <div className="flex items-center gap-3">
                    <FaCalendar />
                    <p>My Booking</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/payment"}>
                  <div className="flex items-center gap-3">
                    <FaMoneyBill />
                    <p>Payment History</p>
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/dashboard/review"}>
                  <div className="flex items-center gap-3">
                    <FaArtstation />
                    <p> Add Review</p>
                  </div>
                </NavLink>
              </li>
            </>
          )}
          <hr className="border-gray-800 dark:border-white mx-10 my-5" />
          {/* Shared navlinks */}
          <li className="mb-2 hover:bg-white hover:text-blue-900 hover:p-3 p-3 rounded-lg mx-5">
            <NavLink to={"/"}>
              <div className="flex items-center gap-3">
                <FaHouseMedical />
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 hover:bg-white hover:text-blue-900 hover:p-3 p-3 rounded-lg mx-5">
            <NavLink to={"/allpackage"}>
              <div className="flex items-center gap-3">
                <FaSearchengin />
                <p>Packages</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-grow ml-0 md:ml-72 mt-16 md:mt-0 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

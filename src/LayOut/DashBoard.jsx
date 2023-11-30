import {
    FaArtstation,
    FaBook,
    FaCalendar,
    FaCartShopping,
    FaHouseMedical,
    FaList,
    FaMarsAndVenus,
    FaMoneyBill,
    FaSearchengin,
    FaUsers,
    FaUtensils,
  } from "react-icons/fa6";
  import { NavLink, Outlet } from "react-router-dom";
import useList from "../Hooks/useList";
// import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";
  
  const DashBoard = () => {
    const [list] = useList();
    const [isAdmin] = useState(false);
    const [isGuide] = useState(false);
    const [isUser] = useState(true);
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
          <ul className="menu">
            {isAdmin && (
              <>
               <h2 className="text-center font-bold">Admin Part</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical></FaHouseMedical>
                    <p>MY Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping></FaCartShopping>
                    <p>My wishList ({list.length})</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar></FaCalendar>
                    <p>My Booking</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill></FaMoneyBill>
                    <p>Payment History</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation></FaArtstation>
                    <p> Add Review</p>
                    </div>
                  </NavLink>
                </li>
              </>
            )}
            {isGuide && (
              <>
               <h2 className="text-center font-bold">Guide Part</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical></FaHouseMedical>
                    <p>MY Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping></FaCartShopping>
                    <p>My wishList ({list.length})</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar></FaCalendar>
                    <p>My Booking</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill></FaMoneyBill>
                    <p>Payment History</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation></FaArtstation>
                    <p> Add Review</p>
                    </div>
                  </NavLink>
                </li>
              </>
            )}
            {isUser && (
              <>
               <h2 className="text-center font-bold">User Part</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical></FaHouseMedical>
                    <p>MY Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping></FaCartShopping>
                    <p>My wishList ({list.length})</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar></FaCalendar>
                    <p>My Booking</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill></FaMoneyBill>
                    <p>Payment History</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation></FaArtstation>
                    <p> Add Review</p>
                    </div>
                  </NavLink>
                </li>
              </>
            )}
  
  <hr className="border-gray-800 dark:border-white mx-10 my-5"/>
            {/* Shared navlinks */}
            <li className="mb-2">
              <NavLink to={"/"}>
                <div className="flex items-center gap-3">
                <FaHouseMedical></FaHouseMedical>
                    <p>Home</p>
                </div>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to={"/allpackage"}>
                <div className="flex items-center gap-3">
                <FaSearchengin></FaSearchengin>
                    <p>Packages</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default DashBoard;
  
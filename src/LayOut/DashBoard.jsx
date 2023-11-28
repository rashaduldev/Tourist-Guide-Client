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
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
          <ul className="menu">
            {isAdmin ? (
              <>
              <h2 className="text-center font-bold">Admin Part</h2>
                <li className="mb-2 flex">
                  <NavLink to={"/dashboard/adminHome"}>
                    <FaHouseMedical></FaHouseMedical>
                    Admin Home
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/additems"}>
                    <FaUtensils></FaUtensils>
                   Add Items
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/reservation"}>
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <FaBook></FaBook>
                    Manage Booking
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/users"}>
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
               <h2 className="text-center font-bold">User Part</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard/userHome"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical></FaHouseMedical>
                    <p>User Home</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/cart"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping></FaCartShopping>
                    <p>My wishList {list.length}</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/reservation"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar></FaCalendar>
                    <p>  Reservation</p>
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
                <li className="mb-2">
                  <NavLink to={"/dashboard/paymentHistory"}>
                   <div className="flex items-center gap-3">
                   <FaMarsAndVenus></FaMarsAndVenus>
                    <p>Payment History</p>
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
              <NavLink to={"/order/salad"}>
                <div className="flex items-center gap-3">
                <FaSearchengin></FaSearchengin>
                    <p>Menu</p>
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
  
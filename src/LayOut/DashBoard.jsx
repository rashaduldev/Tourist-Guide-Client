import {
    FaArtstation,
    FaCalendar,
    FaCartShopping,
    FaHouseMedical,
    FaMoneyBill,
    FaSearchengin,
  } from "react-icons/fa6";
  import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import useList from "../Hooks/useList";

  const DashBoard = () => {
    const {user}=useAuth();
    console.log(user);
    const [list] = useList();
    const [isAdmin] = useAdmin();
    // const [isAdmin] = useState(false);
    const [isGuide] = useState(false);
    // const [isUser] = useState(true);
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
          <ul className="menu">
            {isAdmin ? (
              <>
               <h2 className="text-center font-bold">Admin</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar/>
                    <p>Dashboard</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/manageusers"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar/>
                    <p>Manage User</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/profile"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical/>
                    <p>Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/edituser"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar/>
                    <p>Edit Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/addpackage"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping/>
                    <p>Add Packages</p>
                    </div>
                  </NavLink>
                </li>
               
              </>
            ):
            (
              <>
               <h2 className="text-center font-bold">User Part</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard/profile"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical/>
                    <p>MY Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping/>
                    <p>My wishList ({list.length})</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar/>
                    <p>My Booking</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill/>
                    <p>Payment History</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation/>
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
                    <FaHouseMedical/>
                    <p>MY Profile</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping/>
                    <p>My wishList ({list?.length})</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar/>
                    <p>My Booking</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill/>
                    <p>Payment History</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation/>
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
                <FaHouseMedical/>
                    <p>Home</p>
                </div>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to={"/allpackage"}>
                <div className="flex items-center gap-3">
                <FaSearchengin/>
                    <p>Packages</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <Outlet/>
        </div>
      </div>
    );
  };
  
  export default DashBoard;
  
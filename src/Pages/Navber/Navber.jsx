import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navber = () => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin] = useAdmin();

    const toggleOptions = () => {
        setOptionsVisible(!isOptionsVisible);
    };

    const handleLogout = () => {
        logOut()
            .then(() => {
                let timerInterval;
                Swal.fire({
                    title: "LogOut Successfully, Please Login Again!",
                    html: "I will close in <b></b> milliseconds.",
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = `${Swal.getTimerLeft()}`;
                        }, 100);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    },
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log("I was closed by the timer");
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const links = [
        {
            name: "home",
            path: "/",
        },
        {
            name: "Blogs",
            path: "/blogs",
        },
        {
            name: "About Us",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "All Packages",
            path: "/allpackage",
        },
    ];

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 border-b text-sm py-3 sm:py-0 bg-white text-black border-neutral-700 my-5 lg:mx-36">
            <nav
                className="relative lg:max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img
                            className="h-20 w-20"
                            src="https://i.ibb.co/YWWPShY/travel-tourism.jpg"
                            alt=""
                        />
                    </a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            onClick={() => setModalOpen(!isModalOpen)}
                            className="p-4 text-black"
                        >
                            {isModalOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`hs-collapse transition-all duration-300 basis-full grow sm:block ${
                        isModalOpen ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col text-black sm:flex-row sm:items-center sm:justify-end sm:ps-7">
                        <nav className="flex flex-col text-black gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                            {links.map((link, index) => {
                                return (
                                    <Link
                                        to={link.path}
                                        href={link.path}
                                        key={index}
                                        className={`$ {
                                          link.path === location.pathname &&
                                          "text-blue-300 border-b-2 border-accent"
                                        } capitalize font-medium hover:text-accent transition-all text-black`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                        {/*<div className="mx-3">*/}
                        {/*    {user ? (*/}
                        {/*        <button*/}
                        {/*            type="button"*/}
                        {/*            className="flex items-center w-full text-gray-400 hover:text-gray-300 font-medium"*/}
                        {/*        >aaa</button>*/}
                        {/*    ) : (*/}
                        {/*        ""*/}
                        {/*    )}*/}
                        {/*</div>*/}
                        {user?.email ? (
                            <div className="items-center z-10">
                                <div className="hs-dropdown relative inline-flex">
                                    <div className="relative">
                                        <div
                                            className="cursor-pointer flex items-center gap-2 relative"
                                            onClick={toggleOptions}
                                        >
                                            <img
                                                src={user?.photoURL}
                                                alt="Profile Image"
                                                className="rounded-full h-10 w-10"
                                            />
                                            <div>
                                                <p className="font-bold text-white">
                                                    {user?.displayName} {user?.name}
                                                </p>
                                                <p className="text-gray-400">New User</p>
                                            </div>
                                        </div>

                                        {isOptionsVisible && (
                                            <div className="fixed lg:top-20 md:right-10 lg:right-64 z-50 w-56 bg-neutral-700 shadow-md rounded-md mt-2">
                                                {isAdmin ? (
                                                    <Link to={"/dashboard"}>
                                                        <button className="w-full px-4 py-2 text-left hover:bg-neutral-600 text-white">
                                                            DashBoard
                                                        </button>
                                                    </Link>
                                                ) : (
                                                    ""
                                                )}
                                                <Link to={"/dashboard/profile"}>
                                                    <button
                                                        onClick={toggleOptions}
                                                        className="w-full px-4 py-2 text-left hover:bg-neutral-600 text-white"
                                                    >
                                                        Profile
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={toggleOptions}
                                                    className="w-full px-4 py-2 text-left hover:bg-neutral-600 text-white"
                                                >
                                                    Upgrade To Pro
                                                </button>
                                                <button
                                                    className="w-full px-4 py-2 text-left hover:bg-neutral-600 text-white"
                                                    onClick={toggleOptions}
                                                >
                                                    Account settings
                                                </button>
                                                <Link to={"/login"}>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full px-4 py-2 text-left hover:bg-neutral-600 text-white"
                                                    >
                                                        Logout
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className={`$ {
                  location.pathname === "/login" || location.pathname === "/signup"
                    ? "text-blue-300 border-b-2 border-accent"
                    : ""
                } capitalize font-medium hover:text-accent transition-all text-white`}
                            >
                                <Link to={"/login"}>Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navber;

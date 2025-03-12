import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navber = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [showUserOptions, setShowUserOptions] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const location = useLocation();

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
    const toggleUserOptions = () => setShowUserOptions(!showUserOptions);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged Out Successfully!",
                    text: "Please log in again.",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            })
            .catch((err) => console.log(err));
    };

    const links = [
        { name: "Blogs", path: "/blogs" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "All Packages", path: "/allpackage" },
    ];

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 border-b text-sm py-3 sm:py-0 bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-700 dark:border-gray-600 my-5 lg:mx-36">
            <nav className="relative lg:max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                {/* Logo + Mobile Menu Button */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <a href="/">
                        <img className="h-20 w-20" src="https://i.ibb.co/YWWPShY/travel-tourism.jpg" alt="Logo" />
                    </a>
                    <button type="button" onClick={toggleDrawer} className="p-4 text-black dark:text-white sm:hidden">
                        <AiOutlineMenu size={24} />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex items-center space-x-7">
                    {links.map((link, index) => (
                        <Link to={link.path} key={index} className={`capitalize font-medium hover:text-accent transition-all dark:hover:text-gray-400 ${location.pathname === link.path ? "text-blue-300 dark:text-blue-400 border-b-2 border-accent" : ""}`}>
                            {link.name}
                        </Link>
                    ))}

                    {/* User Section */}
                    {user?.email ? (
                        <div className="relative">
                            <div className="cursor-pointer flex items-center gap-2" onClick={toggleUserOptions}>
                                <img src={user?.photoURL} alt="Profile" className="rounded-full h-10 w-10" />
                                <div>
                                    <p className="font-bold">{user?.displayName || user?.name}</p>
                                    <p className="text-gray-400 dark:text-gray-500">New User</p>
                                </div>
                            </div>

                            {/* Dropdown Menu */}
                            {showUserOptions && (
                                <div className="absolute right-0 mt-2 w-56 bg-neutral-700 dark:bg-gray-800 shadow-md rounded-md">
                                    {isAdmin && (
                                        <Link to="/dashboard">
                                            <button className="w-full px-4 py-2 text-left hover:bg-neutral-600 dark:hover:bg-gray-700 text-white">
                                                Dashboard
                                            </button>
                                        </Link>
                                    )}
                                    <Link to="/dashboard/profile">
                                        <button className="w-full px-4 py-2 text-left hover:bg-neutral-600 dark:hover:bg-gray-700 text-white">
                                            Profile
                                        </button>
                                    </Link>
                                    <Link to="/dashboard/edit-profile">
                                        <button className="w-full px-4 py-2 text-left hover:bg-neutral-600 dark:hover:bg-gray-700 text-white">
                                            Edit Profile
                                        </button>
                                    </Link>
                                    <button onClick={handleLogout} className="w-full px-4 py-2 text-left hover:bg-neutral-600 dark:hover:bg-gray-700 text-white">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className={`capitalize font-medium hover:text-accent transition-all dark:hover:text-gray-400 ${location.pathname === "/login" || location.pathname === "/signup" ? "text-blue-300 dark:text-blue-400 border-b-2 border-accent" : ""}`}>
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Drawer */}
                <div className={`fixed top-0 left-0 w-3/4 h-full bg-white dark:bg-gray-900 shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 sm:hidden z-50`}>
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
                        <a href="/">
                            <img className="h-16 w-16" src="https://i.ibb.co/YWWPShY/travel-tourism.jpg" alt="Logo" />
                        </a>
                        <button onClick={toggleDrawer} className="p-2 text-black dark:text-white">
                            <AiOutlineClose size={24} />
                        </button>
                    </div>

                    {/* User Profile Section (Moved to Top) */}
                    {user?.email && (
                        <div className="flex flex-col items-center py-6 border-b border-gray-300 dark:border-gray-700">
                            <div className="cursor-pointer flex flex-col items-center" onClick={toggleUserOptions}>
                                <img src={user?.photoURL} alt="Profile" className="rounded-full h-16 w-16" />
                                <p className="font-bold mt-2">{user?.displayName || user?.name}</p>
                                <p className="text-gray-400 dark:text-gray-500">New User</p>
                            </div>

                            {/* User Options */}
                            {showUserOptions && (
                                <div className="mt-4 flex flex-col w-full text-center">
                                    {isAdmin && (
                                        <Link to="/dashboard">
                                            <button className="w-full px-4 py-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700">
                                                Dashboard
                                            </button>
                                        </Link>
                                    )}
                                    <Link to="/dashboard/profile">
                                        <button className="w-full px-4 py-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700">
                                            Profile
                                        </button>
                                    </Link>
                                    <Link to="/dashboard/edit-profile">
                                        <button className="w-full px-4 py-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700">
                                            Edit Profile
                                        </button>
                                    </Link>
                                    <button onClick={handleLogout} className="w-full px-4 py-2 text-left hover:bg-gray-300 dark:hover:bg-gray-700">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Drawer Links */}
                    <div className="flex flex-col space-y-4 mt-4 px-6">
                        {links.map((link, index) => (
                            <Link to={link.path} key={index} onClick={toggleDrawer} className="text-lg font-medium hover:text-accent dark:hover:text-gray-400">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navber;

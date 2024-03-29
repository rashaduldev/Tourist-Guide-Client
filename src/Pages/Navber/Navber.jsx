import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import './Navber.css'

const Navber = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfully");
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
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navLinks = (
    <>
          <NavLink
        exact
        to={"/"}
        className={`font-medium text-blue-600 md:py-6 dark:text-blue-500 ${location.pathname === '/' ? 'active' : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to={"/login"}
        className={`font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 ${location.pathname === '/login' ? 'active' : ''}`}
      >
        Login
      </NavLink>
      <a
        className="font-medium text-blue-600 md:py-6 dark:text-blue-500"
        href="#"
        aria-current="page"
        
      >
        <Link to={"/blogs"}>Blogs</Link>
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        {" "}
        <Link to={"login"}></Link>{" "}
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <Link to={"/blogs"}>Blogs</Link>
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <Link to={"/about"}>About Us</Link>
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <Link to={"/contact"}>Contact Us</Link>
      </a>
      <a
        className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
        href="#"
      >
        <Link to={"/allpackage"}>All Packages</Link>
      </a>
      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
        <button
          type="button"
          className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
        >
          <Link to={'/dashboard'}>DashBoard</Link>
        </button>
      </div>
    </>
  );
  return (
    <div className="mx-10">
      {/* <!-- ========== HEADER ========== --> */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-[85rem] w-full bg-blue-300 border text-white border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Tourisom & Travel
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block text-white"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              {navLinks}

              {user?.email ? (
                  <div className="items-center z-10">
                    <div className="hs-dropdown relative inline-flex">
                      <button
                        id="hs-dropdown-custom-trigger"
                        type="button"
                        className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <img
                          className="w-8 h-auto rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                        <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
                          {user?.displayName}
                        </span>
                        <svg
                          className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <a
                          onClick={handleLogout}
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <Link to={"/login"}>Logout</Link>
                        </a>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                        aria-labelledby="hs-dropdown-custom-trigger"
                      >
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Profile: {user?.displayName}
                        </a>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          Email: {user?.email}
                        </a>
                        <a
                          onClick={handleLogout}
                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                          href="#"
                        >
                          <Link to={"/login"}>Logout</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-md">
                    {" "}
                    <Link to={"/login"}>Login</Link>
                  </div>
                )}
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </div>
  );
};

export default Navber;


// import { NavLink } from "react-router-dom";

// const Navber = () => {
//   return (
//     <div className="mx-10 z-10 bg-red-600">
//       <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
//         <nav
//           id="navbar-collapse-with-animation"
//           className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block text-white"
//         >
//           <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
//             <NavLink
//               exact
//               to="/"
//               className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
//               activeStyle={{
//                 backgroundColor: 'red',
//                 color: 'white',
//               }}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/blogs"
//               className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
//               activeStyle={{
//                 backgroundColor: 'red',
//                 color: 'white',
//               }}
//             >
//               Blogs
//             </NavLink>
//             {/* Add other NavLink elements for different routes */}
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navber;

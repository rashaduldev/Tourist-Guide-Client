import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navber = () => {
  const [isOptionsVisible, setOptionsVisible] = useState();
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
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
  
    const links=[
    {
        name:"home",
        path:"/",
    },
    {
        name:"Blogs",
        path:"/blogs",
    },
    {
        name:"About Us",
        path:"/about",
    },
    {
        name:"Contact",
        path:"/contact",
    },
    {
        name:"All Packages",
        path:"/allpackage",
    },
]
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50  border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700 my-5 lg:mx-36">
    <nav className="relative lg:max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
      <div className="flex items-center justify-between">
        {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
        <img className="h-20 w-20" src="https://i.ibb.co/YWWPShY/travel-tourism.jpg" alt="" />
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center sm:text-3xl p-4 lg:text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg className="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
        <nav className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
             {
                 links.map((link,index)=>{
                     return(
                         <Link to={link.path} href={link.path} key={index} className={`${link.path === location.pathname && "text-blue-300 border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                         {link.name}
                         </Link>
                        
                     )
                 })
            }
       </nav>
            <div className="mx-3">
            {
         user?
         <button
         type="button"
         className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
       >
         
       </button>:''
        }
            </div>
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
                            <p className="font-bold">{user?.displayName}</p>
                            <p>New User</p>
                          </div>
                        </div>

                        {isOptionsVisible && (
                          <div  className="fixed lg:top-20 lg:right-80 z-50 w-56 bg-white shadow-md rounded-md mt-2">
                            <Link to={"/dashboard"}>
                            <button
                            onClick={toggleOptions}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              Profile
                            </button>
                            </Link>
                            <Link to={"/dashboard"}>
                            <button
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                              
                            >
                              DashBoard
                            </button>
                            </Link>
                            <button
                            onClick={toggleOptions}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              Updrate To Pro
                            </button>
                            <button
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                              onClick={toggleOptions}
                            >
                              Account settings
                            </button>
                            <Link to={"/login"}>
                            <button
                              onClick={handleLogout}
                              className="w-full px-4 py-2 text-left hover:bg-gray-100"
                              
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
                className={`${
                  (location.pathname === "/login" || location.pathname === "/signup") 
                    ? "text-blue-300 border-b-2 border-accent" 
                    : ""
                } capitalize font-medium hover:text-accent transition-all`}
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

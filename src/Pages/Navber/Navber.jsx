import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navber = () => {
  const [isOptionsVisible, setOptionsVisible] = useState();
  const [ismessageOptionsVisible, setIsmessageOptionsVisible] = useState();
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  const toggleOptionsMessage = () => {
    setIsmessageOptionsVisible(!ismessageOptionsVisible);
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
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50  border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700 my-5 mx-36">
    <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
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
         <Link to={"/dashboard"}>DashBoard</Link>
       </button>:''
        }
            </div>
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
                     {/* <a
                       onClick={handleLogout}
                       className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                       href="#"
                     >
                       <Link to={"/login"}>Logout</Link>
                     </a> */}
                      <div className="relative">
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={toggleOptions}
      >
        <img
          src="https://i.ibb.co/HP28p9X/Cover-photo.png"
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
        <div>
          <p className="font-bold">Johan Smith</p>
          <p>Investor</p>
        </div>
      </div>

      {ismessageOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-80 bg-white shadow-md rounded-md mt-2">
          <div className="flex items-center justify-between p-3">
            <p>Message</p>
            <p className="text-2xl">...</p>
          </div>
          {links.map((message) => (
      <div
        key={message.id}
        className="flex items-center gap-2 m-3 p-2 hover:bg-gray-100 rounded-lg"
      >
        <img
          src={message?.img}
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
        <div>
          <div className="flex items-center w-56 justify-between">
            <p className="font-bold">{message?.name}</p>
            <p className="text-end">{message?.time}</p>
          </div>
          <p>{message.short_description}</p>
        </div>
      </div>
    ))}
     <Link href={'/users/message'}>
    <div className="flex text-center ">
    <button onClick={toggleOptionsMessage} className="bg-[#2A85FF] py-3 px-12 rounded-lg text-white mx-auto mb-4">View in message center</button>
    </div>
    </Link>
        </div>
      )}
      {isOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-56 bg-white shadow-md rounded-md mt-2">
          <Link href={'userprofile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Profile
          </button>
          </Link>
          <Link href={'editprofile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
           Edit Profile
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
          <Link href={'sign-in'}>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={toggleOptions}
          >
            Logout
          </button>
          </Link>
        </div>
      )}
                       </div>
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
                      <Link to={"/login"}>
                      <button
                         onClick={handleLogout}
                         className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                         
                       >
                         Logout
                       </button>
                      </Link>
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

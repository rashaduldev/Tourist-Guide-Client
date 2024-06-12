import { useContext } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";



const Profile = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1 className="text-4xl ml-10 mt-10">Welcome to Mr, <p className="font-bold">{user?.displayName}</p></h1>
            <div>
            {/* <!-- Card Blog --> */}
<div className="lg:max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="lg:w-1/2 mx-auto">
    {/* <!-- Card --> */}
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img className="lg:h-80" src={user.photoURL} alt="" />
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {user.displayName}
        </h3>
        <p className="mt-3 text-gray-500">
          A software that develops products for software developers and developments.
        </p>
        <p className="my-3">Profetional carears: <span className="text-red-600 font-bold">30+ Tour</span></p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
         <FaYoutube></FaYoutube> Youtube
        </a>
      </div>
    </div>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
            </div>
        </div>
    );
};

export default Profile;
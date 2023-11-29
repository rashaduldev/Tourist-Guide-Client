/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";


const Details = ({item}) => {
    const {id,_id,trip_title,image,price} = item;

    return (
        <div>
             <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
              {/* <!-- Grid --> */}
              <div className="">
                {/* <!-- Card --> */}
                <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img className="h-52" src={image} alt="" />
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                      {trip_title}
                    </h3>
                    <p className="mt-3 text-gray-500">
                      A software that develops products for software developers and developments.
                    </p>
                  </div>
                  <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      ${price}
                    </a>
                   <Link to={`/details/${id}`}>
                   <a  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                     View Package
                    </a>
                   </Link>
                  </div>
                </div>
                {/* <!-- End Card --> */}
              </div>
              {/* <!-- End Grid --> */}
            </div>
        </div>
    );
};

export default Details;
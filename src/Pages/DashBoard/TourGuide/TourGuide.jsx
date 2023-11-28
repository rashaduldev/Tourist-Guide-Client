import { useEffect, useState } from "react";
import useAxiosPublick from "../../../Hooks/useAxiosPublick";
import { Link } from "react-router-dom";


const TourGuide = () => {
    const [packages,setPackages]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:8000/guides')
        .then(res=>res.json())
        .then(data=>{
            setPackages(data);
            setLoading(false);
        })
    },[])
    return (
        <div>
            <h2>Tour Guide</h2>
           <div className="grid grid-cols-3">
           {
                packages.map(pack=>
                    <div key={pack._id} className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                      {/* <!-- Grid --> */}
                      <div className="">
                        {/* <!-- Card --> */}
                        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                          <img className="h-40" src={pack.image} alt="" />
                          <div className="p-4 md:p-6">
                            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                              Atlassian API
                            </span>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                              Atlassian
                            </h3>
                            <p className="mt-3 text-gray-500">
                              A software that develops products for software developers and developments.
                            </p>
                          </div>
                          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-center mx-auto my-3">
                            <Link to={`guidedetails/${pack.id}`}> Details</Link>
                        </button>
                          </div>
                        </div>
                        {/* <!-- End Card --> */}
                    
                     
                    
                     
                      </div>
                      {/* <!-- End Grid --> */}
                    </div>
                    // <!-- End Card Blog -->
                    )
            }
           </div>
        </div>
    );
};

export default TourGuide;
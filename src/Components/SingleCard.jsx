/* eslint-disable react/prop-types */

import img1 from "../assets/contact.jpg";
import img2 from "../assets/about.jpg";
import img3 from "../assets/bgimg.jpg";
import img4 from "../assets/tourbgimg.jpg";
import { useEffect, useState } from "react";
import SinglePageTourGuide from "./SinglePageTourGuide";
import BookingForm from "../Form/TourBookingFrom";

const SingleCard = ({ data }) => {
  const { image, price, tour_type, trip_title } = data;

  const [packages, setPackages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://tourist-guide-server-tawny.vercel.app/guides")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold my-7 text-center">
        Photo Gellary Here
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <img className="h-72 w-full" src={img1} alt="" />
        <img className="h-72 w-full col-span-2" src={img2} alt="" />
        <img className="h-72 w-full" src={img3} alt="" />
      </div>

      <img className="h-72 w-full mt-4" src={img4} alt="" />

      <div className="flex items-center">
      <div className="w-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-5xl font-bold my-7 text-center text-white">
          Trip Details Here
        </h1>
        {/* <!-- Grid --> */}
        <div className="">
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img className="h-52" src={image} alt="" />
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {trip_title}
              </h3>
              <p className="mt-3 text-gray-500">{tour_type}</p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                ${price}
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      <div className="hs-accordion-group mx-10 text-center mb-8">
        <div className="hs-accordion active" id="hs-basic-heading-one">
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            aria-controls="hs-basic-collapse-one"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
            </svg>
            <h1 className="text-3xl">Day 1 Tour details</h1>
          </button>
          <div
            id="hs-basic-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-heading-one"
          >
            <div className="pb-4 px-6">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element.
              </p>
            </div>
          </div>
        </div>

        <div className="hs-accordion" id="hs-basic-heading-two">
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            aria-controls="hs-basic-collapse-two"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
            </svg>
            <h1 className="text-3xl">Day 2 Tour details</h1>
          </button>
          <div
            id="hs-basic-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-heading-two"
          >
            <div className="pb-4 px-6">
              <p className="text-sm text-gray-600 dark:text-gray-200">
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element.
              </p>
            </div>
          </div>
        </div>

        <div className="hs-accordion" id="hs-basic-heading-three">
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            aria-controls="hs-basic-collapse-three"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
              <path d="M5 12h14" />
            </svg>
            <h1 className="text-3xl">Day 3 Tour details</h1>
          </button>
          <div
            id="hs-basic-collapse-three"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-heading-three"
          >
            <div className="pb-4 px-6">
              <p className="text-2xl text-gray-600 dark:text-gray-200">
                It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* tour guides */}
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-4xl md:leading-tight dark:text-white">
            Meet Our Guide
          </h2>
          <p className="mt-1 text-white dark:text-gray-400">Creative people</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 shadow-2xl my-5">
          {packages.map((pack) => (
            <SinglePageTourGuide
              pack={pack}
              key={pack._id}
            ></SinglePageTourGuide>
          ))}
        </div>
        <BookingForm price={price} packages={packages}></BookingForm>
      </div>
    </div>
  );
};

export default SingleCard;

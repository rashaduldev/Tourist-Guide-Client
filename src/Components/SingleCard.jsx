import { useEffect, useState } from "react";
import SinglePageTourGuide from "./SinglePageTourGuide";
import BookingForm from "../Form/TourBookingFrom";
import useAxiosPublick from "../Hooks/useAxiosPublick";

// Import images
import img1 from "../assets/contact.jpg";
import img2 from "../assets/about.jpg";
import img3 from "../assets/bgimg.jpg";
import img4 from "../assets/tourbgimg.jpg";

const SingleCard = ({ data }) => {
  const { image, price, tour_type, trip_title } = data;

  // Custom hook for axios instance
  const axiosPublick = useAxiosPublick();

  // State for packages and loading indicator
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamic tour details
  const tourDetails = [
    { day: "Day 1", description: "Details about the first day of the tour." },
    { day: "Day 2 ", description: "Details about the second day of the tour." },
    { day: "Day 3", description: "Details about the third day of the tour." },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Effect to fetch guides data using axios
  useEffect(() => {
    axiosPublick
        .get("/guides")
        .then((res) => {
          setPackages(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching packages:", err);
          setLoading(false);
        });
  }, [axiosPublick]);

  return (
      <div className="max-w-[85rem] mx-auto">
        <h1 className="text-5xl font-bold my-7 text-center">Photo Gallery</h1>
        <div className="grid grid-cols-4 gap-4">
          <img className="h-72 w-full" src={img1} alt="" />
          <img className="h-72 w-full col-span-2" src={img2} alt="" />
          <img className="h-72 w-full" src={img3} alt="" />
        </div>
        <img className="h-72 w-full mt-4" src={img4} alt="" />

        <div className="flex flex-col md:flex-row items-center">
          {/* Trip details */}
          <div className="md:w-1/2 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold my-7 text-center text-black">
              Trip Details Here
            </h1>
            <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
              <img className="h-52" src={image} alt="" />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-gray-800">{trip_title}</h3>
                <p className="mt-3 text-gray-500">{tour_type}</p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                  ${price}
                </a>
              </div>
            </div>
          </div>

          {/* Accordion for tour details */}
          <div className="md:w-1/2 mx-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Tour Details</h2>
            {tourDetails.map((detail, index) => (
                <div key={index} className="mb-4 border border-gray-200 rounded-lg">
                  <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-semibold"
                  >
                    <span>{detail.day} Tour Details</span>
                    {activeAccordion === index ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                  </button>
                  {activeAccordion === index && (
                      <div className="p-4 bg-gray-100 text-gray-700">
                        <p>{detail.description}</p>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>

        {/* Tour guides */}
        <div className="my-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black md:text-4xl md:leading-tight">Meet Our Guide</h2>
            <p className="mt-1 text-black text-lg md:text-2xl">Creative people</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
            {packages.map((pack) => (
                <SinglePageTourGuide pack={pack} key={pack._id} />
            ))}
          </div>
          <BookingForm price={price} packages={packages} />
        </div>
      </div>
  );
};

export default SingleCard;

import { useEffect, useState } from "react";
import useAxiosPublick from "../../../Hooks/useAxiosPublick";
import { Link } from "react-router-dom";

const TourGuide = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublick = useAxiosPublick();

  useEffect(() => {
    axiosPublick
      .get("/guides")
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching guides:", err);
        setLoading(false);
      });
  }, [axiosPublick]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-12">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-yellow-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pack) => (
            <div
              key={pack._id}
              className="bg-white rounded border overflow-hidden hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 flex flex-col"
            >
              <img
                src={pack.image}
                alt={pack.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-1">
                  {pack.title}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {pack.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  {pack.description.length > 100
                    ? pack.description.slice(0, 100) + "..."
                    : pack.description}
                </p>
              </div>
              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                <Link
                  to={`guidedetails/${pack._id}`}
                  className="inline-block px-6 py-2 text-sm font-semibold rounded-lg bg-gray-600 text-white hover:bg-gray-800 transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourGuide;

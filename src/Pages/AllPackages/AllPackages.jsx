import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa6";

const AllPackages = ({ pack }) => {
  const { id, tour_type, image, trip_title, price } = pack;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddtoCart = () => {
    if (user && user.email) {
      const cartItem = {
        email: user.email,
        tour_type,
        image,
        trip_title,
        price
      };

      axiosSecure.post('/wishlists', cartItem)
        .then(res => {
          Swal.fire({
            icon: 'success',
            title: `${trip_title} Added to wishlist`,
            showConfirmButton: false,
            timer: 1500
          });
        });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in first, then try again.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in here..."
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] relative">
      <img className="h-48 w-full object-cover rounded-t-md" src={image} alt={trip_title} />
      <div onClick={handleAddtoCart} className="text-4xl absolute top-0 bottom-0 text-blue-700 cursor-pointer">
        <FaHeart />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {trip_title}
        </h3>
        <p className="mt-3 text-gray-500">
          {tour_type}
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <Link to={`/details/${id}`} className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-end">
          View Package
        </Link>
      </div>
    </div>
  );
};

export default AllPackages;

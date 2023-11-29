/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const MyWishList = ({item}) => {
    // eslint-disable-next-line no-unused-vars
    const {tour_type,image,trip_title,price,_id}=item;

    const {user}=useAuth();
    console.log(user);
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();

    const handleAddtoCart=()=>{
        if (user && user.email) {
          console.log("good");
          const cartItem={
            menuId:_id,
            email: user.email,
            tour_type,
            image,
            trip_title,
            price
          }
          console.log(cartItem);
          axiosSecure.post('/wishlists',cartItem)
          .then(res=>{
            console.log(res.data);
            Swal.fire({
              icon:'success',
              title: `${trip_title} Added to wishlist`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch the data
            // refetch();
          })
        }
        else{
          Swal.fire({
            title: "You are not Login!",
            text: "Please Login First then try again.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login Here..."
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login',{state:{from:location}});
            }
          });
        }
      }
    return (
        <div>
              <div>
          {/* <!-- Card Blog --> */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Grid --> */}
            <div className="">
              {/* <!-- Card --> */}
              <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] relative">
              <img className="rounded-t-lg" src={item.image} alt="" />
                <div onClick={handleAddtoCart} className="text-4xl absolute left-0 bottom-0 text-blue-700 cursor-pointer">
                <FaHeart></FaHeart>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {item.tour_type}
                  </h3>
                  <p className="mt-3 text-gray-500">
                    {item.trip_title}
                  </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-right"
                  >
                   
                  </a>
                  <a
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  
                  >
                    View Package
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

export default MyWishList;
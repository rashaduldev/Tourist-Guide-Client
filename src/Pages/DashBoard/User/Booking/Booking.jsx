
import { FaNutritionix, FaTrash} from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useBooking from "../../../../Hooks/useBooking";
import useAuth from "../../../../Hooks/useAuth";


const Booking = () => {
    const [booking,refetch]=useBooking(); 
    console.log(booking);
    const {user}=useAuth();
    console.log(user);
    // const totatPrice=booking.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure();

    const handleDeleteCart=(id)=>{
        console.log(id);
      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            axiosSecure.delete(`/bookings/${id}`)
            .then(res=>{
                console.log(res);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                })
                refetch();
            })
            }
          });
       
    }
    return (
        <div>
            <div className="flex gap-3 justify-evenly bg-orange-200 py-2 mx-2 rounded mb-6">
        <h2 className="uppercase lg:text-3xl text-center">Total Booking: {booking.length}</h2>
        {/* <h2 className="uppercase lg:text-3xl text-center">Total Price: {totatPrice}</h2>
       {booking.length? <Link to={'/dashboard/payment'}>
        <button className="btn btn-primary">Pay</button>
        </Link>:
         <button disabled className="btn btn-primary">Pay</button>
      } */}
        </div>
        <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
              <FaNutritionix></FaNutritionix>
              </th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ITEM IMAGE</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">tourGuide</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Date</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">PRICE</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {
                booking.map((item,index)=> <tr
                key={item._id}
                >
                    <th>
                   {index +1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                            className="rounded-full h-12"
                              src={item?.touristImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {item.tourGuide}
                    </td>
                    <td>{item.tourDate}</td>
                    <td>${item.prices}</td>
                    <th>
                      <button 
                      onClick={()=>handleDeleteCart(item._id)}
                      className="btn btn-ghost btn-xs text-lg">
                       <FaTrash></FaTrash>
                      </button>
                    </th>
                  </tr>)
             }
          </tbody>
        </table>
      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Booking;
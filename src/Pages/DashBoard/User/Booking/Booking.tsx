"use client";

import { FaNutritionix, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useBooking from "../../../../Hooks/useBooking";
import { deleteBooking } from "@/app/actions/secure";

const Booking = () => {
  const [booking, refetch] = useBooking();

  const handleDeleteCart = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(id).then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <div className="flex gap-3 justify-evenly bg-orange-200 py-2 mx-2 rounded mb-6">
        <h2 className="uppercase lg:text-3xl text-center">Total Booking: {booking.length}</h2>
        {/* <h2 className="uppercase lg:text-3xl text-center">Total Price: {totatPrice}</h2>
       {booking.length? <Link href={'/dashboard/payment'}>
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
                    booking.map((item: any, index: number) => <tr
                      key={item._id}
                    >
                      <th>
                        {index + 1}
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
                          onClick={() => handleDeleteCart(item._id)}
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

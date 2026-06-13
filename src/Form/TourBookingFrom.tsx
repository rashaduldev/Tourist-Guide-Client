"use client";

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useList from '../Hooks/useList';
import { useRouter, usePathname } from 'next/navigation';
import { addBooking } from '@/app/actions/secure';

interface BookingFormProps {
  price: any;
  packages: any[];
}

const BookingForm = ({ price, packages }: BookingFormProps) => {
  const { user } = useAuth();
  const [touristImage, setTouristImage] = useState('');
  const [tourDate, setTourDate] = useState<Date | null>(null);
  const [tourGuide, setTourGuide] = useState('');
  const [, refetch] = useList();
  const router = useRouter();
  const pathname = usePathname();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const prices = (form.elements.namedItem('price') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    // start
    if (user && user.email) {
      const formData = {
        name,
        email,
        touristImage,
        prices,
        tourDate,
        tourGuide,
      };
      addBooking(formData).then(() => {
        Swal.fire({
          icon: 'success',
          title: `${name} Added to cart`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      });
    } else {
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
          router.push(`/login?from=${encodeURIComponent(pathname ?? '/')}`);
        }
      });
    }
  };

  return (
    <div className="my-20 p-5">
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center md:mx-10 gap-8'>
        <div className='text-center lg:mx-5 my-5'>
          <h1 className='text-3xl md:text-5xl font-bold'>Booking......</h1>
          <h3 className='text-lg md:text-4xl my-2'>Please Confirm Your Booking</h3>
        </div>
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="border rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-2/3"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package">
                Name of the package
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="package"
                type="text"
                placeholder="Login first"
                value={user?.displayName ?? ''}
                name='name'
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Tourist Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="example@example.com"
                value={user?.email ?? ''}
                name='email'
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Tourist Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="text"
                placeholder="Image URL"
                value={touristImage}
                onChange={(e) => setTouristImage(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Prices"
                value={price}
                name='price'
                disabled
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Tour Date
              </label>
              <DatePicker
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                selected={tourDate}
                onChange={(date: Date | null) => setTourDate(date)}
                dateFormat="MM/dd/yyyy"
                id="date"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guide">
                Tour Guide Name
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={tourGuide}
                onChange={(e) => setTourGuide(e.target.value)}
                id="guide"
              >
                <option value="">Select Guide</option>
                {packages.map((packag: any) => <option key={packag.id}>{packag.name}</option>)}
              </select>
            </div>

            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

import{ useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useList from '../Hooks/useList';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({price ,packages}) => {
  const {user}=useAuth();
  // const [touristName, setTouristName] = useState('');
  // const [touristEmail, setTouristEmail] = useState('');
  const [touristImage, setTouristImage] = useState('');
  // const [prices, setPrices] = useState('');
  const [tourDate, setTourDate] = useState(null);
  const [tourGuide, setTourGuide] = useState('');
  const axiosSecure=useAxiosSecure();
  const [refetch]=useList();
  const navigate=useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form=e.target;
    const prices=form.price.value;
    const email=form.email.value;
    const name=form.name.value;
    // start
    if (user && user.email) {
      console.log("good");
      const formData = {
        name,
        email,
        touristImage,
        prices,
        tourDate,
        tourGuide,
      };
      console.log('Form data:', formData);
      axiosSecure.post('/bookings',formData)
      .then(res=>{
        console.log(res.data);
        Swal.fire({
          icon:'success',
          title: `${name} Added to cart`,
          showConfirmButton: false,
          timer: 1500
        });
        // refetch the data
        refetch();
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
        // navigate('/login')
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}});
        }
      });
    }


    // end

 

   
  };

  return (
    <div className="min-h-screen">
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center mx-10 gap-8'>
      <div className='text-center lg:mx-5 my-5'>
        <h1 className='text-5xl font-bold'>Booking............</h1>
        <h3 className='text-4xl my-7'>Please Confirm Your Booking</h3>
      </div>
      <div>
      <form
        onSubmit={handleFormSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-2/3"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package">
            Name of the package
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="package"
            type="text"
            placeholder="Package Name"
            value={user?.displayName}
            name='name'
            disabled
            // onChange={(e) => setTouristName(e.target.value)}
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
            value={user?.email}
            name='email'
            disabled
            // onChange={(e) => setTouristEmail(e.target.value)}
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
            // onChange={(e) => setPrices(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Tour Date
          </label>
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={tourDate}
            onChange={(date) => setTourDate(date)}
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
           {packages.map(packag=> <option key={packag.id}>{packag.name}</option>) }
            {/* Add more options for guides */}
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

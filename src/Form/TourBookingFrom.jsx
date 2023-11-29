import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Styling for the date picker

const BookingForm = () => {
  const [touristName, setTouristName] = useState('');
  const [touristEmail, setTouristEmail] = useState('');
  const [touristImage, setTouristImage] = useState('');
  const [price, setPrice] = useState('');
  const [tourDate, setTourDate] = useState(null); // Date state
  const [tourGuide, setTourGuide] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here (e.g., send data to backend, etc.)
    // You can access the form data in the respective state variables
    const formData = {
      touristName,
      touristEmail,
      touristImage,
      price,
      tourDate,
      tourGuide,
    };

    console.log('Form data:', formData);
    // You can perform further actions like sending this data to a server
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          Name of the package:
          <input
            type="text"
            value={touristName}
            onChange={(e) => setTouristName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tourist Name:
          <input
            type="text"
            value={touristName}
            onChange={(e) => setTouristName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tourist Email:
          <input
            type="email"
            value={touristEmail}
            onChange={(e) => setTouristEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tourist Image:
          <input
            type="text"
            value={touristImage}
            onChange={(e) => setTouristImage(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tour Date:
          <DatePicker
            selected={tourDate}
            onChange={(date) => setTourDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </label>
      </div>
      <div>
        <label>
          Tour guide name:
          <select value={tourGuide} onChange={(e) => setTourGuide(e.target.value)}>
            <option value="guide1">Guide 1</option>
            <option value="guide2">Guide 2</option>
            {/* Add more options for guides */}
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Book Now</button>
      </div>
    </form>
  );
};

export default BookingForm;

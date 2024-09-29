import { useState } from 'react';
import Swal from 'sweetalert2';

const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    tourType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = new FormData();
    form.append('image', formData.image);
    form.append('trip_title', formData.title);
    form.append('tour_type', formData.tourType);

    // Assuming you have a specific route for submitting the package
    fetch('https://tourist-guide-server-tawny.vercel.app/packages', {
      method: 'POST',
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: 'Package Added!',
            text: 'Your package has been successfully added.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'There was a problem adding the package.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Package</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 p-2 border w-full rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 p-2 border w-full rounded-lg"
            placeholder="Enter package title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tour Type</label>
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            className="mt-2 p-2 border w-full rounded-lg"
            required
          >
            <option value="" disabled>Select a tour type</option>
            <option value="walking">Walking</option>
            <option value="sports">Sports</option>
            <option value="wildlife">Wildlife</option>
            <option value="hiking">Hiking</option>
            <option value="cruises">Cruises</option>
            <option value="airrides">Air Rides</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 w-full rounded-lg hover:bg-green-600"
        >
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;

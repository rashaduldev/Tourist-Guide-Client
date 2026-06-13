"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';
import { addPackage } from '@/app/actions/secure';

interface FormData {
  image: File | null;
  title: string;
  tourType: string;
}

const AddPackageForm = () => {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    title: '',
    tourType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addPackage({
        trip_title: formData.title,
        tour_type: formData.tourType,
      });
      Swal.fire({
        title: 'Package Added!',
        text: 'Your package has been successfully added.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setFormData({ image: null, title: '', tourType: '' });
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'There was a problem adding the package.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
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

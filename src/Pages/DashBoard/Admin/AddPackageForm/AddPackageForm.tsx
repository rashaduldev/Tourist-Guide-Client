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

  const inputClass =
    "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        নতুন প্যাকেজ যোগ করুন
      </h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        একটি নতুন ট্যুর প্যাকেজের বিবরণ পূরণ করুন।
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            ছবি আপলোড
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-1.5 file:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            শিরোনাম
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={inputClass}
            placeholder="প্যাকেজের শিরোনাম লিখুন"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            ট্যুরের ধরন
          </label>
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="" disabled>
              ধরন নির্বাচন করুন
            </option>
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
          className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5"
        >
          প্যাকেজ যোগ করুন
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;

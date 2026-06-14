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
    "mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-card focus:ring-2 focus:ring-ring/20 dark:border-border dark:bg-muted dark:text-white";

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-extrabold tracking-tight text-foreground dark:text-white">
        নতুন প্যাকেজ যোগ করুন
      </h1>
      <p className="mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
        একটি নতুন ট্যুর প্যাকেজের বিবরণ পূরণ করুন।
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 dark:border-border dark:bg-card"
      >
        <div>
          <label className="block text-sm font-medium text-foreground dark:text-muted-foreground">
            ছবি আপলোড
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 w-full rounded-xl border border-border bg-muted p-3 text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-1.5 file:text-white dark:border-border dark:bg-muted dark:text-muted-foreground"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground dark:text-muted-foreground">
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
          <label className="block text-sm font-medium text-foreground dark:text-muted-foreground">
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
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
        >
          প্যাকেজ যোগ করুন
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;

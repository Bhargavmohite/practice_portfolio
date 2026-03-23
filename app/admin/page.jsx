'use client'
import React, { use, useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      title: "",
      experience: "",
      photo: null,
    });

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === "photo") {
        setFormData({ ...formData, photo: files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submit:", formData);
    };

    const handleUpdate = () => {
      console.log("Update:", formData);
    };

  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='w-full max-w-md bg-gray-900 rounded-3xl shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>
          Admin Home
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
          />

          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
          />

          <input
            type='text'
            name='title'
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
            className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
          />

          <input
            type='number'
            name='experience'
            placeholder='Experience (years)'
            value={formData.experience}
            onChange={handleChange}
            className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
          />

          <input
            type='file'
            name='photo'
            onChange={handleChange}
            className='w-full p-2 rounded-xl bg-gray-800 text-white'
          />

          <button
            type='submit'
            className='w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow-md hover:opacity-90'
          >
            Submit
          </button>

          <button
            type='button'
            onClick={handleUpdate}
            className='w-full py-3 rounded-full bg-gray-700 text-white font-semibold shadow-md hover:opacity-90'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default page
'use client'
import React, { useState } from 'react'

const page = () => {

  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", formData);
  };

  const handleUpdate = () => {
    console.log("Update:", formData);
  };
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-black'>
        <div className='w-full max-w-md bg-gray-900 rounded-3xl shadow-xl p-8'>
          <h1 className='text-3xl font-bold text-center text-blue-500 mb-6'>
            Admin Contact
          </h1>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Email */}
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
            />

            {/* Mobile Number */}
            <input
              type='tel'
              name='mobile'
              placeholder='Mobile No.'
              value={formData.mobile}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
            />

            {/* Location */}
            <input
              type='text'
              name='location'
              placeholder='Location'
              value={formData.location}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
            />

            {/* Buttons */}
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
    </>
  );
}

export default page





 
   

'use client'
import React from 'react'
import contactData from '@/Data/contact_information.json'

function page() {
  return (
    <div className='bg-gradient-to-br from-[#0a192f] to-[#020c1b] min-h-screen text-white px-6 py-16'>
      {/* Heading */}
      <div className='max-w-6xl mx-auto mb-10'>
        <h1 className='text-3xl font-bold mb-2'>Get in Touch</h1>
        <p className='text-gray-400 max-w-xl'>
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>
      </div>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
        {/* LEFT: FORM */}
        <form>
        <div className='bg-[#0f223a] border border-gray-700 rounded-xl p-6'>
          <h2 className='text-lg font-semibold mb-4'>Send a Message</h2>

          <div className='grid grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Full Name'
              className='bg-[#0a192f] border border-gray-600 rounded-lg px-3 py-2'
            />
            <input
              type='email'
              placeholder='Email Address'
              className='bg-[#0a192f] border border-gray-600 rounded-lg px-3 py-2'
            />
          </div>

          <input
            type='text'
            placeholder='Subject'
            className='w-full mt-4 bg-[#0a192f] border border-gray-600 rounded-lg px-3 py-2'
          />

          <textarea
            placeholder='Message...'
            rows='4'
            className='w-full mt-4 bg-[#0a192f] border border-gray-600 rounded-lg px-3 py-2'
          ></textarea>

          <button className='mt-6 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600'>
            Send Message →
          </button>
        </div>
        </form>

        {/* RIGHT: CONTACT INFO (FROM JSON) */}
        <div className='bg-[#0f223a] border border-gray-700 rounded-xl p-6 flex flex-col justify-between'>
          <div>
            <h2 className='text-lg font-semibold mb-6'>Contact Information</h2>

            {/* Email */}
            <div className='mb-4'>
              <p className='text-sm text-gray-400'>{contactData.email.label}</p>
              <p className='font-medium'>{contactData.email.value}</p>
            </div>

            {/* Phone */}
            <div className='mb-4'>
              <p className='text-sm text-gray-400'>{contactData.phone.label}</p>
              <p className='font-medium'>{contactData.phone.value}</p>
            </div>

            {/* Location */}
            <div className='mb-4'>
              <p className='text-sm text-gray-400'>
                {contactData.location.label}
              </p>
              <p className='font-medium'>{contactData.location.value}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className='mt-6 flex gap-3'>
            {contactData.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className='w-10 h-10 flex items-center justify-center rounded-full bg-[#0a192f] border border-gray-600 hover:bg-gray-700'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Map (Optional Static UI) */}
      <div className='max-w-6xl mx-auto mt-8'>
        <div className='rounded-xl overflow-hidden border border-gray-700'>
          <img
            src='https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco&zoom=12&size=600x300&key=YOUR_API_KEY'
            alt='map'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default page
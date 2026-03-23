import React from 'react'

const Admin_footer = () => {
  return (
    <>
      <footer className='bg-[#0b1a2a] text-gray-300 pt-12 pb-6'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Top Footer */}
          <div className='grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10'>
            {/* Left Section */}
            <div>
              <h2 className='text-white text-xl font-semibold mb-4'>
                Portfolio
              </h2>
              <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                Building software that makes a difference. Focused on
                performance, design, and user experience.
              </p>

              {/* Icons */}
              <div className='flex gap-4'>
                <div className='bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-500'>
                  @
                </div>
                <div className='bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-500'>
                  🔗
                </div>
                <div className='bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-blue-500'>
                  ✉
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className='text-white font-semibold mb-4'>Links</h3>
              <ul className='space-y-2 text-sm'>
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>About</li>
                <li className='hover:text-white cursor-pointer'>Resume</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className='text-white font-semibold mb-4'>Resources</h3>
              <ul className='space-y-2 text-sm'>
                <li className='hover:text-white cursor-pointer'>Tech Stack</li>
                <li className='hover:text-white cursor-pointer'>Blog</li>
                <li className='hover:text-white cursor-pointer'>
                  Case Studies
                </li>
                <li className='hover:text-white cursor-pointer'>
                  Testimonials
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500'>
            <p>© 2024 Portfolio Design. All rights reserved.</p>

            <div className='flex gap-6 mt-4 md:mt-0'>
              <span className='hover:text-white cursor-pointer'>
                Privacy Policy
              </span>
              <span className='hover:text-white cursor-pointer'>
                Terms of Service
              </span>
              <span className='hover:text-white cursor-pointer'>
                Accessibility
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Admin_footer
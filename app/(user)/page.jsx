import React from 'react'
import projects from '@/Data/Home_projects.json'

function page() {
  return (
    <>
      <section className='grid md:grid-cols-2 gap-10 px-10 py-16 items-center'>
        {/* Left */}
        <div>
          <p className='text-sm text-blue-400 mb-4'>
            ● AVAILABLE FOR NEW PROJECTS
          </p>

          <h1 className='text-5xl font-bold mb-4'>
            John <span className='text-blue-500'>Doe</span>
          </h1>

          <h2 className='text-xl text-gray-300 mb-4'>Full Stack Developer</h2>

          <p className='text-gray-400 mb-6 max-w-md'>
            Building scalable web applications with modern technologies. I
            specialize in crafting high-performance user experiences and robust
            backend architectures.
          </p>

          <div className='flex gap-4'>
            <button className='bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600'>
              View Projects →
            </button>
            <button className='bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600'>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className='flex justify-center'>
          <div className='relative'>
            <img
              src='https://via.placeholder.com/300'
              alt='profile'
              className='rounded-2xl shadow-lg'
            />

            <div className='absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-[#0a192f] px-4 py-2 rounded-xl border border-gray-600 text-sm  grid grid-rows-2 '>
              <div className='loader'></div> 5+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className='px-10 py-16'>
        <div className='flex justify-between items-center mb-10'>
          <div>
            <h2 className='text-2xl font-semibold'>Featured Work</h2>
            <p className='text-gray-400'>
              A selection of my recent full-stack applications
            </p>
          </div>
          <a href='#' className='text-blue-400'>
            All Projects →
          </a>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {projects.map((p, i) => (
            <div
              key={i}
              className='bg-[#0a192f] border border-gray-700 rounded-xl p-5 hover:scale-105 transition'
            >
              <div className='h-40 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-4'></div>

              <h3 className='text-lg font-semibold mb-2'>{p.title}</h3>
              <p className='text-gray-400 mb-4'>{p.desc}</p>

              <div className='flex gap-2'>
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-xs bg-gray-700 px-2 py-1 rounded'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default page
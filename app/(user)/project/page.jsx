"use client"
import React, { useState } from 'react'
import projectsData from '@/Data/Project_card.json'
import Image from 'next/image';


function page() {
  const [search, setSearch] = useState("");

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className='bg-gradient-to-br from-[#0a192f] to-[#020c1b] min-h-screen text-white px-6 py-16'>
      {/* Heading */}
      <div className='max-w-6xl mx-auto mb-10'>
        <h1 className='text-3xl font-bold mb-2'>Featured Projects</h1>
        <p className='text-gray-400 max-w-xl'>
          A curated selection of my professional work, open-source
          contributions, and technical experiments.
        </p>

        {/* Search Bar */}
        <input
          type='text'
          placeholder='Search projects...'
          className='mt-6 w-full md:w-96 px-4 py-2 rounded-lg bg-[#0f223a] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards Grid */}
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className='bg-[#0f223a] border border-gray-700 rounded-xl overflow-hidden hover:scale-105 transition'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-40 object-cover'
              />

              <div className='p-4'>
                <h2 className='font-semibold text-lg'>{project.title}</h2>
                <p className='text-gray-400 text-sm mt-2'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mt-3'>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='text-xs px-2 py-1 bg-[#0a192f] border border-gray-600 rounded'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo Link */}
                <a
                  href={project.demo}
                  className='inline-block mt-4 text-blue-400 text-sm'
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-400 col-span-3 text-center'>
            No projects found.
          </p>
        )}
      </div>

      {/* CTA */}
      <div className='text-center mt-16'>
        <h2 className='text-xl font-semibold mb-2'>
          Let's build something together
        </h2>
        <p className='text-gray-400 mb-6'>
          I'm currently available for freelance work and full-time
          opportunities.
        </p>

        <div className='flex justify-center gap-4'>
          <button className='bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600'>
            Get In Touch
          </button>
          <button className='border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-700'>
            View Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default page
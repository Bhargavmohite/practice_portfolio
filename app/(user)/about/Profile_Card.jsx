import React from 'react'
import data from '@/Data/About_card.json'

export const Profile_Card = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#020c1b] text-white px-5 py-10'>
      <div className='w-full max-w-xl bg-[#0f223a] border border-gray-700 rounded-2xl p-8 shadow-xl'>
        {/* Avatar + Info */}
        <div className='flex flex-col items-center text-center'>
          <img
            src={data.avatar}
            alt='profile'
            className='w-20 h-20 rounded-full mb-4 border-2 border-gray-600'
          />

          <h1 className='text-2xl font-semibold'>{data.name}</h1>
          <p className='text-blue-400 text-sm mt-1'>{data.role}</p>

          <p className='text-gray-400 mt-4 text-sm leading-relaxed max-w-md'>
            {data.description}
          </p>
        </div>

        {/* Skills */}
        <div className='flex flex-wrap justify-center gap-2 mt-6'>
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className='text-xs px-3 py-1 bg-[#0a192f] border border-gray-600 rounded-full'
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Experience */}
        <div className='mt-8'>
          <h2 className='text-sm text-gray-300 mb-4'>💼 Experience</h2>

          <div className='border-l border-gray-600 pl-4 space-y-4'>
            {data.experience.map((exp, index) => (
              <div key={index}>
                <h3 className='text-sm font-semibold'>{exp.title}</h3>
                <p className='text-xs text-gray-400'>
                  {exp.company} • {exp.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className='mt-8'>
          <h2 className='text-sm text-gray-300 mb-4'>🎓 Education</h2>

          <div className='border-l border-gray-600 pl-4 space-y-3'>
            {data.education.map((edu, index) => (
              <div key={index}>
                <h3 className='text-sm font-semibold'>{edu.degree}</h3>
                <p className='text-xs text-gray-400'>
                  {edu.institution} • {edu.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className='flex justify-center gap-4 mt-8'>
          {data.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className='w-10 h-10 flex items-center justify-center rounded-full bg-[#0a192f] border border-gray-600 hover:bg-gray-700'
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

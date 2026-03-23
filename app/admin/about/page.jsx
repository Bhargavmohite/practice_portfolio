'use client'
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    bio: "",
    skills: [""],
    experience: [""],
    education: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, field, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeField = (index, field) => {
    const updated = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updated });
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
      <div className='min-h-screen flex items-center justify-center bg-black px-5 py-10'>
        <div className='w-full max-w-md bg-gray-900 rounded-3xl shadow-xl p-8'>
          <h1 className='text-3xl font-bold text-center text-blue-500 mb-6'>
            Admin About
          </h1>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Bio */}
            <p className='text-white mb-2'>Bio</p>
            <textarea
              name='bio'
              placeholder='Enter Bio'
              value={formData.bio}
              onChange={handleChange}
              className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none'
            />

            {/* Skills */}
            <div>
              <p className='text-white mb-2'>Skills</p>
              {formData.skills.map((skill, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={skill}
                    onChange={(e) =>
                      handleArrayChange(index, "skills", e.target.value)
                    }
                    className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400'
                    placeholder='Skill'
                  />
                  <button
                    type='button'
                    onClick={() => removeField(index, "skills")}
                    className='bg-red-500 px-3 rounded-lg text-white'
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addField("skills")}
                className='text-blue-400 text-sm'
              >
                + Add Skill
              </button>
            </div>

            {/* Experience */}
            <div>
              <p className='text-white mb-2'>Experience</p>
              {formData.experience.map((exp, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={exp}
                    onChange={(e) =>
                      handleArrayChange(index, "experience", e.target.value)
                    }
                    className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400'
                    placeholder='Experience'
                  />
                  <button
                    type='button'
                    onClick={() => removeField(index, "experience")}
                    className='bg-red-500 px-3 rounded-lg text-white'
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addField("experience")}
                className='text-blue-400 text-sm'
              >
                + Add Experience
              </button>
            </div>

            {/* Education */}
            <div>
              <p className='text-white mb-2'>Education</p>
              {formData.education.map((edu, index) => (
                <div key={index} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={edu}
                    onChange={(e) =>
                      handleArrayChange(index, "education", e.target.value)
                    }
                    className='w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400'
                    placeholder='Education'
                  />
                  <button
                    type='button'
                    onClick={() => removeField(index, "education")}
                    className='bg-red-500 px-3 rounded-lg text-white'
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={() => addField("education")}
                className='text-blue-400 text-sm'
              >
                + Add Education
              </button>
            </div>

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
'use client'
import React, { useState } from 'react'

const page = () => {
  const [formData, setFormData] = useState({
    file: null,
    title: "",
    shortBio: "",
    skills: [""],
    link: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (index, value) => {
    const updated = [...formData.skills];
    updated[index] = value;
    setFormData({ ...formData, skills: updated });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const removeSkill = (index) => {
    const updated = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", formData);
  };

  const handleUpdate = () => {
    console.log("Update:", formData);
  };

  const handleDelete = () => {
    console.log("Delete action triggered");
    setFormData({
      file: null,
      title: "",
      shortBio: "",
      skills: [""],
      link: "",
    });
  };
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-black px-5 py-10">
      <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          Admin Projects
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* File Upload */}
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full p-2 rounded-xl bg-gray-800 text-white"
          />

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />

          {/* Short Bio */}
          <textarea
            name="shortBio"
            placeholder="Short Bio"
            value={formData.shortBio}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />

          {/* Skills */}
          <div>
            <p className="text-white mb-2">Skills</p>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleArrayChange(index, e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Skill"
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="bg-red-500 px-3 rounded-lg text-white"
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkill}
              className="text-blue-400 text-sm"
            >
              + Add Skill
            </button>
          </div>

          {/* Link */}
          <input
            type="url"
            name="link"
            placeholder="Project / Profile Link"
            value={formData.link}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />

          {/* Buttons */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow-md hover:opacity-90"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleUpdate}
            className="w-full py-3 rounded-full bg-gray-700 text-white font-semibold shadow-md hover:opacity-90"
          >
            Update
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-full py-3 rounded-full bg-red-600 text-white font-semibold shadow-md hover:opacity-90"
          >
            Delete
          </button>
        </form>
      </div>
    </div>

    </>
  )
}

export default page
'use client';
import React from 'react';

const experienceImages = {
  practicum: '/fisdas.webp',
  kesenian: '/bali.jpeg',
  search: '/search.webp',
  NDN : '/ndn.png',
};

const experiences = [
  {
    id: 1,
    title: 'Basic Physics Laboratory as Practicum Assistant',
    duration: 'June 2023 - Present',
    activities: 'Teaching basic physics',
    image: experienceImages.practicum
  },
  {
    id: 2,
    title: 'Advance Network Laboratory (NDN)',
    duration: '2024-present',
    activities: 'Member of Network',
    image: experienceImages.NDN
  },
  {
    id: 3,
    title: 'UKM Kesenian Bali',
    duration: '2022',
    activities: 'Member',
    image: experienceImages.kesenian
  },
  {
    id: 4,
    title: 'UKM Search',
    duration: '2022',
    activities: 'Member',
    image: experienceImages.search
  },
];

const ExperiencePage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-5"
      style={{ backgroundImage: "url('/web-bg.jpg')" }}
    >
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-orange-700 to-orange-500">
          My<br />
          <span className="block text-6xl">Experience</span>
        </h1>
      </div>
      <div className="flex flex-col space-y-6 w-full max-w-3xl">
        {experiences.map(exp => (
          <div
            key={exp.id}
            className="flex items-center bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-48 h-32 object-cover"
            />
            <div className="p-6 text-white">
              <h2 className="text-xl font-semibold">{exp.title}</h2>
              <p className="text-white">{exp.duration}</p>
              <p className="text-white">{exp.activities}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/gustiayu004_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/GustiJyothi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition-colors duration-300"
        >
          <FaGithub size={30} />
          </a>
          <a
          href="https://vercel.com/gustijyothi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition-colors duration-300"
        >
          <SiVercel size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;

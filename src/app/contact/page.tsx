import React from 'react';
import SocialMediaLinks from '../components/socmed';

const Contact: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('web-bg.jpg')" }}
    >
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-800 mb-8">
        Reach Me Out
      </h1>
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-800 mb-4">
        On Social Media
      </p>
      <SocialMediaLinks />
    </div>
  );
};

export default Contact;


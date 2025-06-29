import React from 'react';
import { PiPhone } from 'react-icons/pi';
import { Typewriter } from 'react-simple-typewriter';

const Footer = () => {

  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "Mern Stack Developer",
    "Flutter Developer",
    "Django Developer",
    "React Developer",
    "Python Developer",
    "Angular Developer",
    "Web Developer",
    "Open Source Contributor",
    "Linux Enthusiast",
    "Flask Developer",
    "Spring Developer",
    "Java Developer"
  ]

  return (
    <footer className="w-full flex justify-center">
      <div className='bg text-white p-4 md:rounded-full rounded-2xl shadow-lg w-[95vw] flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <h1 className='text-green-600 font-semibold min-[410px]:text-2xl text-xl truncate max-w-full'>Safwan <span className='text-white'>• <Typewriter words={words} loop={true} /></span></h1>
          <p className='text-gray-400 truncate max-w-full'>© {new Date().getFullYear()} Safwan Sadid. All rights reserved.</p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between justify-center text-center'>
          <p className='text-gray-500 text-sm mt-1'>Crafted with passion and enjoyment.</p>
          <p className='text-gray-500 text-sm mt-1 flex gap-1 items-center text-center w-full md:w-fit justify-center md:justify-normal'><PiPhone></PiPhone> +8801981575920</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
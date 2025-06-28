import React, { useEffect } from 'react';
import { BiDownload } from 'react-icons/bi';
import { BsDiscord, BsEye, BsGithub, BsLinkedin } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#home');
    }
  }, [inView])

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
    <div className='w-[95vw] mx-auto!' id='home' ref={ref}>
      <div className='flex lg:flex-row flex-col-reverse items-center lg:items-start gap-4'>
        <div className='flex flex-col bg p-6! rounded-2xl lg:w-[60%] w-[90%]'>
          <div>
            <h1 className='text-5xl font-medium'>Hello, I am Safwan Sadid.</h1>
            <p className='text-xl text-gray-300 mb-2!'>A young <strong> <Typewriter words={words} loop={true}></Typewriter>. </strong></p>
            <p className='text-sm font-light text-gray-400'>I am a self-motivated individual who began exploring coding since the pandemic in 2020, Initially, it was just a hobby but later on it became a love for problem-solving. In these years, I have worked on many projects.</p>
          </div>
          <div className='mb-8'></div>
          <div className='flex flex-col'>
            <div className='flex gap-2'>
              <a download={true} href='/assets/Safwan_Sadid_Resume.pdf' className='glass-button flex gap-2 items-center p-3 rounded-lg sm:w-[22%] w-[50%] justify-center'>Resume <BiDownload></BiDownload></a>
            </div>
            <div className='flex gap-4 mt-8 items-center'>
              <a href="https://www.linkedin.com/in/safwan-sadid-1b1978358/" className='text-2xl'><BsLinkedin></BsLinkedin></a>
              <a href="https://github.com/SafuGit" className='text-2xl'><BsGithub></BsGithub></a>
              <a href="http://discord.com/users/871313769723228160" className='text-2xl'><BsDiscord></BsDiscord></a>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src="/assets/PORTFOLIO_IMAGE.jpg" alt="" className='lg:w-120 w-[90%] rounded-2xl' />
        </div>
      </div>
    </div>
  );
};

export default Home;
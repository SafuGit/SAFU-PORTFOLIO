import React, { useEffect } from 'react';
import { BiLink } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#projects');
    }
  }, [inView])

  return (
    <div className='w-[95vw] mx-auto' id='projects' ref={ref}>
      <h1 className='text-center text-5xl font-semibold mb-8'>Featured Projects</h1>
      <div className='flex flex-col justify-center gap-20'>
        <div className='flex justify-center'>
          <div className='w-[60%]'>
            <img className='rounded-l-2xl h-full' src="/assets/marathonOps.png" alt="" />
          </div>
          <div className='w-[35%] bg rounded-r-2xl p-6'>
            <h1 className='text-3xl font-medium'>MarathonOps</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-400'>A Marathon Event Management app with many features such as Adding Marathons, Applying for Marathons etc.</p>
            <div className='mt-3 mb-4'>
              <p>
                - JWT Token Integration <br />
                - CRUD Operations <br />
                - Firebase Auth <br />
                - Lottie Files
              </p>
            </div>
            <div className='flex gap-2 flex-wrap mb-10'>
              <img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react" alt="Badge"></img>
              <img src="https://img.shields.io/badge/MongoDB-darkgreen?style=for-the-badge&logo=mongodb" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Firebase-red?style=for-the-badge&logo=firebase" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Node.js-627a1a?style=for-the-badge&logo=nodedotjs" alt="Badge"></img>
              <img src="https://img.shields.io/badge/JWT-purple?style=for-the-badge&logo=jsonwebtokens" alt="Badge"></img>
            </div>
            <div className='flex gap-2'>
              <a href='https://marathon-ops.web.app' className='btn bg text-lg'>Live Link <BiLink></BiLink></a>
              <a href='https://github.com/safugit/MarathonOps' className='btn text-lg btn-info'>Github <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-center'>
          <div className='w-[60%]'>
            <img src="https://i.ibb.co/2722sT6M/Screenshot-2025-06-28-183402.png" alt="Screenshot-2025-06-28-183402" border="0" className='rounded-r-2xl h-full' />
          </div>
          <div className='w-[35%] bg rounded-l-2xl p-6'>
            <h1 className='text-3xl font-medium'>GardenHub</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-400'>
              A platform for gardening enthusiasts to share tips, find local gardeners, ask plant care questions, post or join gardening events.
            </p>
            <div className='mt-3 mb-4'>
              <p>
                - Sorting, Filtering <br />
                - CRUD Operations <br />
                - Dashboard System, Firebase Auth
              </p>
            </div>
            <div className='flex gap-2 flex-wrap mb-10'>
              <img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react" alt="Badge"></img>
              <img src="https://img.shields.io/badge/MongoDB-darkgreen?style=for-the-badge&logo=mongodb" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Firebase-red?style=for-the-badge&logo=firebase" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=express" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Node.js-627a1a?style=for-the-badge&logo=nodedotjs" alt="Badge"></img>
            </div>
            <div className='flex gap-2'>
              <a href='https://safu-a9.web.app' className='btn bg text-lg'>Live Link <BiLink></BiLink></a>
              <a href='https://github.com/safugit/GardenHub' className='btn text-lg btn-info'>Github <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[60%]'>
            <img className='rounded-l-2xl h-full' src="/assets/jobBazar.png" alt="" />
          </div>
          <div className='w-[35%] bg rounded-r-2xl p-6'>
            <h1 className='text-3xl font-medium'>JobBazar BD</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-400'>
              A Job Marketplace app to hire employees and get jobs. With features including CV upload, job posting, and user authentication.
            </p>
            <div className='mt-3 mb-4'>
              <p>
                - Public Job Posting<br />
                - CV and User Profile Creation <br />
                - User Authentication <br />
                - CRUD Operations
              </p>
            </div>
            <div className='flex gap-2 flex-wrap mb-10'>
              <img src="https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular" alt="Badge"></img>
              <img src="https://img.shields.io/badge/SpringBoot-darkgreen?style=for-the-badge&logo=spring" alt="Badge"></img>
              <img src="https://img.shields.io/badge/SCSS-blue?style=for-the-badge&logo=css" alt="Badge"></img>
              <img src="https://img.shields.io/badge/HTML5-9e444b?style=for-the-badge&logo=html5" alt="Badge"></img>
              <img src="https://img.shields.io/badge/Angular Material-darkred?style=for-the-badge&logo=materialdesign" alt="Badge"></img>
              <img src="https://img.shields.io/badge/MySQL-darkblue?style=for-the-badge&logo=mysql" alt="Badge"></img>
            </div>
            <div className='flex gap-2'>
              <a href='https://marathon-ops.web.app' className='btn bg text-lg'>Live Link <BiLink></BiLink></a>
              <a href='https://github.com/safugit/MarathonOps' className='btn text-lg btn-info'>Github <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
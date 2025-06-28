import React, { useEffect } from 'react';
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
      <div className='flex flex-col justify-center gap-4'>
        <div className='flex justify-center'>
          <div className='w-[60%]'>
            <img className='rounded-l-2xl' src="https://private-user-images.githubusercontent.com/98327221/458516675-7385d87b-7561-41c5-971f-9d4138fcb2a7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTExMDk0OTUsIm5iZiI6MTc1MTEwOTE5NSwicGF0aCI6Ii85ODMyNzIyMS80NTg1MTY2NzUtNzM4NWQ4N2ItNzU2MS00MWM1LTk3MWYtOWQ0MTM4ZmNiMmE3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjI4VDExMTMxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk3MTI4MjQ5NTc2NjZlMmI4MmM2ZDc0NjVkZjNlZmFlMWFjMWY0MzVjM2VjNTVjOGQzZjIyNTM4MDk0Yzg0NWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0A0YrYVMNZPlPkcXmEy0__SO4GajJT9uoHHIEpRhzjY" alt="" />
          </div>
          <div className='w-[35%] bg rounded-r-2xl p-6'>
            <h1 className='text-3xl font-medium'>MarathonOps</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-400'>A Marathon Event Management app with many features such as Adding Marathons, Applying for Marathons etc.</p>
            <div className='mt-3 mb-2'>
              <p>
                - JWT Token Integration <br />
                - CRUD Operations <br />
                - Dashboard System, Firebase Auth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
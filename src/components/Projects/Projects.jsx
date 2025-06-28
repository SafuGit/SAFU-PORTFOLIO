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
      <h1 className='text-center text-5xl font-semibold'>Featured Projects</h1>
    </div>
  );
};

export default Projects;
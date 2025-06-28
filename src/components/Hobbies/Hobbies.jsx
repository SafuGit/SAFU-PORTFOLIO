import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Hobbies = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#hobbies');
    }
  }, [inView])

  return (
    <div className='w-[95vw] mx-auto mt-40' ref={ref} id='hobbies'>
      <h1 className='text-5xl mb-8 font-semibold'>My Hobbies</h1>
      <div className="mockup-code w-full">
        <pre data-prefix="$"><code>echo "Use Linux, dont waste your Computers Power."</code></pre>
      </div>
      <div className='grid grid-cols-3 mt-10'>
        <div className=''>
          <div>
            <img src="https://linuxiac.b-cdn.net/wp-content/uploads/2020/06/archlinux.jpg" alt="" className='rounded-t-2xl'/>
          </div>
          <div className='arch-bg p-4 rounded-b-2xl'>
            <h1 className='text-3xl font-medium'>Linux</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-300'>I always dreamed of having a PC that gave me complete freedom to customize everything and contribute to open source. So choosing Linux was an easy decision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
import React, { useEffect } from 'react';
import { BiPhone } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { MdEmail, MdMail } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#contact');
    }
  }, [inView])
  return (
    <div id='contact' className='w-[95vw] mx-auto' ref={ref}>
      <h1 className='text-5xl font-medium mb-6'>Contact Me</h1>
      <div className='flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between'>
        <div className='bg rounded-2xl p-8 sm:w-[70%]'>
          <h1 className='text-2xl'>Let's Connect</h1>
          <p className='text-gray-400'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className='flex gap-1 items-center mt-4'>
            <BiPhone className='text-xl'></BiPhone>
            <p>+8801981575920</p>
          </div>
          <div className='flex gap-1 items-center mt-2'>
            <MdEmail className='text-xl'></MdEmail>
            <p>safwansadid.ah@gmail.com</p>
          </div>
        </div>
        <div className='bg rounded-2xl p-8 sm:w-[25%] hover:cursor-pointer' onClick={() => {
          window.location.href = 'mailto:safwansadid.ah@gmail.com'
        }}>
          <div className='flex justify-between'>
            <MdMail className='text-3xl mb-4'></MdMail>
            <button className='btn btn-ghost btn-circle'><BsArrowRight className='text-3xl'></BsArrowRight></button>
          </div>
          <h1 className='text-2xl mb-2'>Email Me!</h1>
          <p className='text-gray-400'>Get in touch Via email.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
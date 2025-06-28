import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import skills from '../../assets/skills';
import { useInView } from 'react-intersection-observer';
import { FaAngular, FaReact } from 'react-icons/fa';
import { SiDaisyui, SiDjango, SiFlask, SiTailwindcss, SiVite } from 'react-icons/si';
import { FaFlask, FaFlutter } from 'react-icons/fa6';
import { BsBootstrap } from 'react-icons/bs';


const Skills = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#skills');
    }
  }, [inView])

  const middle = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, middle);
  const secondRow = skills.slice(middle);
  return (
    <div className='w-[95vw] mx-auto' id='skills' ref={ref}>
      <h1 className='text-5xl mb-16 font-semibold'>My Skills</h1>
      <Marquee speed={30}>
        {firstRow.map((skill, index) => (
          <div key={index} className='flex flex-col items-center justify-center mx-4 w-35 shadow-xl hover:animate-pulse hover:cursor-pointer bg p-8 rounded-2xl bg-green-950'>
            <img src={skill.img} alt="" />
            <p className='text-center text-sm mt-2'>{skill.title}</p>
          </div>
        ))}
      </Marquee>
      <Marquee direction='right' speed={30}>
        {secondRow.map((skill, index) => (
          <div key={index} className='flex flex-col items-center justify-center mx-4 w-35 mt-8 shadow-xl hover:animate-pulse hover:cursor-pointer bg p-8 rounded-2xl bg-green-950'>
            <img src={skill.img} alt="" />
            <p className='text-center text-sm mt-2'>{skill.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
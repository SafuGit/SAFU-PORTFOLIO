import React from 'react';
import { FaAngular, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const AboutMe = () => {
  return (
    <div className='w-[95vw] mx-auto mt-50 rounded-2xl' id='aboutMe' style={{
      backgroundImage: 'url("/assets/treebg-2.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='flex justify-between'>
        <div className='flex flex-col p-10 h-screen text-white'>
          <h1 className='text-6xl font-semibold'>About Me</h1>
          <div className='bg-green-950 rounded-2xl w-[50%] mt-4 bg p-4'>
            <p className='font-medium text-green-100'>
              I am a self-motivated individual who began coding during the pandemic in 2020, Initially, it was just a hobby but later on it became a love for problem-solving. Throughout the years, I have worked on many projects. I’m always ready to learn more, work with other people, and tackle new obstacles that help me improve as a developer. At the moment, I am looking for places where I can use the knowledge I have, learn more about the industry, and to create useful products.
            </p>
          </div>
          <h1 className='text-2xl font-semibold mt-8'>Why i love Coding</h1>
          <div className='bg-green-950 rounded-2xl w-[60%] mt-4 bg p-4'> 
            <p>I have always been Interested in how things like The Computer, Mobile Phone & TV Worked. From a young age i Thought "How do these things function?", "Where am i getting this from?". I watched youtube videos and other resources and learnt some fundamentals. I find coding as a way to release my creativity, To bring my ideas to life & make useful products for people.</p>
          </div>
        </div>
        <div>
          <VerticalTimeline layout='1-column-right'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 213, 0)', color: 'black' }}
              contentArrowStyle={{ borderRight: 'rgb(255, 213, 0)' }}
              date="2023"
              iconStyle={{ background: 'rgb(255, 213, 0)', color: 'black' }}
              icon={<FaPython />}
            >
              Python
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 102, 102)', color: 'black' }}
              contentArrowStyle={{ borderRight: 'rgb(255, 102, 102)' }}
              date="2024"
              iconStyle={{ background: 'rgb(255, 102, 102)', color: 'black' }}
              icon={<FaAngular />}
            >
              Angular
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(2, 86, 155)', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(2, 86, 155)' }}
              date="2024"
              iconStyle={{ background: 'rgb(2, 86, 155)', color: 'white' }}
              icon={<FaFlutter />}
            >
              Flutter
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(97, 218, 251)', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(97, 218, 251)' }}
              date="2025"
              iconStyle={{ background: 'rgb(97, 218, 251)', color: 'black' }}
              icon={<FaReact />}
            >
              React
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
import React, { useEffect } from 'react';
import { FaAngular, FaHtml5, FaPython, FaReact } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useMediaQuery } from 'usehooks-ts';

const AboutMe = () => {
  const media = useMediaQuery('(min-width: 640px)');
  // const maxMedia = useMediaQuery('(max-width: 362px)')
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#aboutMe');
    }
  }, [inView])

  return (
    <div className='w-[95vw] mx-auto mt-30 mb-40 rounded-2xl' id='aboutMe' ref={ref} style={{
      backgroundImage: 'url("/assets/treebg-2.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='flex sm:flex-row flex-col-reverse justify-between'>
        <div className='flex flex-col p-10 h-fit text-white'>
          <h1 className='text-6xl font-semibold'>About Me</h1>
          <div className='bg-green-950 rounded-2xl lg:w-[50%] w-full mt-4 bg p-4'>
            <p className='font-medium text-green-100'>
              I am a self-motivated individual who has been coding for 3+ Years, Initially, it was just a hobby but later on it became a love for problem-solving. Throughout the years, I have worked on many projects. {media ? 'I’m always ready to learn more, work with other people, and tackle new obstacles that help me improve as a developer. At the moment, I am looking for places where I can use the knowledge I have, learn more about the industry, and to create useful products.' : ''}
            </p>
          </div>
          <h1 className='text-2xl font-semibold mt-8 max-[362px]:hidden'>Why i love Coding</h1>
          <div className='bg-green-950 rounded-2xl lg:w-[60%] w-full mt-4 bg p-4 max-[362px]:hidden'> 
            <p>I have always been Interested in how things like The Computer, Mobile Phone & TV Worked. From a young age i Thought "How do these things function?", "Where am i getting this from?".{ media ? "I watched youtube videos and other resources and learnt some fundamentals. I find coding as a way to release my creativity, To bring my ideas to life & make useful products for people." : ""}</p>
          </div>
        </div>
        <div className='hidden sm:block'>
          <VerticalTimeline layout='1-column-right'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 213, 0)', color: 'black' }}
              contentArrowStyle={{ borderRight: 'rgb(255, 213, 0)' }}
              date={media ? "2021" : ""}
              iconStyle={{ background: 'rgb(255, 213, 0)', color: 'black' }}
              icon={<FaPython />}
            >
              Python
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(255, 102, 102)', color: 'black' }}
              contentArrowStyle={{ borderRight: 'rgb(255, 102, 102)' }}
              date={media ? "2024" : ""}
              iconStyle={{ background: 'rgb(255, 102, 102)', color: 'black' }}
              icon={<FaAngular />}
            >
              Angular
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(2, 86, 155)', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(2, 86, 155)' }}
              date={media ? "2024" : ""}
              iconStyle={{ background: 'rgb(2, 86, 155)', color: 'white' }}
              icon={<FaFlutter />}
            >
              Flutter
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(97, 218, 251)', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(97, 218, 251)' }}
              date={media ? "2025" : ""}
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
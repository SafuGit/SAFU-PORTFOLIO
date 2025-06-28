import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Hobbies = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, '', '#hobbies');
    }
  }, [inView])

  const words = [
    "echo 'Use Linux. Dont waste your computers power.' ",
    "echo 'Use Neovim. Make your own IDE.' ",
    "sudo pacman -Syu",
    "git clone https://github.com/SafuGit/safuvim-v2.git",
    "echo 'Contribute to Open Source.' ",
    "choco install neovim",
    "echo 'Code is Poetry.' ",
  ]

  return (
    <div className='w-[95vw] mx-auto mt-40 mb-40' ref={ref} id='hobbies'>
      <h1 className='text-5xl mb-8 font-semibold'>My Hobbies</h1>
      <div className="mockup-code w-full">
        <pre data-prefix="$"><code><Typewriter words={words} loop={true}></Typewriter></code></pre>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8'>
        <div className=''>
          <div>
            <img src="https://linuxiac.b-cdn.net/wp-content/uploads/2020/06/archlinux.jpg" alt="" className='rounded-t-2xl h-60 w-full'/>
          </div>
          <div className='arch-bg p-4 rounded-b-2xl'>
            <h1 className='text-3xl font-medium'>Linux</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p className='text-gray-300'>I always dreamed of having a PC that gave me complete freedom to customize everything and contribute to open source. So choosing Linux was an easy decision.</p>
            <a href='https://github.com/safugit/dotfiles' className='mt-8 btn bg-blue-700'>Dotfiles <FaGithub className='text-xl'></FaGithub></a>
          </div>
        </div>
        <div>
          <div>
            <img src="https://mattermost.com/wp-content/uploads/2022/02/02_Neovim@2x.webp" alt="" className='h-60 w-full rounded-t-2xl' />
          </div>
          <div className='nvim-bg p-4 rounded-b-2xl'>
            <h1 className='text-3xl font-medium'>Neovim</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p>I always thought about the concept of making my own IDE. It was not an easy task but the closest thing i could find was Neovim, Which i got introduced to after installing Linux.</p>
            <a href='https://github.com/safugit/safuvim-v2' className='mt-8 btn bg-green-700'>Config <FaGithub className='text-xl'></FaGithub></a>
          </div>
        </div>
        <div>
          <div>
            <img src="https://wallpapers.com/images/featured/coding-background-9izlympnd0ovmpli.jpg" alt="" className='rounded-t-2xl h-60 w-full' />
          </div>
          <div className='dev-bg p-4 rounded-b-2xl bg'>
            <h1 className='text-3xl font-medium'>Development</h1>
            <div className='divider divider-vertical mt-0 mb-1'></div>
            <p>I love Problem Solving & Especially project/app/website making. I like to interact with both the Backend & Frontend of the app To get the deepest understanding possible.</p>
            <a href='https://github.com/safugit/safuvim-v2' className='mt-8 btn bg-red-700'>Github <FaGithub className='text-xl'></FaGithub></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
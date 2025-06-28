import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const SkillDetails = () => {
  return (
    <div>
      <div className='pt-3! mb-10! sticky z-50 top-0'>
        <Navbar></Navbar>
      </div>
      <div className='w-[95vw] mx-auto text-center mb-8 font-semibold'>
        <h1 className='text-5xl'>All Skills</h1>
      </div>
      <div className='grid grid-cols-3 gap-8 w-[95vw] mx-auto'>
        <div
          className="hover:animate-pop hover:cursor-pointer p-8 rounded-2xl border border-blue-500 bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-blue-700/30 backdrop-blur-sm shadow-lg"
        >
          <h1 className="text-white font-semibold text-3xl">Frameworks</h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img src="https://skillicons.dev/icons?i=angular,django,fastapi,expressjs,flask,flutter,react,spring,tailwindcss,vite,bootstrap&theme=dark&perline=7" alt="" />
        </div>
        <div
          className="hover:animate-pop hover:cursor-pointer p-8 rounded-2xl border border-green-500 bg-gradient-to-br from-green-900/60 via-green-50-800/40 to-green-700/30 backdrop-blur-sm shadow-lg"
        >
          <h1 className="text-white font-semibold text-3xl">Languages</h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img src="https://skillicons.dev/icons?i=css,dart,html,markdown,java,javascript,nodejs,python,typescript&theme=dark&perline=7" alt="" />
        </div>
        <div
          className="hover:animate-pop hover:cursor-pointer p-8 rounded-2xl border border-red-500 bg-gradient-to-br from-red-900/60 via-red-50-800/40 to-red-700/30 backdrop-blur-sm shadow-lg"
        >
          <h1 className="text-white font-semibold text-3xl">Databases</h1>
          <div className="divider divider-vertical mt-0 mb-1"></div>
          <img src="https://skillicons.dev/icons?i=firebase,mongodb,mysql,postgresql,supabase&theme=dark&perline=7" alt="" />
        </div>
      </div>
      <div className='hover:animate-pop hover:cursor-pointer w-[95vw] mx-auto mt-8 p-8 rounded-2xl border border-yellow-500 bg-gradient-to-br from-yellow-900/60 via-yellow-800/40 to-yellow-700/30 backdrop-blur-sm shadow-lg'>
        <h1 className="text-white font-semibold text-3xl">Tools And Others</h1>
        <div className="divider divider-vertical mt-0 mb-1"></div>
        <img src="https://skillicons.dev/icons?i=androidstudio,arch,devto,docker,figma,firebase,git,github,githubactions,idea,kali,linux,linkedin,neovim,netlify,nix,pycharm&theme=dark&perline=17" alt="" />
      </div>
    </div>
  );
};

export default SkillDetails;
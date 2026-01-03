import React, { useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { BsDiscord, BsEye, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { LiaLinkedin } from "react-icons/lia";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      window.history.replaceState(null, "", "#home");
    }
  }, [inView]);

  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Flutter Developer",
    "Django Developer",
    "React Developer",
    "Python Developer",
    "Web Developer",
    "OSS Contributor",
    "SpringBoot Developer"
  ];

  return (
    <div className="w-full mx-auto" id="home" ref={ref}>
      {/* Main Content Section */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col min-[1314px]:flex-row items-start justify-center gap-8 min-[1314px]:gap-12 min-h-[90vh] py-16">
        {/* Left Card - Contact Info */}
        <div className="w-full min-[1314px]:w-[380px] shrink-0">
          <div className="relative h-full bg-black/40 backdrop-blur-md border-2 border-yellow-400/70 rounded-xl overflow-hidden shadow-[inset_0_0_60px_rgba(250,204,21,0.1),0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[inset_0_0_60px_rgba(250,204,21,0.15),0_0_60px_rgba(250,204,21,0.6)] transition-all duration-500 flex flex-col">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: `repeating-linear-gradient(45deg, rgba(255, 215, 0, 0.03), rgba(255, 215, 0, 0.03) 10px, transparent 10px, transparent 20px)`
            }}></div>

            {/* Profile Section */}
            <div className="relative p-8 flex flex-col items-center border-b border-yellow-400/30 bg-gradient-to-b from-yellow-400/10 to-transparent">
              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-yellow-400/50 rounded-full blur animate-pulse"></div>
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] z-10">
                  <img
                    src="/assets/portfolio_pic.jpg"
                    alt="Safwan Sadid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 z-20 bg-black text-yellow-400 text-[10px] font-bold px-2 py-0.5 border border-yellow-400 uppercase tracking-wider">
                  Available
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide mb-1">Safwan Sadid</h2>
              <p className="text-yellow-400/80 font-mono text-sm tracking-widest uppercase">&lt;FullStack /&gt;</p>
            </div>

            {/* Contact Info */}
            <div className="p-6 space-y-5 flex-grow">
              <div className="flex items-center gap-4 group/item cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-yellow-400 border border-white/10 group-hover/item:border-yellow-400 group-hover/item:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Primary Email</span>
                  <a href="mailto:safwansadid.ah@gmail.com" className="text-sm text-gray-300 group-hover/item:text-yellow-400 transition-colors break-all">
                    safwansadid.ah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-yellow-400 border border-white/10 group-hover/item:border-yellow-400 group-hover/item:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Secondary Email</span>
                  <a href="mailto:safwan55.ah@gmail.com" className="text-sm text-gray-300 group-hover/item:text-yellow-400 transition-colors break-all">
                    safwan55.ah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-yellow-400 border border-white/10 group-hover/item:border-yellow-400 group-hover/item:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Phone</span>
                  <a href="tel:+8801981575920" className="text-sm text-gray-300 group-hover/item:text-yellow-400 transition-colors">
                    +880 1981 5759 20
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group/item cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-yellow-400 border border-white/10 group-hover/item:border-yellow-400 group-hover/item:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Location</span>
                  <span className="text-sm text-gray-300 group-hover/item:text-yellow-400 transition-colors">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="p-6 pt-0 mt-auto">
              <a
                download={true}
                href="/assets/Safwan_Web_Resume.pdf"
                className="relative w-full flex items-center justify-center gap-3 py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest transition-all hover:bg-white hover:scale-[1.02] shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <BiDownload className="text-xl relative z-10" />
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Main Content */}
        <div className="flex-1 flex flex-col relative py-8 min-[1314px]:py-0">
          {/* Decorative Elements - Positioned outside the content area */}
          <div className="absolute -top-0 -right-2 w-32 h-32 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-3xl hidden min-[1314px]:block pointer-events-none"></div>
          <div className="absolute -bottom-0 -left-2 w-24 h-24 border-b-2 border-l-2 border-yellow-400/30 rounded-bl-3xl hidden min-[1314px]:block pointer-events-none"></div>
          <div className="absolute top-1/3 -left-8 w-[1px] h-40 bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent hidden min-[1314px]:block pointer-events-none"></div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center h-full min-[1314px]:pt-20 relative z-10">
            {/* Section Label */}
            <div className="w-full min-[1314px]:max-w-2xl flex items-center gap-4 mb-8 opacity-80">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-yellow-400"></div>
              <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase">Introduction</span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,1)]"></span>
            </div>

            {/* Content Card */}
            <div className="relative w-full min-[1314px]:max-w-2xl bg-[#0f0f0f]/80 backdrop-blur-sm border-r-2 border-yellow-400 p-8 lg:p-12 shadow-[inset_0_0_10px_rgba(255,215,0,0.1),0_0_20px_rgba(255,215,0,0.15)]" style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)'
            }}>
              <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-white/10"></div>
              
              {/* Headline */}
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Passionate <span className="text-yellow-400 inline-block transform skew-x-12 border-b-2 border-yellow-400 px-2 mx-1 bg-yellow-400/10">
                  <Typewriter
                    words={roles}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
                <br />
                based in Dhaka.
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-lg mb-8 text-justify border-l-2 border-white/10 pl-6">
                I build accessible, pixel-perfect, performant, and beautiful web experiences. I am a tech enthusiast who loves to explore new technologies and solve real-world problems through code. My approach blends technical precision with artistic flair.
              </p>

              {/* CTA and Code Snippet */}
              <div className="flex flex-wrap items-center gap-6">
                <a 
                  href="#projects"
                  className="group flex items-center gap-3 text-white font-bold tracking-wide hover:text-yellow-400 transition-colors"
                >
                  <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shadow-lg">
                    <BsEye className="text-xl" />
                  </span>
                  <span className="border-b border-transparent group-hover:border-yellow-400 pb-0.5 transition-all">View Projects</span>
                </a>

                <div className="hidden sm:block ml-auto font-mono text-xs text-gray-600 bg-black/40 p-2 border border-white/5">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">stack</span> = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>];
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-12 text-gray-500 font-mono text-xs uppercase tracking-widest w-full min-[1314px]:max-w-2xl justify-end">
              <div className="flex flex-col items-end">
                <span className="text-white text-lg font-sans font-bold">3+</span>
                <span>Years Exp</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white text-lg font-sans font-bold">10+</span>
                <span>Projects</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-white text-lg font-sans font-bold">100%</span>
                <span>Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

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

  const words = [
    "Software Engineer",
    "Full-Stack Developer",
    "Mern Stack Developer",
    "Flutter Developer",
    "Django Developer",
    "React Developer",
    "Python Developer",
    "Angular Developer",
    "Web Developer",
    "Open Source Contributor",
    "Linux Enthusiast",
    "Flask Developer",
    "Spring Developer",
    "Java Developer",
  ];

  return (
    <div className="w-[95vw] mx-auto!" id="home" ref={ref}>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:items-start gap-6 min-h-[90vh] py-8">
        {/* Left Yellow Card - Clean Neon Style */}
        <div className="relative bg-black/40 backdrop-blur-md p-10 lg:w-[320px] w-[90%] lg:h-[700px] flex flex-col items-center justify-between border-2 border-yellow-400/70 shadow-[inset_0_0_60px_rgba(250,204,21,0.1),0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[inset_0_0_60px_rgba(250,204,21,0.15),0_0_60px_rgba(250,204,21,0.6)] transition-all duration-500">
          {/* Profile Section */}
          <div className="flex flex-col items-center w-full">
            {/* Profile Picture with Neon Ring */}
            <div className="relative mb-6">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)]">
                <img
                  src="/assets/portfolio_pic.jpg"
                  alt="Safwan Sadid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name with Glow */}
            <h2 className="text-3xl font-light text-yellow-400 mb-10 tracking-wider drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">
              Safwan Sadid
            </h2>

            {/* Contact Info */}
            <div className="w-full space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex-shrink-0">
                  <HiOutlineMail className="text-yellow-400 text-xl" />
                </div>
                <a href="mailto:safwansadid.ah@gmail.com" className="text-sm font-light text-white/90 break-all">
                  safwansadid.ah@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex-shrink-0">
                  <HiOutlineMail className="text-yellow-400 text-xl" />
                </div>
                <a href="mailto:safwan55.ah@gmail.com" className="text-sm font-light text-white/90 break-all">
                  safwan55.ah@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex-shrink-0">
                  <HiOutlinePhone className="text-yellow-400 text-xl" />
                </div>
                <a href="tel:+8801981575920" className="text-sm font-light text-white/90">
                  +880 1981 5759 20
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex-shrink-0">
                  <HiOutlineLocationMarker className="text-yellow-400 text-xl" />
                </div>
                <span className="text-sm font-light text-white/90">
                  Dhaka, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center border border-yellow-400/50 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex-shrink-0">
                  <BsGithub className="text-yellow-400 text-xl" />
                </div>
                <a
                  href="https://github.com/SafuGit"
                  className="text-sm font-light text-white/90 hover:text-yellow-400 transition-colors break-all"
                >
                  github.com/SafuGit
                </a>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <a
            download={true}
            href="/assets/Safwan_Web_Resume.pdf"
            className="w-full bg-yellow-400/20 backdrop-blur-sm text-yellow-400 flex gap-3 items-center p-4 justify-center font-light tracking-wide hover:bg-yellow-400/30 transition-all duration-300 border-2 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.8)] group"
          >
            Download CV
            <BiDownload className="text-2xl group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col flex-1 bg p-6! rounded-2xl lg:w-[60%] w-[90%]">
          <div>
            <h1 className="text-5xl font-medium">Hello, I am Safwan Sadid.</h1>
            <p className="text-xl text-gray-300 mb-2!">
              A young{" "}
              <strong>
                {" "}
                <Typewriter words={words} loop={true}></Typewriter>.{" "}
              </strong>
            </p>
            <p className="text-sm font-light text-gray-400">
              I am a self-motivated individual who has been coding for 3+ years,
              Initially, it was just a hobby but later on it became a love for
              problem-solving. In these years, I have worked on many projects.
            </p>
          </div>
          <div className="mb-8"></div>
          <div className="flex flex-col">
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/SafuGit"
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                <BsGithub></BsGithub>
              </a>
              <a
                href="http://discord.com/users/871313769723228160"
                className="text-2xl hover:text-yellow-400 transition-colors"
              >
                <BsDiscord></BsDiscord>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

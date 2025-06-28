import Menu from "daisyui/components/menu";
import React, { useEffect, useState } from "react";
import { BiHome, BiLike } from "react-icons/bi";
import { CgCode, CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const media = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    }

    const interval = setInterval(onHashChange, 200);
    return () => clearInterval(interval);
  });

  const handleButtonPress = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scale-y-0');
    navbar.classList.toggle('scale-y-100');
    // navbar.classList.toggle('hidden');
  }

  useEffect(() => {
    if (media) {
      const navbar = document.querySelector('.navbar');
      navbar.classList.remove('scale-y-0');
      navbar.classList.add('scale-y-100');
    }
  },)

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center justify-start ml-10 sm:ml-0">
      <button className="text-3xl btn btn-circle bg sm:hidden flex items-center" onClick={handleButtonPress}><MdMenu></MdMenu></button>
      <div className="sm:flex sm:flex-row grid min-[463px]:grid-cols-3 grid-cols-2 bg sm:rounded-full rounded-xl justify-center gap-4 navbar w-fit p-2 text-white border border-y-gray-950 transform scale-y-0 transition-transform duration-500 ease-in-out absolute top-15 sm:static">
        <div className={"rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer" + (activeHash == "#home" ? " bg-green-950" : "")}>
          <BiHome className="text-xl"></BiHome>
          <a href="#home">Home</a>
        </div>
        <div className={"rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer" + (activeHash == "#aboutMe" ? " bg-green-950" : "")}>
          <CgProfile className="text-xl"></CgProfile>
          <a href="#aboutMe">About Me</a>
        </div>
        <div className={"rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer" + (activeHash == "#skills" ? " bg-green-950" : "")}>
          <CgCode className="text-2xl"></CgCode>
          <a href="#skills">Skills</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <BiLike className="text-xl"></BiLike>
          <a href="">Hobbies</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 items-center hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <PiPhone className="text-xl"></PiPhone>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
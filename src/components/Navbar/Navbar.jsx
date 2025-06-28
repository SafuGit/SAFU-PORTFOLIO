import React, { useEffect, useState } from "react";
import { BiHome, BiLike } from "react-icons/bi";
import { CgCode, CgProfile } from "react-icons/cg";
import { PiPhone } from "react-icons/pi";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    }

    const interval = setInterval(onHashChange, 200);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-center">
      <div className="flex bg rounded-full justify-center gap-4 navbar w-fit p-2 text-white border border-y-gray-950">
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
          <a href="">Skills</a>
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
import React from "react";
import { BiHome, BiLike } from "react-icons/bi";
import { CgCode, CgProfile } from "react-icons/cg";
import { PiPhone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex bg rounded-full justify-center gap-4 navbar w-fit p-2! text-white border border-y-gray-950">
        <div className="rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <BiHome className="text-xl"></BiHome>
          <a href="">Home</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <CgProfile className="text-xl"></CgProfile>
          <a href="">About Me</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <CgCode className="text-2xl"></CgCode>
          <a href="">Skills</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 hover:bg-green-950 transition-colors duration-300 ease-in-out hover:cursor-pointer">
          <BiLike className="text-xl"></BiLike>
          <a href="">Hobbies</a>
        </div>
        <div className="rounded-full p-2! flex gap-1 items-center hover:bg-green-950 transition-colors duration-300 ease-in-out">
          <PiPhone className="text-xl"></PiPhone>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { BiHome, BiLike } from "react-icons/bi";
import { CgCode, CgProfile } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { MdMenu, MdClose } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { useLocation } from "react-router";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };

    const interval = setInterval(onHashChange, 100);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (location.pathname === "/skillDetails") {
      setActiveHash("#skills");
    }
  }, [location]);

  const navItems = [
    { hash: "#home", icon: BiHome, label: "Home" },
    { hash: "#aboutMe", icon: CgProfile, label: "Profile" },
    { hash: "#skills", icon: CgCode, label: "Skills" },
    { hash: "#hobbies", icon: BiLike, label: "Hobbies" },
    { hash: "#projects", icon: GoProject, label: "Projects" },
    { hash: "#contact", icon: PiPhone, label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border-2 border-yellow-400/70 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
      </button>

      {/* Side Navbar */}
      <nav
        className={`fixed left-0 top-0 h-screen z-40 flex flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-md border-r-2 border-yellow-400/70 shadow-[0_0_40px_rgba(250,204,21,0.4)] transition-all duration-500 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        {/* Navigation Items */}
        <div className="flex flex-col gap-4 w-full px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeHash === item.hash ||
              (item.hash === "#skills" && location.pathname === "/skillDetails");

            return (
              <a
                key={item.hash}
                href={`/${item.hash}`}
                onClick={() => setIsOpen(false)}
                className={`group relative flex items-center gap-4 p-3 transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.6)]"
                    : "text-yellow-400 hover:bg-yellow-400/10"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 flex items-center justify-center transition-all ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                >
                  <Icon className="text-2xl" />
                </div>

                {/* Label */}
                <span
                  className={`font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 lg:opacity-0"
                  }`}
                >
                  {item.label}
                </span>

                {/* Tooltip for collapsed state on desktop */}
                <span className="absolute left-full ml-4 px-3 py-2 bg-yellow-400 text-black text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] hidden lg:block">
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
                )}
              </a>
            );
          })}
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
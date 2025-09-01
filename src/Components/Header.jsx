import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono font-bold tracking-wide">
          PORTFOLIO.EXE
        </h1>

        <button
          className="flex flex-col gap-0.5 sm:gap-1 p-2 sm:p-2.5 md:p-3 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <nav className="hidden sm:flex gap-6 text-lg">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveLink(href)}
              className={`font-mono px-1 border-b-2 ${
                activeLink === href
                  ? "border-green-500"
                  : "border-transparent hover:border-green-500"
              }`}
            >
              {label}        
            </a>
          ))}
        </nav>

        {isOpen && (
          <nav
            className="sm:hidden absolute top-full left-0 right-0
              bg-white/70 backdrop-blur-md border-t border-gray-200 shadow-lg
              px-4 py-3 flex flex-col gap-4"
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveLink(href);
                  setIsOpen(false);
                }}
                className={`font-mono inline-block w-fit px-1 border-b-2 ${
                  activeLink === href
                    ? "border-green-500"
                    : "border-transparent hover:border-green-500"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white px-6 py-12 overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "black",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="font-mono font-bold text-lg mb-2">PORTFOLIO.EXE</h2>
          <p className="text-sm text-gray-400">
            Full-stack developer passionate about creating digital experiences
            that bridge creativity and functionality.
          </p>
        </div>

        <div>
          <h3 className="font-mono font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-sm hover:text-green-400">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:text-green-400">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#experience" className="text-sm hover:text-green-400">
                EXPERIENCE
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm hover:text-green-400">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-green-400">
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-semibold mb-3">CONNECT</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-3">
            <a
              href="https://github.com/manishSshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 hover:bg-gray-800"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-shetty-50b19636a"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 hover:bg-gray-800"
            >
              <Linkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=manishshetty827@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 hover:bg-gray-800"
            >
              <Mail />
            </a>
          </div>
          <p className="text-xs text-gray-400">manishshetty827@gmail.com</p>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2025 PORTFOLIO.EXE – Built with React.js + Tailwind CSS</p>

        <a
          href="#home"
          className="border-2 border-gray-500 p-2 rounded-md hover:bg-gray-800 transition cursor-pointer flex items-center justify-center w-10 h-10 animate-bounce"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

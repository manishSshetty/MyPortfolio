import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import TypeWriterText from "../Components/TypeWriterText";
import resume from "../assets/resume.pdf"

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.50) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.50) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <main className="relative z-10 text-center px-6 pt-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold mb-4 tracking-wider">
          <TypeWriterText text="PORTFOLIO.EXE" delay={150} />
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-8 tracking-widest">
          &gt; FULL STACK DEVELOPER
        </p>

        <div className="max-w-2xl mx-auto mb-12 text-gray-700">
          <p className="text-lg leading-relaxed">
            Hi, my name is{" "}
            <span className="bg-black text-white px-2 py-1 font-mono">
              Manish Shetty
            </span>
            . A true tech enthusiast, I strive to bring innovative ideas to
            life, crafting seamless digital experiences that not only meet but
            exceed expectations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="bg-black text-white px-8 py-3 font-mono hover:bg-gray-800 cursor-pointer"
          >
            VIEW PROJECTS
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 px-8 py-3 font-mono hover:bg-gray-50 cursor-pointer"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://github.com/manishSshetty"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 p-3 hover:bg-gray-50 cursor-pointer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-shetty-50b19636a"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 p-3 hover:bg-gray-50 cursor-pointer"
          >
            <Linkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manishshetty827@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 p-3 hover:bg-gray-50 cursor-pointer"
          >
            <Mail />
          </a>
        </div>
      </main>

      <footer className="relative z-10 text-center pb-8">
        <h3 className="text-4xl font-mono text-gray-300 tracking-widest">
          Manish Shetty
        </h3>
      </footer>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#about"
          className="border-2 border-gray-400 p-3 hover:bg-gray-50 rounded-full animate-bounce cursor-pointer flex"
        >
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};

export default Home;

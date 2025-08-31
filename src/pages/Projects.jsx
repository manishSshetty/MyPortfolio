import React from "react";
import pingzy from "../assets/pingzy.png";
import shifra from "../assets/shifra.png";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="px-4 md:px-6 pt-24 md:pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            PROJECTS.DIR
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            A collection of projects showcasing different aspects of modern web
            development, from user interfaces to backend architecture.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-8">
          <div className="bg-white border border-gray-300 mb-8 overflow-hidden max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto shadow-[4px_4px_0px_#d1d5db]">
            <div className="relative">
              <img
                src={pingzy}
                alt="Chat App Website"
                className="w-full h-auto object-contain max-h-60 sm:max-h-72 md:max-h-[28rem]"
              />

              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-mono">
                LIVE
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 relative">
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-bold mb-3 sm:mb-4">
                CHAT-APP.EXE
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                A real-time chat application that allows users to send and
                receive messages instantly.
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  React
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Node.js
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  MongoDB
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Express
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Socket.io
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex justify-center gap-3 mt-4">
                <button className="w-4/5 bg-black text-white px-5 py-2 font-mono text-sm sm:text-base hover:bg-gray-800 transition-colors rounded-md cursor-pointer flex items-center justify-center gap-2">
                  <Github /> CODE
                </button>
                <button className="w-4/5 border border-gray-400 px-5 py-2 font-mono text-sm sm:text-base hover:bg-gray-50 transition-colors rounded-md cursor-pointer flex items-center justify-center gap-2">
                  <ExternalLink /> DEMO
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 mb-8 overflow-hidden max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto shadow-[4px_4px_0px_#d1d5db]">
            <div className="relative">
              <img
                src={shifra}
                alt="Chat App Website"
                className="w-full h-auto object-contain max-h-60 sm:max-h-72 md:max-h-[28rem]"
              />

              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-mono">
                LIVE
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 relative">
              <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-bold mb-3 sm:mb-4">
                VIRTUAL-ASSISTANT.EXE
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                An AI-powered virtual assistant that engages in intelligent
                conversations and helps users with tasks in real time
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  React
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Gemini API
                </span>
                <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex justify-center gap-3 mt-4">
                <button className="w-4/5 bg-black text-white px-5 py-2 font-mono text-sm sm:text-base hover:bg-gray-800 transition-colors rounded-md cursor-pointer flex items-center justify-center gap-2">
                  <Github /> CODE
                </button>
                <button className="w-4/5 border border-gray-400 px-5 py-2 font-mono text-sm sm:text-base hover:bg-gray-50 transition-colors rounded-md cursor-pointer flex items-center justify-center gap-2">
                  <ExternalLink /> DEMO
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;

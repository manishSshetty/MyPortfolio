import React from "react";
import Header from "../Components/Header";
import { Code, Database, Globe } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-white relative">
        <main className="relative z-10 px-4 md:px-6 pt-24 md:pt-32 pb-16">
         
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
              ABOUT.TXT
            </h1>
            <div className="w-16 h-1 bg-green-500 mx-auto"></div>
          </div>

          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              I enjoy solving problems through code and building things that work
              well on the web. Currently learning modern development practices
              and exploring new technologies through hands-on projects.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-gray-300 p-8 relative hover:bg-gray-50 cursor-pointer">
      
              <div className="absolute top-0 right-0 w-6 h-full bg-black"></div>

              <div className="text-center">
                <div className="text-4xl flex flex-col items-center justify-center mb-4">
                  <Code size={40} />
                </div>

                <h2 className="text-2xl font-mono font-bold mb-4">FRONTEND</h2>

                <p className="text-gray-600 mb-6">
                  HTML, CSS, React, Tailwind CSS, Git
                </p>

                <p className="text-sm text-gray-500">
                  Building responsive and interactive user interfaces
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-[30px] ">
            <div className="bg-white border-2 border-gray-300 p-8 relative hover:bg-gray-50 cursor-pointer">
              
              <div className="absolute top-0 right-0 w-6 h-full bg-black"></div>

              <div className="text-center flex flex-col items-center justify-center ">
               
                <div className="text-4xl mb-4">
                  <Database size={40} />
                </div>

                <h2 className="text-2xl font-mono font-bold mb-4">BACKEND</h2>

                <p className="text-gray-600 mb-6">Node.js, Express, MongoDB</p>

                <p className="text-sm text-gray-500">
                  Scalable server-side applications and APIs
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-[30px]">
            <div className="bg-white border-2 border-gray-300 p-8 relative hover:bg-gray-50 cursor-pointer">
            
              <div className="absolute top-0 right-0 w-6 h-full bg-black"></div>

              <div className="text-center flex flex-col items-center justify-center">
                
                <div className="text-4xl mb-4">
                  <Globe size={40} />
                </div>

                <h2 className="text-2xl font-mono font-bold mb-4">
                  DEPLOYMENT
                </h2>

                <p className="text-gray-600 mb-6">Netlify, Github, Render</p>

                <p className="text-sm text-gray-500">
                  Automated deployment and cloud infrastructure
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;

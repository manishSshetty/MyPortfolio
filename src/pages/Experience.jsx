import { Calendar, Eye } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="px-4 md:px-6 pt-16 md:pt-20 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-4">
            EXPERIENCE.LOG
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            My experience in web development, including hands-on learning
            through internship and personal projects.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white hover:bg-gray-50 border border-gray-300 p-8 w-full shadow-[6px_6px_0px_#000000]">
            <h3 className="text-2xl font-mono font-bold mb-2">
              Software Engineer Intern
            </h3>

            <a
              href="https://codelabsystems.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 mb-2 gap-1 transition-colors duration-200 hover:text-green-800 hover:underline"
            >
              <Eye className="w-5 h-5" />
              CodeLab Systems
            </a>

            <div className="flex items-center text-gray-500 mb-4 gap-1">
              <Calendar className="w-5 h-5"/>
              Dec 2024
            </div>

            <p className="text-gray-700 mb-6">
              Worked as a Software Engineer Intern at CodeLab Systems, where I
              developed and maintained web applications using React.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                HTML
              </span>
              <span
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm 
              rounded"
              >
                CSS
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                Material UI
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;

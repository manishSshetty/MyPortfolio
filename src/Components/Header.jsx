import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5">
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono font-bold tracking-wide">
          PORTFOLIO.EXE
        </h1>
        <button className="flex flex-col gap-0.5 sm:gap-1 p-2 sm:p-2.5 md:p-3">
         <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import KoinLogo from "../assets/KoinXLogo.png"; // Import the logo

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={KoinLogo} alt="Koin Logo" className="w-14 h-4" /> 
        </div>

        <div className="flex-grow"></div> {/* Add this to push navigation to the right */}

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 mr-6"> 
          <a
            href="#"
            className="text-black  font-bold hover:text-blue-400 transition duration-200"
          >
            Crypto Taxes
          </a>
          <a
            href="#"
            className="text-black font-bold hover:text-blue-400 transition duration-200"
          >
            Free Tools
          </a>
          <a
            href="#"
            className="text-black  font-bold hover:text-blue-400 transition duration-200"
          >
            Resource Center
          </a>
        </nav>

        {/* Get Started Button */}
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-200">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-slate-50">
      <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Victor Muthomi
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-indigo-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#socials" className="hover:text-indigo-300">
              Socials
            </a>
          </li>
        </ul>
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-slate-50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 px-4 py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#about" className="hover:text-indigo-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#socials" className="hover:text-indigo-300">
                Socials
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

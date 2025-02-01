import { useState } from "react";
import { GiScorpion } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-slate-50">
      <nav className="w-full h-[80px] ">
        <div className="flex md:justify-start justify-start items-center md:ml-32 ml-4 md:mb-0 mb-4 space-x-0">
          <a
            href="#"
            className="md:text-5xl text-4xl text-cyan-300 pt-6 cursor-pointer font-bold"
          >
            V
          </a>
          <a href="#">
            <GiScorpion className="md:text-7xl text-4xl pt-4  text-cyan-300" />
          </a>
          <a
            href="#"
            className="md:text-5xl text-4xl text-cyan-300 pt-4 cursor-pointer font-bold"
          >
            M
          </a>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end items-end space-x-4 text-cyan-300 font-semibold  text-2xl underline decoration-cyan-200 mr-4">
          <li>
            <a href="#about" className=" hover:text-indigo-300">
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
          className="block md:hidden ml-6 focus:outline-none"
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
        <div className="md:hidden bg-transparent text-left underline decoration-cyan-200 text-cyan-300 px-4 py-4">
          <ul className="flex flex-row ml-4 space-x-8">
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

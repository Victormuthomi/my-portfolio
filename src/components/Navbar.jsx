import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-slate-50">
        <nav className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Victor Muthomi
          </a>
          <ul className="flex space-x-6">
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
        </nav>
      </header>
    </>
  );
};

export default Navbar;

import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="text-slate-50 dark:text-slate-50 bg-white dark:bg-slate-900 text-center"
        id="hero"
      >
        <h1 className="text-5xl font-bold py-8 mt-4 mb-1">
          Hi, I'm Victor Muthomi
        </h1>
        <p className="text-3xl mb-6">
          A Full-Stack Developer specializing in MERN stack and Python/Django
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm ">
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

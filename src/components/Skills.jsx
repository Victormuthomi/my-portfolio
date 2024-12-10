import React from "react";

const Skills = () => {
  return (
    <>
      {/* <!-- Skills Section --> */}
      <section className="max-w-7xl mx-auto px-6 py-15 mb-10" id="skills">
        <h2 className="text-4xl font-bold text-center text-slate-50 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="text-center bg-sky-500 rounded-lg shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
            <h3 className="font-semibold text-slate-50 text-xl">MERN Stack</h3>
            <p className="text-gray-700 text-slate-100">
              MongoDB, Express, React, Node.js
            </p>
          </div>
          <div className="text-center text-center bg-sky-500 rounded-lg shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
            <h3 className="font-semibold text-slate-50 text-xl">
              Python & Django
            </h3>
            <p className="text-gray-700 text-slate-100">
              Building scalable web applications
            </p>
          </div>
          <div className="text-center text-center bg-sky-500 rounded-lg shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
            <h3 className="font-semibold text-slate-50 text-xl">
              Tailwind CSS
            </h3>
            <p className="text-gray-700 text-slate-100">
              Utility-first CSS framework
            </p>
          </div>
          <div className="text-center text-center bg-sky-500 rounded-lg shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
            <h3 className="font-semibold text-slate-50 text-xl">
              Git & GitHub
            </h3>
            <p className="text-gray-700 text-slate-100">
              Version control and collaboration
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

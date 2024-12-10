import React from "react";

const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <section className="py-20" id="projects">
        <h2 className="text-4xl text-slate-50 font-bold text-center mb-6 ">
          My Projects
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          {/* <!-- Project 1 --> */}
          <div className="bg-teal  border rounded-lg p-6 shadow-lg 5">
            <h3 className="text-xl text-slate-50 font-semibold mb-4">
              Recipe Tracker
            </h3>
            <p className="text-slate-150 mb-4">
              A full-stack recipe tracker application built using React and
              local storage for persistence, allowing users to create, edit, and
              delete recipes while saving their data locally for long-term
              access.
            </p>
            <a
              href="https://recipe-tracker-phi.vercel.app/"
              className="text-indigo-700  hover:underline"
            >
              View Project
            </a>
          </div>
          {/* <!-- Project 2 --> */}
          <div className="bg-teal  border  rounded-lg p-6 shadow-lg ">
            <h3 className="text-xl text-slate-50 font-semibold mb-4">
              Online Voting Website
            </h3>
            <p className="text-slate-150 mb-4">
              An online voting system built using Django, designed to securely
              manage elections by allowing users to register, authenticate, and
              cast votes. It ensures integrity and transparency with robust
              backend logic and database management.
            </p>
            <a
              href="https://github.com/Victormuthomi/voting_website"
              className="text-indigo-700 over:underline"
            >
              View Project
            </a>
          </div>

          <div className="bg-teal  border  rounded-lg p-6 shadow-lg">
            <h3 className="text-xl text-slate-50 font-semibold mb-4">
              Goals Project
            </h3>
            <p className="text-slate-150 mb-4">
              A goals management application built using Node.js and Express,
              enabling users to set, track, update, and delete their goals. It
              features a streamlined API design and ensures efficient data
              handling for seamless goal management.
            </p>
            <a
              href="https://github.com/Victormuthomi/goal_project"
              className="text-indigo-700 hover:underline"
            >
              View Project
            </a>
          </div>

          <div className="bg-teal  border  rounded-lg p-6 shadow-lg ">
            <h3 className="text-xl text-slate-50 font-semibold mb-4">
              Landing page
            </h3>
            <p className="text-slate-150 mb-4">
              A responsive landing page designed with Tailwind CSS, offering a
              modern and visually appealing layout. It features customizable
              sections for showcasing content, call-to-action buttons, and
              smooth responsiveness across all devices.
            </p>
            <a
              href="https://cosmic-ganache-e2d253.netlify.app/"
              className="text-indigo-700 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

import { FaDiagramProject } from "react-icons/fa6";
import me from "../assets/me3.jpg";

const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <div className="flex justify-center items-center">
        <section
          className="md:py-0 py-20 md:h-[650px] h-[1000px] w-[1200px]"
          id="projects"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
            <h2 className=" text-5xl font-bold text-center text-fuchsia-500 mb-6">
              PROJECTS
            </h2>
            <FaDiagramProject className="text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:gap-8 gap-10 px-6">
            {/* <!-- Project 1 --> */}
            <div className="text-center bg- rounded-full border-0 border-fuchsia-300 w-78 h-82"></div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4 border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Git Connect
                </h3>
                <p className="text-slate-100 p-1">
                  GitConnect is a networking platform built with Go, Gin, React,
                  and Tailwind, designed to connect GitHub users, foster
                  collaboration, and simplify project discovery.{" "}
                </p>
                <a
                  href="https://gitconnect-frontend.vercel.app/"
                  className="text-fuchsia-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4 border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Tuvote
                </h3>
                <p className="text-slate-100 p-2">
                  Tuvote is an online voting system built with Go, Gin, React,
                  and Tailwind, designed to securely manage elections while
                  ensuring integrity, transparency, and a seamless voting
                  experience.
                </p>
                <a
                  href=" https://tuvote-frontend.vercel.app/"
                  className="text-fuchsia-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <img
              src={me}
              alt="me"
              className="hidden md:block w-80 h-80 mt-10 rounded-full border-4 border-fuchsia-300"
            />

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4 border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Recipe Tracker
                </h3>
                <p className="text-slate-100 p-2">
                  A recipe tracker application built with React and Tailwind,
                  allowing users to create, edit, and delete recipes while
                  saving their data locally for long-term access
                </p>
                <a
                  href="https://recipe-tracker-phi.vercel.app/"
                  className="text-fuchsia-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4 border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Inventory Management
                </h3>
                <p className="text-slate-100 p-2">
                  GitConnect is a full-stack developer networking platform built
                  with Go, Gin, React, and Tailwind, designed to connect GitHub
                  users, foster collaboration, and simplify project discovery.
                </p>
                <a
                  href=" https://ims-6xgi.vercel.app/"
                  className="text-fuchsia-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={me}
          alt="me"
          className="block md:hidden w-80 h-80 mt-32 rounded-full border-4 border-fuchsia-300"
        />
      </div>
    </>
  );
};

export default Projects;

import { FaDiagramProject } from "react-icons/fa6";
import mine from "../assets/b.jpeg";

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <div className="flex justify-center items-center">
        <section
          className="md:py-0 py-20 md:h-[650px] h-[1000px] w-[1200px]"
          id="projects"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
            <h2 className="text-5xl font-bold text-center text-fuchsia-500 mb-6">
              PROJECTS
            </h2>
            <FaDiagramProject className="text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:gap-8 gap-10 px-6">
            {/* GitConnect */}
            <ProjectCard
              title="Git Connect"
              description="A social platform for developers built with Gin, PostgreSQL, React & Tailwind."
              liveLink="https://gitconnect-frontend.vercel.app/"
              frontendRepo="https://github.com/Victormuthomi/gitconnect-frontend"
              backendRepo="https://github.com/Victormuthomi/gitconnect-backend"
            />

            {/* Tuvote */}
            <ProjectCard
              title="Tuvote"
              description="A secure e-voting system built with NodeJS, Express, MongoDB, React & Tailwind."
              liveLink="https://tuvote-frontend.vercel.app/"
              frontendRepo="https://github.com/Victormuthomi/tuvote-frontend"
              backendRepo="https://github.com/Victormuthomi/tuvote-backend"
            />

            {/* RotaFlow */}
            <ProjectCard
              title="RotaFlow"
              description="A shift scheduling tool built with Node.js, Express, PostgreSQL, React & Tailwind."
              liveLink="https://rotaflow-frontend.vercel.app/"
              frontendRepo="https://github.com/Victormuthomi/rotaflow-frontend"
              backendRepo="https://github.com/Victormuthomi/rotaflow-backend"
            />

            {/* AjiriNow */}
            <ProjectCard
              title="AjiriNow"
              description="A job listing and recruitment platform built with Django REST Framework, React, and PostgreSQL."
              liveLink="https://ajirinow.vercel.app/"
              frontendRepo="https://github.com/Victormuthomi/ajirinow-frontend"
              backendRepo="https://github.com/Victormuthomi/ajirinow-backend"
            />
          </div>

          {/* Centered Profile Image */}
          <div className="flex justify-center items-center mt-12 md:block">
            <img
              src={mine}
              alt="me"
              className="w-80 h-80 rounded-full border-4 border-fuchsia-300"
            />
          </div>
        </section>
      </div>
    </>
  );
};

const ProjectCard = ({ title, description, liveLink, frontendRepo, backendRepo }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center bg-gray-900 rounded-xl border-4 border-fuchsia-300 w-96 h-auto p-6">
        <h3 className="font-semibold text-fuchsia-300 text-xl underline mb-2">{title}</h3>
        <p className="text-slate-100 mb-2">{description}</p>
        <div className="mt-2 space-y-1">
          {liveLink && (
            <a href={liveLink} className="text-fuchsia-500 hover:underline block">
              Live Demo
            </a>
          )}
          {frontendRepo && (
            <a href={frontendRepo} className="text-fuchsia-500 hover:underline block">
              Frontend Repo
            </a>
          )}
          {backendRepo && (
            <a href={backendRepo} className="text-fuchsia-500 hover:underline block">
              Backend Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

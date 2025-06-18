import { FaDiagramProject } from "react-icons/fa6";
import mine from "../assets/b.jpeg";

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
            <h2 className="text-5xl font-bold text-center text-fuchsia-500 mb-6">
              PROJECTS
            </h2>
            <FaDiagramProject className="text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:gap-8 gap-10 px-6">
            {/* Spacer */}
            <div className="text-center w-78 h-82"></div>

            {/* GitConnect */}
            <div className="flex justify-center items-center">
              <div className="text-center bg-gray-900 rounded-full border-4 border-fuchsia-300 w-96 h-90 p-4">
                <h3 className="font-semibold text-fuchsia-300 text-xl underline mb-2">
                  Git Connect
                </h3>
                <p className="text-slate-100">
                  A social platform for developers built with Gin, PostgreSQL,
                  React & Tailwind.
                </p>
                <div className="mt-2 space-y-1">
                  <a
                    href="https://gitconnect-frontend.vercel.app/"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/gitconnect-frontend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Frontend Repo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/gitconnect-backend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Backend Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Tuvote */}
            <div className="flex justify-center items-center">
              <div className="text-center bg-gray-900 rounded-full border-4 border-fuchsia-300 w-96 h-90 p-4">
                <h3 className="font-semibold text-fuchsia-300 text-xl underline mb-2">
                  Tuvote
                </h3>
                <p className="text-slate-100">
                  A secure e-voting system built with NodeJS, Express, MongoDB,
                  React & Tailwind.
                </p>
                <div className="mt-2 space-y-1">
                  <a
                    href="https://tuvote-frontend.vercel.app/"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/tuvote-frontend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Frontend Repo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/tuvote-backend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Backend Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center items-center">
              <img
                src={mine}
                alt="me"
                className="hidden md:block w-80 h-80 mt-10 rounded-full border-4 border-fuchsia-300"
              />
            </div>

            {/* RotaFlow */}
            <div className="flex justify-center items-center">
              <div className="text-center bg-gray-900 rounded-full border-4 border-fuchsia-300 w-96 h-90 p-4">
                <h3 className="font-semibold text-fuchsia-300 text-xl underline mb-2">
                  RotaFlow
                </h3>
                <p className="text-slate-100">
                  A shift scheduling tool built with Node.js, Express,
                  PostgreSQL, React & Tailwind.
                </p>
                <div className="mt-2 space-y-1">
                  <a
                    href="https://rotaflow-frontend.vercel.app/"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/rotaflow-frontend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Frontend Repo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/rotaflow-backend"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Backend Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Razorbill */}
            <div className="flex justify-center items-center">
              <div className="text-center bg-gray-900 rounded-full border-4 border-fuchsia-300 w-96 h-90 p-4">
                <h3 className="font-semibold text-fuchsia-300 text-xl underline mb-2">
                  Razorbill
                </h3>
                <p className="text-slate-100">
                  A smooth streaming platform for sports content using React &
                  Tailwind CSS.
                </p>
                <div className="mt-2 space-y-1">
                  <a
                    href="https://razorbill-website.vercel.app/"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Victormuthomi/razorbill-website"
                    className="text-fuchsia-500 hover:underline block"
                  >
                    Frontend Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Profile Image */}
      <div className="flex justify-center items-center mt-64 md:hidden">
        <img
          src={mine}
          alt="me"
          className="block md:hidden w-80 h-80 rounded-full border-4 border-fuchsia-300"
        />
      </div>
    </>
  );
};

export default Projects;

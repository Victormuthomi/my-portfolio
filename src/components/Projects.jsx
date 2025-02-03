import { FaDiagramProject } from "react-icons/fa6";
import me from "../assets/me3.jpg";

const Projects = () => {
  return (
    <>
      {/* <!-- Projects Section --> */}
      <div className="flex justify-center items-center">
        <section
          className="md:py-0 py-14 md:h-[650px] h-[1000px] w-[1200px]"
          id="projects"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
            <h2 className=" text-5xl font-bold text-center text-fuchsia-500 mb-6">
              PROJECTS
            </h2>
            <FaDiagramProject className="text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:gap-8  gap-10 px-6">
            {/* <!-- Project 1 --> */}

            <div className="text-center bg- rounded-full border-0  border-fuchsia-300 w-78 h-82"></div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4  border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Recipe Tracker
                </h3>

                <p className="text-slate-100 p-2">
                  A full-stack recipe tracker application allowing users to
                  create, edit, and delete recipes while saving their data
                  locally for long-term access.
                </p>
                <a
                  href="https://recipe-tracker-phi.vercel.app/"
                  className="text-fuchsia-600  hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4  border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Online Voting Website
                </h3>

                <p className="text-slate-100 p-2">
                  An online voting system designed to securely manage elections
                  and ensure integrity and transparency.
                </p>
                <a
                  href="https://github.com/Victormuthomi/voting_website"
                  className="text-fuchsia-600  hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <img
              src={me}
              alt="me"
              className="hidden md:block w-80 h-80 mt-20 rounded-full border-4 border-fuchsia-300"
            />

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4  border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Inventory Management
                </h3>

                <p className="text-slate-100 p-2">
                  A smart and efficient inventory management system designed to
                  track, manage, and optimize stock levels with ease and
                  accuracy.
                </p>
                <a
                  href="http://194.195.215.228:8080/"
                  className="text-fuchsia-600  hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center bg- rounded-full border-4  border-fuchsia-300 w-96 h-90">
                <h3 className="font-semibold text-fuchsia-300 text-xl pt-4 underline mb-2">
                  Airbnb Management
                </h3>

                <p className="text-slate-100 p-2">
                  A smart and efficient inventory management system designed to
                  track, manage, and optimize stock levels with ease and
                  accuracy.
                </p>
                <a
                  href="https://github.com/Victormuthomi/private_airbnb"
                  className="text-fuchsia-600  hover:underline"
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
          className="block md:hidden w-80 h-80 mt-14  rounded-full border-4 border-fuchsia-300"
        />
      </div>
    </>
  );
};

export default Projects;

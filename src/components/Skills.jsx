import {
  FaTools,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiDjango, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      {/* <!-- Skills Section --> */}
      <div className="flex justify-center items-center">
        <section
          className="max-w-7xl mx-auto px-2 py-2 mb-2 w-[980px]"
          id="skills"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
            <h2 className=" text-5xl font-bold text-center text-fuchsia-500 mb-6">
              SKILLS
            </h2>
            <FaTools className="text-4xl ml-4 md:mb-6 mb-20 text-white animate-spin slow-spin " />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <FaNodeJs className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Node JS
              </h3>
              <p className="text-slate-100 text-2xl pt-4">85%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <SiExpress className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Express JS
              </h3>
              <p className="text-slate-100 text-2xl pt-4">92%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <FaReact className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                React
              </h3>
              <p className="text-slate-100 text-2xl pt-4">80%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <SiDjango className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Django
              </h3>
              <p className="text-slate-100 text-2xl pt-4">90%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <BiLogoMongodb className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Mongo DB
              </h3>
              <p className="text-slate-100 text-2xl pt-4">70%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <FaGit className="text-6xl text-green-500  mb-2" />
                <FaGithub className="text-6xl text-green-500 ml-2 mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Git & Github
              </h3>
              <p className="text-slate-100 text-2xl pt-4">97%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <SiTailwindcss className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Tailwindcss
              </h3>
              <p className="text-slate-100 text-2xl pt-4">85%</p>
            </div>

            <div className="text-center bg- rounded-full border-4 pt-8 border-fuchsia-300 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
              <div className="flex justify-center">
                <FaDocker className="text-6xl text-green-500  mb-2" />
              </div>
              <h3 className="font-semibold text-fuchsia-300 text-xl underline">
                Docker
              </h3>
              <p className="text-slate-100 text-2xl pt-4">65%</p>
            </div>
          </div>
        </section>
      </div>
      <div className="rounded-full md:border-4 border-2 border-fuchsia-300 md:w-52 md:h-52"></div>
    </>
  );
};

export default Skills;

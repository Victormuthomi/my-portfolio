import {
  FaTools,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  SiExpress,
  SiDjango,
  SiTailwindcss,
  SiRedux,
  SiSwagger,
  SiGo,
} from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <div className="flex justify-center items-center mb-4">
        <section
          className="max-w-7xl mx-auto px-2 py-6 mb-10 w-full lg:w-[980px]"
          id="skills"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse mb-8">
            <h2 className="text-5xl font-bold text-center text-fuchsia-500">
              SKILLS
            </h2>
            <FaTools className="text-4xl ml-4 text-white animate-spin slow-spin" />
          </div>
          {/* Responsive grid: 2 columns by default, 3 on md, 4 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:ml-8">
            {/* Row 1 (Backend) */}
            <SkillCard icon={<FaNodeJs />} name="Node JS" percentage="85%" />
            <SkillCard
              icon={<SiExpress />}
              name="Express JS"
              percentage="92%"
            />
            <SkillCard icon={<SiDjango />} name="Django" percentage="90%" />
            <SkillCard icon={<SiGo />} name="Go & Gin" percentage="80%" />

            {/* Row 2 (Frontend + Git & GitHub) */}
            <SkillCard icon={<FaReact />} name="React" percentage="80%" />
            <SkillCard icon={<SiRedux />} name="Redux" percentage="78%" />
            <SkillCard
              icon={<SiTailwindcss />}
              name="TailwindCSS"
              percentage="85%"
            />
            <SkillCard
              icon={
                <div className="flex justify-center">
                  <FaGit className="mr-2" />
                  <FaGithub />
                </div>
              }
              name="Git & GitHub"
              percentage="97%"
            />

            {/* Row 3 (Others) */}
            <SkillCard icon={<FaDocker />} name="Docker" percentage="65%" />
            <SkillCard
              icon={<DiPostgresql />}
              name="PostgreSQL"
              percentage="75%"
            />
            <SkillCard
              icon={<BiLogoMongodb />}
              name="MongoDB"
              percentage="70%"
            />
            <SkillCard icon={<SiSwagger />} name="Swagger" percentage="70%" />
          </div>
        </section>
      </div>
    </>
  );
};

// Reusable SkillCard component
const SkillCard = ({ icon, name, percentage }) => {
  return (
    <div className="text-center rounded-full border-4 pt-8 border-fuchsia-300 bg-gray-900 w-52 h-52 shadow-lg p-6 hover:animate-bounce transition transform hover:scale-105">
      <div className="flex justify-center text-green-500 text-6xl mb-2">
        {icon}
      </div>
      <h3 className="font-semibold text-fuchsia-300 text-xl underline">
        {name}
      </h3>
      <p className="text-slate-100 text-2xl pt-4">{percentage}</p>
    </div>
  );
};

export default Skills;

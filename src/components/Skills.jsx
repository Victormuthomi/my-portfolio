import {
  FaTools,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGithub,
  FaDocker,
  FaStar,
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
      <div className="flex justify-center items-center mb-4">
        <section
          className="max-w-7xl mx-auto px-2 py-6 mb-10 w-full lg:w-[980px]"
          id="skills"
        >
          {/* Title */}
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse mb-4">
            <h2 className="text-5xl font-bold text-center text-fuchsia-500">
              SKILLS
            </h2>
            <FaTools className="text-4xl ml-4 text-white animate-spin slow-spin" />
          </div>

          {/* ⭐ Legend */}
          <div className="text-center mb-6 text-sm text-slate-300">
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1">
                <FaStar className="text-green-400 animate-pulse" /> Beginner
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-blue-400 animate-pulse" />
                <FaStar className="text-blue-400 animate-pulse" /> Intermediate
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 animate-pulse" />
                <FaStar className="text-yellow-400 animate-pulse" />
                <FaStar className="text-yellow-400 animate-pulse" /> Expert
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:ml-8">
            {/* Backend */}
            <SkillCard icon={<FaNodeJs />} name="Node JS" level="Expert" />
            <SkillCard icon={<SiExpress />} name="Express JS" level="Expert" />
            <SkillCard icon={<SiDjango />} name="Django" level="Expert" />
            <SkillCard icon={<SiGo />} name="Go & Gin" level="Intermediate" />

            {/* Frontend */}
            <SkillCard icon={<FaReact />} name="React" level="Expert" />
            <SkillCard icon={<SiRedux />} name="Redux" level="Intermediate" />
            <SkillCard
              icon={<SiTailwindcss />}
              name="TailwindCSS"
              level="Intermediate"
            />
            <SkillCard
              icon={
                <div className="flex justify-center">
                  <FaGit className="mr-2" />
                  <FaGithub />
                </div>
              }
              name="Git & GitHub"
              level="Expert"
            />

            {/* Others */}
            <SkillCard icon={<FaDocker />} name="Docker" level="Intermediate" />
            <SkillCard
              icon={<DiPostgresql />}
              name="PostgreSQL"
              level="Intermediate"
            />
            <SkillCard
              icon={<BiLogoMongodb />}
              name="MongoDB"
              level="Intermediate"
            />
            <SkillCard
              icon={<SiSwagger />}
              name="Swagger"
              level="Intermediate"
            />
          </div>
        </section>
      </div>
    </>
  );
};

const SkillCard = ({ icon, name, level }) => {
  const getColor = () => {
    if (level === "Expert") return "text-yellow-400"; // Expert is yellow
    if (level === "Intermediate") return "text-blue-400"; // Intermediate is blue
    return "text-green-400"; // Beginner is green
  };

  const renderStars = () => {
    const count = level === "Expert" ? 3 : level === "Intermediate" ? 2 : 1;
    const colorClass = getColor();

    return Array(count)
      .fill(null)
      .map((_, i) => (
        <FaStar
          key={i}
          className={`${colorClass} inline-block mx-0.5 animate-pulse`}
          title={level}
        />
      ));
  };

  return (
    <div className="text-center rounded-full border-4 pt-6 border-fuchsia-300 bg-gray-900 w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 shadow-lg p-4 hover:animate-bounce transition transform hover:scale-105">
      <div className="flex justify-center text-green-500 text-4xl sm:text-5xl md:text-6xl mb-2">
        {icon}
      </div>
      <h3
        className="font-semibold text-fuchsia-300 text-sm sm:text-base md:text-xl underline"
        title={`Skill level: ${level}`}
      >
        {name}
      </h3>
      <div className="pt-2">{renderStars()}</div>
    </div>
  );
};

export default Skills;

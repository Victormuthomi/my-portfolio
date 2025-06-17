import { FaUserGear } from "react-icons/fa6";

const About = () => {
  return (
    <>
      {/* Full-width line, only visible on md and above */}
      <div className="hidden md:block w-full border-t-4 border-fuchsia-300"></div>

      <div className="flex justify-center items-center">
        <section
          className="max-w-7xl md:py-6 py-10 h-auto mt-12 mb-0 w-full px-4 md:w-[950px] max-w-[90%]"
          id="about"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-fuchsia-500 mb-6 whitespace-nowrap">
              ABOUT ME
            </h2>
            <FaUserGear className="text-3xl sm:text-4xl md:text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-center md:text-justify text-slate-200 leading-relaxed">
            I'm a Full-Stack Developer who designs and builds real-world,
            scalable solutions using modern technologies like Node.js, Express,
            React, Go, Django, and PostgreSQL. My approach combines clean
            architecture, efficient problem-solving, and a strong focus on user
            experience and performance. I’ve built projects from the ground up —
            from backend APIs to dynamic frontends and Dockerized deployments.
            I’m not just passionate about coding — I’m driven to build solutions
            that work in production, meet real needs, and scale with users. I
            thrive in fast-paced environments and love working on meaningful
            products. Always improving, always learning — I stay sharp by
            keeping up with new tools, contributing to projects, and refining my
            craft. If you’re building something impactful and need a developer
            who delivers — let’s connect.{" "}
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

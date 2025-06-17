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
          <div className="flex justify-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-fuchsia-500 mb-6 whitespace-nowrap">
              ABOUT ME
            </h2>
            <FaUserGear className="text-3xl sm:text-4xl md:text-5xl ml-4 mb-6 text-white animate-spin slow-spin" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-center md:text-justify text-slate-200 leading-relaxed">
            I'm a Full-Stack Developer passionate about building real-world
            solutions. I work with MongoDB, Express.js, React.js, Node.js,
            Python/Django, Go, Gin, PostgreSQL, and DevOps to create scalable,
            high-performance applications. For me, coding is about solving
            problems, optimizing efficiency, and turning ideas into seamless
            digital experiences. I thrive on tackling challenges and constantly
            learning to stay ahead. If you're working on something exciting,
            let’s connect!
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

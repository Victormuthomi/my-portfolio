import { FaUserGear } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="rounded-full border-2 border-fuchsia-300"></div>
      <div className="flex justify-center items-center">
        <section
          className="max-w-7xl md:py-6 py-10 h-auto mt-12 mb-0 w-full px-4 md:w-[950px] max-w-[90%]"
          id="about"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
            <h2 className="text-5xl font-bold text-center text-fuchsia-500 mb-6">
              ABOUT ME
            </h2>
            <FaUserGear className="text-5xl ml-4 mb-6 text-white animate-spin slow-spin " />
          </div>
          <p className="md:text-2xl text-lg text-center md:text-justify text-slate-200 leading-relaxed">
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

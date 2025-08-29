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
            I’m a Full-Stack Developer with a strong backend focus, building scalable, real-world applications using Node.js, Express, React, Go, Django, and PostgreSQL. I specialize in clean architecture, efficient business logic, and seamless integration between frontend and backend.  
            From designing robust APIs to creating dynamic, responsive interfaces and Dockerized deployments, I deliver solutions that work in production and scale with users.  
            Constantly learning and refining my craft, I thrive in fast-paced environments where meaningful impact matters. Let’s build something impactful together.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

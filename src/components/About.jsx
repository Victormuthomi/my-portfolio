import { FaUserGear } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="rounded-full border-2  border-fuchsia-300"></div>
      <div className="flex justify-center items-center">
        <section
          className=" max-w-7xl md:py-6 py-10  h-[400px] mt-16 mb-16 w-[950px] "
          id="about"
        >
          <div className="flex justify-center items-center underline decoration-fuchsia-300 hover:decoration-fuchsia-500">
            <h2 className=" text-5xl font-bold text-center text-fuchsia-500 mb-6 ">
              ABOUT ME
            </h2>
            <FaUserGear className="text-5xl ml-4 mb-6 text-white " />
          </div>
          <p className="md:text-2xl text-1xl text-justify text-slate-200">
            I am a Full-Stack Developer who gets a kick out of building things
            that people actually use. I work with the MERN stack and
            Python/Django, and what excites me most is turning ideas into real,
            working apps. For me, coding isn’t just about making stuff work—it’s
            about making life easier and more fun. I love diving into new
            challenges, and I’m always learning something new to keep things
            fresh. If you're working on something cool, let's chat and see how
            we can make it even better.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

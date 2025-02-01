const About = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <section
          className=" max-w-7xl md:py-6 py-10  h-[400px] mt-16 mb-16 w-[950px] "
          id="about"
        >
          <div className="bg-transparent rounded-lg shadow-lg p-6">
            <h2 className="text-5xl text-fuchsia-400 font-semibold text-center mb-6 underline decoration-fuchsia-300 md:pl-0 pl-8">
              About Me
            </h2>
            <p className="md:text-2xl text-1xl text-justify text-slate-200">
              I am a Full-Stack Developer who gets a kick out of building things
              that people actually use. I work with the MERN stack and
              Python/Django, and what excites me most is turning ideas into
              real, working apps. For me, coding isn’t just about making stuff
              work—it’s about making life easier and more fun. I love diving
              into new challenges, and I’m always learning something new to keep
              things fresh. If you're working on something cool, let's chat and
              see how we can make it even better.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

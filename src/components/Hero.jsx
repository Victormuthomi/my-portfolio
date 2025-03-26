import me from "../assets/me2.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <section
          className="text-slate-50  h-[680px] w-[1000px] mt-18 text-center"
          id="hero"
        >
          <div className="md:flex justify-center items-center justify-start items-start gap-4 md:pl-44 pl-12 mb-2">
            <img
              src={me}
              alt="me"
              className="w-80 h-80 rounded-full border-4 border-fuchsia-300"
            />
            <div className="md:flex justify-end items-end mb-2 hidden">
              <img className="w-80 h-80 rounded-full border-4  border-fuchsia-300" />
            </div>
          </div>

          <div className="md:py-12 py-6">
            <h1 className="text-5xl py-2 text-center font-bold">Hi, I am</h1>
            <h2 className="text-5xl  text-center text-fuchsia-400 font-bold animate-bounce">
              Victor Muthomi
            </h2>
          </div>
          <p className="md:text-3xl text-2xl text-center ">
            Designing and developing innovative solutions that bridge ideas with
            technology, creating impactful and scalable digital experiences.
          </p>
          <div className="md:mt-10 mt-10 flex justify-center space-x-6 text-sm ">
            <a
              href="#contact"
              className="bg-fuchsia-500 hover:bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg  flex items-center justify-center sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;

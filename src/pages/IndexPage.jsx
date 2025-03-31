import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Experience from "../components/Experience";
import image from "../assets/cool.jpg";

const IndexPage = () => {
  return (
    <>
      <section
        className="text-slate-500 dark:text-slate-400 text-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "repeat",
          backgroundSize: "content",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        <Socials />
        <Footer />
      </section>
    </>
  );
};

export default IndexPage;

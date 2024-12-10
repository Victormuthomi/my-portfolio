import React from "react";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 " id="about">
        <div className="bg-slate-700 rounded-lg shadow-lg p-6 animate-pulse">
          <h2 className="text-4xl text-slate-50 font-semibold text-center mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-200">
            I'm a passionate Full-Stack Developer with experience in creating
            web applications using the MERN stack (MongoDB, Express.js, React,
            Node.js) and Python with Django. I enjoy building modern,
            responsive, and scalable web solutions that solve real-world
            problems. I'm always eager to learn new technologies and take on
            challenging projects.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

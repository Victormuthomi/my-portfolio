import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 md:bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold text-fuchsia-500 underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
              EDUCATION
            </h2>
            <FaGraduationCap className="ml-4 text-4xl sm:text-5xl md:text-6xl text-white animate-spin slow-spin" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Institution & Year Column */}
          <div className="md:col-span-1 text-left ml-4 md:ml-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-fuchsia-300">
              YouTube University
            </h3>
            <p className="text-slate-100 text-xl sm:text-2xl mt-2">
              2022 – Ongoing
            </p>
          </div>

          {/* Description Column */}
          <div className="md:col-span-2">
            <p className="text-justify indent-8 text-slate-100 text-lg sm:text-xl md:text-2xl leading-relaxed">
              I am a self-taught software engineer whose journey began with a
              strong foundation in data structures and algorithms, developed
              through studies in C and C++. I refined my skills in version
              control using Git and GitHub and built robust back-end solutions
              with Python and Django. I then expanded my expertise by developing
              front-end applications with JavaScript and the full MERN stack
              (MongoDB, Express, React, and Node.js), and later, I explored
              high-performance development with Go and Gin. Most recently, I
              have incorporated DevOps practices to streamline deployments and
              enhance system reliability. This continuous learning process
              sharpens my problem-solving abilities and enables me to create
              scalable, user-focused applications that address real-world
              challenges, while I remain dedicated to staying current with
              emerging trends in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

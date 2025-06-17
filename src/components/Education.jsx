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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
              I'm a self-taught Software Engineer with a strong foundation in
              data structures and algorithms, developed through early work in C
              and C++. I began my journey mastering version control with Git and
              GitHub, and built reliable backend systems with Python and Django.
              I then transitioned into full-stack development using both the
              MERN (MongoDB, Express, React, Node.js) and PERN (PostgreSQL,
              Express, React, Node.js) stacks, delivering scalable, user-focused
              applications. I also explored high-performance backend engineering
              with Go and Gin, and recently integrated DevOps practices to
              automate deployments and enhance reliability. This journey of
              continuous learning has shaped me into a well-rounded engineer who
              thrives on building robust digital solutions. I'm always pushing
              my skills forward to stay ahead of industry trends and deliver
              real-world impact at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

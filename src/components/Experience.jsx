import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 md:bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center">
            <h2 className="text-5xl sm:text-5xl md:text-5xl font-bold text-fuchsia-500 underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
              EXPERIENCE
            </h2>
            <FaBriefcase className="ml-4 text-4xl sm:text-5xl md:text-6xl text-white animate-spin slow-spin" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company & Year Column */}
          <div className="md:col-span-1 text-left md:pl-24">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-fuchsia-300">
              Eleli Afrika
            </h3>
            <p className="text-base sm:text-lg md:text-2xl mt-2 text-slate-100">
              2024 – 2025
            </p>
          </div>

          {/* Description Column */}
          <div className="md:col-span-2">
            <p className="text-justify indent-8 text-base sm:text-lg md:text-2xl text-slate-100 leading-relaxed">
              At Eleli Afrika, I worked as a Full Stack Developer, delivering
              scalable solutions using the MERN stack, Python/Django, and
              Golang. Beyond developing robust web applications, I enhanced
              deployment workflows, optimized API integrations, and embraced
              DevOps practices to ensure smooth operations. I also collaborated
              closely with cross-functional teams to drive innovation and
              deliver efficient, high-performance solutions tailored to business
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 md:bg-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center">
            <h2 className="text-5xl font-bold text-fuchsia-500 underline decoration-fuchsia-300 hover:decoration-fuchsia-500 hover:animate-pulse">
              EXPERIENCE
            </h2>
            <FaBriefcase className="ml-4 text-5xl text-white animate-spin slow-spin" />
          </div>
        </div>

        {/* Experience Entries */}
        <div className="space-y-12">
          {/* DevOps Engineer */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-fuchsia-300">
              DevOps Engineer – Eleli Afrika
            </h3>
            <p className="text-lg text-slate-100 mb-2">2024 – 2025</p>
            <ul className="list-disc list-inside space-y-2 text-justify text-base sm:text-lg md:text-xl text-slate-100">
              <li>
                Automated CI/CD pipelines with GitHub Actions, reducing
                deployment errors by 50% and accelerating release cycles.
              </li>
              <li>
                Deployed microservices using Docker and Kubernetes, ensuring
                scalable and resilient production environments.
              </li>
              <li>
                Implemented Infrastructure as Code with Terraform and
                configuration management with Ansible, enabling repeatable,
                consistent deployments.
              </li>
              <li>
                Designed monitoring and observability with Prometheus and
                Grafana, improving system uptime and performance by 25%.
              </li>
            </ul>
          </div>

          {/* Full-Stack Developer */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-fuchsia-300">
              Full-Stack Developer – Bandika IoT
            </h3>
            <p className="text-lg text-slate-100 mb-2">2023 – 2024</p>
            <ul className="list-disc list-inside space-y-2 text-justify text-base sm:text-lg md:text-xl text-slate-100">
              <li>
                Developed IoT dashboards and APIs using MERN, PERN, and Go
                (Gin), integrating frontend and backend for real-time data
                visualization.
              </li>
              <li>
                Initiated containerized deployments with Docker and Docker
                Compose, streamlining development-to-production workflows.
              </li>
              <li>
                Collaborated with cross-functional teams, bridging development
                and operational processes to improve deployment efficiency.
              </li>
            </ul>
          </div>

          {/* Backend Developer */}
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-fuchsia-300">
              Backend Developer – Kisumu Lakeside Homes
            </h3>
            <p className="text-lg text-slate-100 mb-2">2022 – 2023</p>
            <ul className="list-disc list-inside space-y-2 text-justify text-base sm:text-lg md:text-xl text-slate-100">
              <li>
                Built REST APIs using Django and Django REST Framework,
                implementing robust authentication and database optimization.
              </li>
              <li>
                Enhanced system performance and security, improving response
                times by 30%.
              </li>
              <li>
                Gained early exposure to deployment workflows, laying the
                foundation for DevOps practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

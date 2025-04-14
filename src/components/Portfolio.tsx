import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "../types";
import { motion } from "framer-motion";
import { FadeInView } from "./animations/FadeInView";

const projects: Project[] = [
  {
    id: 1,
    title: "Web HR Management Information System",
    description:
      "HR Management Information System is an information system created to manage the distribution of HR tasks at JTI (Jurusan Teknologi Informasi Polinema) in web platform.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/Salma310/simas_web",
    link: "#",
  },
  {
    id: 2,
    title: "App HR Management Information System",
    description:
      "HR Management Information System is an information system created to manage the distribution of HR tasks at JTI (Jurusan Teknologi Informasi Polinema) in mobile platform.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["Flutter", "MySQL"],
    github: "https://github.com",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Typescript",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    technologies: ["React", "Typescript"],
    github: "https://github.com/adamsafril19/personal_web",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:to-blue-900 before:opacity-95 before:-z-10"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-emerald-950/95 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Featured Works
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Showcasing digital excellence through innovative solutions
            </p>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-slate-800/50 hover:bg-slate-900/60 border border-slate-600/30 hover:border-slate-400/50 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="text-emerald-400/50 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  <p className="text-gray-200 font-semibold mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-900/40 text-emerald-300 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={18} className="mr-2" />
                        <span className="text-sm">Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Portfolio;

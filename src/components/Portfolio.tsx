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
    github: "https://github.com/adamsafril19/simas_app",
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
      // Apply base background and text color
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
    >
      {/* Background Overlay - Removed, using base bg */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 to-emerald-950/95 -z-10" /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-16">
            {/* Adjusted header gradient */}
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-abyssal-accent to-orange-400 bg-clip-text text-transparent">
              Featured Works
            </h2>
            {/* Ensure text is white */}
            <p className="text-lg text-white max-w-2xl mx-auto">
              Showcasing digital excellence through innovative solutions
            </p>
          </div>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                // Adjusted card style: background, border
                className="group relative bg-abyssal-base/50 hover:bg-abyssal-base/70 border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 hover:shadow-glow-inner rounded-xl overflow-hidden backdrop-blur-sm"
              >
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Adjusted image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-abyssal-base/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    {/* Ensure text is white */}
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {/* Adjusted icon color */}
                    <ArrowUpRight className="text-abyssal-accent/50 group-hover:text-abyssal-accent transition-colors" />
                  </div>

                  {/* Ensure text is white */}
                  <p className="text-white font-semibold mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack - Adjusted style */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-abyssal-accent/10 text-abyssal-accent text-xs rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - Adjusted style */}
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        // Adjusted link color
                        className="flex items-center text-abyssal-accent hover:text-orange-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={18} className="mr-2" />
                        <span className="text-sm">Source Code</span>
                      </motion.a>
                    )}
                    {/* Added Live Link button if available */}
                    {project.link && project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        className="flex items-center text-abyssal-accent hover:text-orange-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect - Adjusted color */}
                <div className="absolute inset-0 bg-gradient-to-br from-abyssal-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Portfolio;

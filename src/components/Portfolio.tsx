import React from "react";
import { ExternalLink, Github } from "lucide-react";
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
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
    >
      <div className="container mx-auto px-6">
        <FadeInView>
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 text-primary">
            My Portfolio
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInView key={project.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-light/20 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="flex items-center text-primary hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </motion.a>
                    )}
                    {/* {project.link && (
                      <motion.a
                        href={project.link}
                        className="flex items-center text-secondary hover:text-secondary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </motion.a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default Portfolio;

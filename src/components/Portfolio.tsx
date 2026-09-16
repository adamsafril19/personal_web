import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Filter } from "lucide-react";
import { Project } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "./animations/FadeInView";

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Analytics & Churn Prediction (Mamina)",
    description:
      "An end-to-end Machine Learning behavioral risk scoring system for Mamina Baby Spa to predict customer churn using XGBoost, SHAP explainability, Flask REST API, and a real-time React dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Python", "Flask", "XGBoost", "SHAP", "React", "Docker"],
    github: "https://github.com/adamsafril19/Customer-Analitycs--Mamina-",
    link: "#",
    category: "AI & ML",
  },
  {
    id: 2,
    title: "Tabungan HajiKu - Hajj Savings Platform",
    description:
      "Enterprise-grade financial platform for Hajj & Umrah savings powered by 14 decoupled microservices orchestrated behind a centralized API Gateway, containerized with Docker, with Redis caching and JWT security.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
    technologies: ["PHP", "Microservices", "Docker", "Redis", "MySQL"],
    github: "https://github.com/adamsafril19/Tabungan-Hajiku",
    link: "#",
    category: "Web",
  },
  {
    id: 3,
    title: "Tuffero POS ERP System",
    description:
      "A comprehensive web-based Point of Sale (POS) and ERP system to digitalize MSME retail operations, inventory management, user roles, and financial transaction workflows.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    technologies: ["Laravel", "PHP", "PostgreSQL", "MySQL", "Bootstrap"],
    github: "https://github.com/adamsafril19/tuffero_pos",
    link: "#",
    category: "Web",
  },
  {
    id: 4,
    title: "Web HR Management System (SIMAS)",
    description:
      "Web-based human resource management system built to coordinate data and workload distribution at JTI Polinema using Laravel and the TOPSIS decision analysis algorithm.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "RESTful API"],
    github: "https://github.com/Salma310/simas_web",
    link: "#",
    category: "Web",
  },
  {
    id: 5,
    title: "Mobile HR Management App (SIMAS)",
    description:
      "Mobile-first HR management application developed with Flutter for flexible employee attendance and real-time workload monitoring synchronized via secure REST APIs.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["Flutter", "Dart", "RESTful API", "MySQL"],
    github: "https://github.com/adamsafril19/simas_app",
    link: "#",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Interactive Developer Portfolio",
    description:
      "Modern, responsive personal portfolio built with React, TypeScript, and Tailwind CSS featuring smooth Framer Motion animations, dark mode aesthetics, and project showcases.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/adamsafril19/personal_web",
    link: "#",
    category: "Web",
  },
];

const categories = ["All", "Web", "Mobile", "AI & ML"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-abyssal-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abyssal-accent/10 border border-abyssal-accent/20 text-abyssal-accent text-sm font-medium mb-4">
              <Filter size={14} />
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Showcasing digital excellence through innovative solutions
            </p>
          </div>
        </FadeInView>

        {/* Filter Tabs */}
        <FadeInView delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-abyssal-accent text-abyssal-base shadow-glow-accent"
                    : "bg-abyssal-base/50 text-white/70 border border-abyssal-accent/20 hover:border-abyssal-accent/50 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </FadeInView>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-abyssal-base/50 hover:bg-abyssal-base/70 border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all duration-300 hover:shadow-glow-inner rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyssal-base via-abyssal-base/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-abyssal-accent text-abyssal-base text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay with Quick Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-abyssal-base/70 backdrop-blur-sm">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-abyssal-accent text-abyssal-base rounded-full shadow-lg hover:bg-orange-400 transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.link && project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white text-abyssal-base rounded-full shadow-lg hover:bg-white/90 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-abyssal-accent transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="text-abyssal-accent/50 group-hover:text-abyssal-accent group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
                  </div>

                  <p className="text-white/70 mb-5 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-abyssal-accent/10 text-abyssal-accent text-xs font-medium rounded-full border border-abyssal-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 pt-4 border-t border-abyssal-accent/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/80 hover:text-abyssal-accent transition-colors text-sm font-medium group/link"
                      >
                        <Github size={16} className="mr-2" />
                        <span>Code</span>
                        <ArrowUpRight
                          size={14}
                          className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-white/80 hover:text-abyssal-accent transition-colors text-sm font-medium group/link"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        <span>Live Demo</span>
                        <ArrowUpRight
                          size={14}
                          className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white/60">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tech = {
  name: string;
  description: string;
  logo: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "AI & ML" | "Styling" | "DevOps";
  level: number;
};

const technologies: Tech[] = [
  {
    name: "Python",
    description: "High-level programming language for backend engineering and machine learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Backend",
    level: 85,
  },
  {
    name: "PHP",
    description: "Server-side scripting language for robust backend web applications",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "Backend",
    level: 80,
  },
  {
    name: "Laravel",
    description: "Elegant PHP web framework for MVC architectures and secure REST APIs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    category: "Backend",
    level: 85,
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework ideal for microservices and ML inference",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    category: "Backend",
    level: 80,
  },
  {
    name: "Flutter",
    description: "Google UI toolkit for crafting natively compiled cross-platform mobile apps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    category: "Mobile",
    level: 75,
  },
  {
    name: "Machine Learning",
    description: "Predictive behavioral modeling using XGBoost, Scikit-Learn, and SHAP Explainable AI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
    category: "AI & ML",
    level: 80,
  },
  {
    name: "MySQL",
    description: "Popular open-source relational database management system",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
    level: 85,
  },
  {
    name: "PostgreSQL",
    description: "Advanced, powerful enterprise-grade open source relational database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
    level: 80,
  },
  {
    name: "Redis",
    description: "In-memory key-value data store used for high-throughput caching and message broker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
    category: "Database",
    level: 75,
  },
  {
    name: "Docker",
    description: "Containerization platform for standardized development and multi-service orchestration",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
    category: "DevOps",
    level: 75,
  },
  {
    name: "React",
    description: "Declarative JavaScript library for building component-driven user interfaces",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
    level: 80,
  },
  {
    name: "JavaScript",
    description: "Core dynamic programming language powering modern web applications",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Frontend",
    level: 80,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid and responsive UI development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    category: "Styling",
    level: 85,
  },
  {
    name: "Node.js",
    description: "JavaScript runtime environment for tooling and lightweight server tasks",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
    level: 70,
  },
];

const categories = ["All", "Backend", "AI & ML", "Database", "Mobile", "Frontend", "DevOps"];

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechs =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section
      id="technology-stack"
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-abyssal-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abyssal-accent/10 border border-abyssal-accent/20 text-abyssal-accent text-sm font-medium mb-4">
            My Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Technology Stack
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The technologies I use to build modern and scalable web & mobile
            applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-abyssal-accent text-abyssal-base shadow-glow-accent"
                  : "bg-abyssal-base/50 text-white/70 border border-abyssal-accent/20 hover:border-abyssal-accent/50 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-abyssal-base/50 hover:bg-abyssal-base/70 border border-abyssal-accent/20 hover:border-abyssal-accent/50 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-abyssal-accent/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                <div className="flex flex-col items-center h-full relative z-10">
                  {/* Logo container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain filter drop-shadow-lg"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector(".fallback-icon")) {
                          const div = document.createElement("div");
                          div.className =
                            "fallback-icon w-12 h-12 flex items-center justify-center text-abyssal-accent font-bold text-xs";
                          div.textContent = tech.name.substring(0, 2).toUpperCase();
                          parent.appendChild(div);
                        }
                      }}
                    />
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-white mb-1 text-center group-hover:text-abyssal-accent transition-colors">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <span className="text-xs text-abyssal-accent/80 mb-3 font-medium">
                    {tech.category}
                  </span>

                  {/* Description */}
                  <p className="text-white/60 text-center text-xs leading-relaxed mb-4 line-clamp-2">
                    {tech.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="w-full mt-auto">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">
                        Level
                      </span>
                      <span className="text-[10px] text-abyssal-accent font-bold">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-abyssal-accent to-orange-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "HTML",
    description: "Standard markup language for creating web structures",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-orange-500",
  },
  {
    name: "CSS",
    description: "A stylesheet language for styling web pages",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-blue-500",
  },
  {
    name: "JavaScript",
    description: "Programming language for dynamic web",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-yellow-400",
  },
  {
    name: "React",
    description: "JavaScript library for building user interface (UI)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-cyan-400",
  },
  {
    name: "Flutter",
    description: "UI framework for building mobile applications",
    logo: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-blue-400",
  },
  {
    name: "PHP",
    description: "Server-side scripting language for web development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-purple-400",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building backend applications",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-green-500",
  },
  {
    name: "Laravel",
    description: "PHP framework for modern web development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-red-500",
  },
  {
    name: "MySQL",
    description: "Open-source relational database management system",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-blue-400",
  },
  {
    name: "Tailwind",
    description: "Framework CSS utility-first",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-cyan-400",
  },
];

const TechnologyStack = () => {
  return (
    <motion.section
      id="technology-stack"
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
    >
      <div className="container mx-auto px-4">
        {/* Header tetap sama */}
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Technology Stack
        </h2>
        <p className="text-gray-100 font-bold text-center mb-16 max-w-2xl mx-auto">
          The technologies I use to build modern and scalable web & mobile
          applications
        </p>

        {/* Grid dengan card yang dimodifikasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-800/50 hover:bg-slate-700/60 border border-slate-600/30 hover:border-slate-400/50"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

              <div className="flex flex-col items-center h-full relative z-10">
                {/* Logo container */}
                <div className="mb-4 p-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 flex items-center justify-center"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain filter drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-100 mb-2 text-center">
                  {tech.name}
                </h3>
                <p className="text-gray-200 font-bold text-center text-sm leading-relaxed m-1.5">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologyStack;

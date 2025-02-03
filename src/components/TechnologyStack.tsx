import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "HTML",
    description: "Bahasa markup standar untuk membuat struktur web",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-orange-500",
  },
  {
    name: "CSS",
    description: "Bahasa stylesheet untuk styling halaman web",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-blue-500",
  },
  {
    name: "JavaScript",
    description: "Bahasa pemrograman untuk web yang bersifat dinamis",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-yellow-400",
  },
  {
    name: "React",
    description: "Library JavaScript untuk membangun antarmuka pengguna (UI)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-cyan-400",
  },
  {
    name: "Flutter",
    description: "Framework UI untuk membangun aplikasi mobile",
    logo: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-blue-400",
  },
  {
    name: "PHP",
    description: "Bahasa scripting server-side untuk pengembangan web",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-purple-400",
  },
  {
    name: "Node.js",
    description: "Runtime JavaScript untuk membangun aplikasi backend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-green-500",
  },
  {
    name: "Laravel",
    description: "Framework PHP untuk pengembangan web modern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    bgColor: "bg-slate-800",
    iconColor: "text-red-500",
  },
  {
    name: "MySQL",
    description: "Sistem manajemen basis data relasional open-source",
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
      className="min-h-screen flex items-center pt-16 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Technology Stack
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Teknologi yang saya gunakan untuk membangun aplikasi web & mobile
          modern dan scalable
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`${tech.bgColor} rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group`}
            >
              <div className="flex flex-col items-center h-full">
                <div
                  className={`w-16 h-16 mb-4 ${tech.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-400 text-center text-sm">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Add default export
export default TechnologyStack;

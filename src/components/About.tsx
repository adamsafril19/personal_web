import React from "react";
import { BookOpen, Award, Code, Sparkles, Download, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "3+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-abyssal-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abyssal-accent/10 border border-abyssal-accent/20 text-abyssal-accent text-sm font-medium mb-4">
            <Sparkles size={14} />
            Get To Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Exploring the intersection of creativity and technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div className="relative group" variants={itemVariants}>
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-abyssal-accent/20 to-orange-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-abyssal-accent/20 group-hover:border-abyssal-accent/40 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                  alt="Working at desk"
                  className="w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyssal-base/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-abyssal-base/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-abyssal-accent/30 flex items-center gap-3"
              >
                <div className="p-2 bg-abyssal-accent/20 rounded-lg">
                  <Code className="text-abyssal-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/60">Specialized in</p>
                  <p className="text-sm font-semibold text-white">Full-Stack Dev</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Intro Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Digital Craftsman &
                <span className="text-gradient"> Problem Solver</span>
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                With 1+ year of focused experience in web development, I
                specialize in transforming complex challenges into elegant
                digital solutions. My approach combines technical excellence
                with user-centric design.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-xl bg-abyssal-base/50 border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
                >
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {/* Education Card */}
              <motion.div
                className="p-6 rounded-2xl bg-abyssal-base/50 backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-abyssal-accent/10 rounded-lg">
                    <BookOpen className="text-abyssal-accent" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Education</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Undergraduate in Business Information Systems
                  <br />
                  <span className="text-abyssal-accent">State Polytechnic of Malang</span>
                </p>
              </motion.div>

              {/* Expertise Card */}
              <motion.div
                className="p-6 rounded-2xl bg-abyssal-base/50 backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-abyssal-accent/10 rounded-lg">
                    <Briefcase className="text-abyssal-accent" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Expertise</h4>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Web Development • API Design
                  <br />
                  Mobile Development
                </p>
              </motion.div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              className="p-6 rounded-2xl bg-abyssal-base/50 backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-abyssal-accent/10 rounded-lg">
                  <Award className="text-abyssal-accent" size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white">Journey</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-abyssal-accent rounded-full ring-4 ring-abyssal-accent/20" />
                  <span className="text-white/80 text-sm">1+ Years in Web & Mobile Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-abyssal-accent rounded-full ring-4 ring-abyssal-accent/20" />
                  <span className="text-white/80 text-sm">3+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-abyssal-accent rounded-full ring-4 ring-abyssal-accent/20" />
                  <span className="text-white/80 text-sm">Passionate about clean code & UX</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-abyssal-accent text-abyssal-base rounded-xl font-semibold hover:bg-orange-400 hover:shadow-glow-accent transition-all"
              >
                <Download size={18} />
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
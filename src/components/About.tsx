import React from "react";
import { BookOpen, Award, Code, Sparkles } from "lucide-react";
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

  return (
    <motion.section
      id="about"
      // Apply base background and text color
      className="min-h-screen flex items-center py-20 bg-abyssal-base text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Elements - Adjusted colors */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-abyssal-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          {/* Adjusted header gradient */}
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-abyssal-accent to-orange-400 bg-clip-text text-transparent">
            About Me
          </h2>
          {/* Ensure text is white */}
          <p className="text-lg text-white max-w-2xl mx-auto">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:rotate-2 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Working at desk"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>

            {/* Floating Badges - Adjusted style */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              <div className="bg-abyssal-base/50 backdrop-blur-sm px-6 py-2 rounded-full flex items-center gap-2 shadow-lg border border-abyssal-accent/20">
                <Sparkles className="text-abyssal-accent" size={20} />
                <span className="text-white font-medium">Full-Stack Dev</span>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Intro Text */}
            <motion.div variants={itemVariants}>
              {/* Ensure text is white */}
              <h3 className="text-3xl font-bold text-white mb-4">
                Digital Craftsman & Problem Solver
              </h3>
              {/* Ensure text is white */}
              <p className="text-lg text-white leading-relaxed">
                With 1+ year of focused experience in web development, I
                specialize in transforming complex challenges into elegant
                digital solutions. My approach combines technical excellence
                with user-centric design.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {/* Card 1 - Adjusted style */}
              <motion.div
                className="bg-abyssal-base/50 p-6 rounded-2xl backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Adjusted icon style */}
                  <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                    <BookOpen className="text-abyssal-accent" size={24} />
                  </div>
                  {/* Ensure text is white */}
                  <h4 className="text-xl font-semibold text-white">
                    Education
                  </h4>
                </div>
                {/* Ensure text is white */}
                <p className="text-white">
                  Undergraduate in Business Information Systems
                  <br />
                  State Polytechnic of Malang
                </p>
              </motion.div>

              {/* Card 2 - Adjusted style */}
              <motion.div
                className="bg-abyssal-base/50 p-6 rounded-2xl backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Adjusted icon style */}
                  <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                    <Code className="text-abyssal-accent" size={24} />
                  </div>
                  {/* Ensure text is white */}
                  <h4 className="text-xl font-semibold text-white">
                    Expertise
                  </h4>
                </div>
                {/* Ensure text is white */}
                <p className="text-white">
                  Web Development • API Design
                  <br />
                  Mobile Development
                </p>
              </motion.div>
            </motion.div>

            {/* Experience Timeline - Adjusted style */}
            <motion.div
              className="bg-abyssal-base/50 p-6 rounded-2xl backdrop-blur-sm border border-abyssal-accent/20 hover:border-abyssal-accent/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Adjusted icon style */}
                <div className="p-3 bg-abyssal-accent/10 rounded-lg">
                  <Award className="text-abyssal-accent" size={24} />
                </div>
                {/* Ensure text is white */}
                <h4 className="text-xl font-semibold text-white">Journey</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* Adjusted bullet color */}
                  <div className="w-2 h-2 bg-abyssal-accent rounded-full" />
                  {/* Ensure text is white */}
                  <span className="text-white">
                    1 Years in Web & Mobile Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Adjusted bullet color */}
                  <div className="w-2 h-2 bg-abyssal-accent rounded-full" />
                  {/* Ensure text is white */}
                  <span className="text-white">2 Projects Completed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

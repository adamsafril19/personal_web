import React from "react";
import { ArrowRight, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { TypingEffect } from "./animations/TypingEffect";
import { FloatingButton } from "./animations/FloatingButton";
import cobImage from "../assets/cob.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-abyssal-base text-white relative overflow-hidden glow-section"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-abyssal-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23FF9F1C' fillOpacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-abyssal-accent/10 border border-abyssal-accent/20 backdrop-blur-sm">
                <Sparkles size={16} className="text-abyssal-accent" />
                <span className="text-sm font-medium text-abyssal-accent">Available for freelance projects</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl font-mono mb-2 text-white/80"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            >
              <TypingEffect delay={0.8} loop={true}>
                <span className="text-gradient">
                  Adam Safrila
                </span>
              </TypingEffect>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-white/90 mb-10 font-medium max-w-2xl leading-relaxed"
            >
              Crafting <span className="text-abyssal-accent">immersive</span> digital experiences through{" "}
              <span className="text-abyssal-accent">Website</span> and{" "}
              <span className="text-abyssal-accent">Mobile Development</span>
            </motion.p>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-10"
            >
              {["React", "TypeScript", "Node.js", "Tailwind", "Next.js"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-sm hover:border-abyssal-accent/50 hover:text-white transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <FloatingButton>
                <a
                  href="#contact"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contact");
                  }}
                >
                  <Mail size={24} />
                  Get in Touch
                </a>
              </FloatingButton>

              <motion.a
                href="#portfolio"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#portfolio");
                }}
              >
                <Rocket size={24} />
                Explore Work
                <ArrowRight size={24} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="mt-16 flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { label: "Projects", value: "5+" },
                { label: "Experience", value: "1 Year" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative group md:w-1/2 flex justify-center"
          >
            {/* Rotating Gradient Border */}
            <div className="relative before:absolute before:-inset-4 before:rounded-full before:bg-gradient-to-r before:from-abyssal-accent before:via-orange-500 before:to-blue-500 before:animate-spin-slow">
              <div className="relative before:absolute before:-inset-1 before:rounded-full before:bg-abyssal-base before:z-0">
                <img
                  src={cobImage}
                  alt="Adam Safrila Irawan"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-abyssal-accent/20 relative z-10 transform group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-abyssal-accent/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-abyssal-accent/30"
            >
              <Code2 size={28} className="text-abyssal-accent" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-orange-500/30"
            >
              <Rocket size={28} className="text-orange-400" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-20 -right-10 w-24 h-24 bg-abyssal-accent/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-float-delayed" />
            <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-500/15 rounded-full blur-xl animate-float animation-delay-2000" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

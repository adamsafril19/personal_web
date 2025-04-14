import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { TypingEffect } from "./animations/TypingEffect";
import { FloatingButton } from "./animations/FloatingButton";
import cobImage from "../assets/cob.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-abyssal-base text-white relative overflow-hidden glow-section" // Apply base bg, text color, and glow
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left relative">
            {/* Text Glow Effect - Adjusted */}
            <div className="absolute inset-0 bg-gradient-to-r from-abyssal-accent/10 to-transparent -skew-x-12 -z-10" />

            <p className="text-xl md:text-2xl text-white font-mono mb-2">
              {" "}
              {/* Ensure text is white */}
              Hi, I'm
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <TypingEffect delay={0.5} loop={true}>
                {/* Adjusted gradient for heading */}
                <span className="bg-gradient-to-r from-abyssal-accent to-orange-400 bg-clip-text text-transparent">
                  Adam Safrila
                </span>
              </TypingEffect>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-2xl text-white mb-10 font-medium max-w-2xl leading-relaxed" // Ensure text is white
            >
              {/* Adjusted highlight color */}
              Crafting <span className="text-abyssal-accent">
                immersive
              </span>{" "}
              digital experiences through{" "}
              <span className="text-abyssal-accent">Website</span> and{" "}
              <span className="text-abyssal-accent">Mobile Developer</span>
            </motion.p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <FloatingButton>
                <a
                  href="#contact"
                  // Adjusted button style
                  className="px-8 py-4 bg-abyssal-accent text-abyssal-base rounded-xl hover:shadow-glow-accent transition-all flex items-center gap-2 font-semibold text-lg shadow-lg hover:-translate-y-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <Mail size={24} />
                  Get in Touch
                </a>
              </FloatingButton>

              <motion.a
                href="#portfolio"
                // Adjusted button style
                className="px-8 py-4 border-2 border-abyssal-accent/50 text-white rounded-xl backdrop-blur-sm hover:bg-abyssal-accent/10 transition-all flex items-center gap-2 font-semibold text-lg shadow-lg hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#portfolio")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <ArrowRight size={24} />
                Explore Work
              </motion.a>
            </div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group md:w-1/2 flex justify-center"
          >
            {/* Adjusted image glow */}
            <div className="relative before:absolute before:-inset-4 before:rounded-full before:bg-gradient-to-r before:from-abyssal-accent before:to-orange-500 before:animate-spin-slow before:[mask-image:linear-gradient(transparent,white_50%)]">
              <img
                src={cobImage}
                alt="Adam Safrila Irawan"
                // Adjusted image border
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-abyssal-accent/20 relative z-10 transform group-hover:rotate-3 transition-transform duration-300"
              />
            </div>

            {/* Floating Elements - Adjusted colors */}
            <div className="absolute top-20 -right-10 w-24 h-24 bg-abyssal-accent/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-float-delayed" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

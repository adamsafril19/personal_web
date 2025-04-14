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
      className="min-h-screen flex items-center pt-16 bg-[url('/src/assets/bgSatu.jpg')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:to-blue-900 before:opacity-95 before:-z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between relative z-10 gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left relative">
            {/* Text Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -skew-x-12 -z-10" />

            <p className="text-xl md:text-2xl text-gray-100 font-mono mb-2">
              Hi, I'm
            </p>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              <TypingEffect delay={0.5} loop={true}>
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Adam Safrila
                </span>
              </TypingEffect>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-2xl text-gray-100 mb-10 font-medium max-w-2xl leading-relaxed"
            >
              Crafting <span className="text-primary">immersive</span> digital
              experiences through <span className="text-primary">Website</span>{" "}
              and <span className="text-primary">Mobile Developer</span>
            </motion.p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <FloatingButton>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:shadow-2xl transition-all flex items-center gap-2 font-semibold text-lg shadow-lg hover:-translate-y-1"
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
                className="px-8 py-4 border-2 border-primary/50 text-gray-100 rounded-xl backdrop-blur-sm hover:bg-primary/10 transition-all flex items-center gap-2 font-semibold text-lg shadow-lg hover:-translate-y-1"
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
            <div className="relative before:absolute before:-inset-4 before:rounded-full before:bg-gradient-to-r before:from-primary before:to-blue-500 before:animate-spin-slow before:[mask-image:linear-gradient(transparent,white_50%)]">
              <img
                src={cobImage}
                alt="Adam Safrila Irawan"
                className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white/10 relative z-10 transform group-hover:rotate-3 transition-transform duration-300"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 -right-10 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float-delayed" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

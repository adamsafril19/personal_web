import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypingEffect } from "./animations/TypingEffect";
import { FloatingButton } from "./animations/FloatingButton";
import cobImage from "../assets/cob.jpg"; // Import the image

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8')] bg-cover bg-no-repeat bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-900 before:to-emerald-950 before:opacity-90 before:-z-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              Hi, I'm{" "}
              <TypingEffect delay={0.5} loop={true}>
                <span className="text-primary">Adam Safrila Irawan</span>
              </TypingEffect>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl text-gray-100 mb-8 drop-shadow-md"
            >
              A passionate Fullstack Developer crafting beautiful and functional
              app experiences
            </motion.p>
            <div className="flex space-x-4">
              <FloatingButton>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors flex items-center"
                >
                  Contact Me
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </FloatingButton>
              <motion.a
                href="#portfolio"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const portfolioSection = document.querySelector("#portfolio");
                  portfolioSection?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                View Work
              </motion.a>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={cobImage} // Use the imported image
              alt="Professional headshot"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

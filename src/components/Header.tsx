import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#technology-stack" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-abyssal-base text-white shadow-glow-accent border-b-2 border-abyssal-accent/30">
      <nav className="container mx-auto px-6 py-4">
        {/* Oval-shaped navigation container */}
        <div className="bg-abyssal-base/80 backdrop-blur-lg rounded-full shadow-sm px-8 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-abyssal-accent">
              AS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="font-medium text-white hover:text-abyssal-accent transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com/adamsafril19"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:adamsafrila0@gmail.com"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>{" "}
        {/* End of oval container */}
        {/* Mobile Navigation Panel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`
            md:hidden absolute left-0 right-0 top-full mt-2 mx-6
            bg-abyssal-base/95 backdrop-blur-md rounded-xl shadow-lg p-6 border border-abyssal-accent/20
            ${isOpen ? "block" : "hidden"}
          `}
        >
          <div className="space-y-4">
            {/* Mobile Nav Links */}
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-center font-medium text-white hover:text-abyssal-accent transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpen(false); // Close menu on click
                }}
              >
                {item.name}
              </a>
            ))}

            {/* Divider */}
            <hr className="border-abyssal-accent/30 my-4" />

            {/* Mobile Social Links */}
            <div className="flex justify-center items-center space-x-6 pt-2">
              <motion.a
                href="https://github.com/adamsafril19"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:adamsafrila0@gmail.com"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-white"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;

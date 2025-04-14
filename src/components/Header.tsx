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
    <header className="fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        {/* Oval-shaped navigation container */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full shadow-sm px-8 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary">
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
                    className="font-medium text-gray-700 hover:text-secondary transition-colors"
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
                className="text-primary hover:text-secondary" // Diubah ke warna primary
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                whileHover={{ y: -2 }}
                className="text-primary hover:text-secondary" // Diubah ke warna primary
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:adamsafrila0@gmail.com"
                whileHover={{ y: -2 }}
                className="text-primary hover:text-secondary" // Diubah ke warna primary
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-600"
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
            bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-6
            ${isOpen ? "block" : "hidden"}
          `}
        >
          <div className="space-y-4">
            {/* Mobile Nav Links */}
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
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
            <hr className="border-gray-300 my-4" />

            {/* Mobile Social Links */}
            <div className="flex justify-center items-center space-x-6 pt-2">
              <motion.a
                href="https://github.com/adamsafril19"
                whileHover={{ y: -2 }}
                className="text-primary hover:text-secondary" // Diubah ke warna primary
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                whileHover={{ y: -2 }}
                className="text-primary hover:text-secondary" // Diubah ke warna primary
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:adamsafrila0@gmail.com"
                whileHover={{ y: -2 }}
                className="text-primary hover:text-secondary" // Diubah ke warna primary
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

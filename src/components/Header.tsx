import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount (avoids hydration mismatch)
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech", href: "#technology-stack" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-abyssal-base/95 backdrop-blur-md shadow-lg border-b border-abyssal-accent/20"
            : "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div
          className={`backdrop-blur-lg rounded-full shadow-sm px-8 py-3 transition-all duration-300 border ${
            isDark
              ? "bg-abyssal-base/80 border-abyssal-accent/20"
              : "bg-white/80 border-orange-200"
          } ${isScrolled ? "shadow-lg" : ""}`}
        >
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl font-bold text-abyssal-accent"
            >
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
                    className={`font-medium transition-colors ${
                      isDark
                        ? "text-white hover:text-abyssal-accent"
                        : "text-gray-800 hover:text-abyssal-accent"
                    }`}
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

            {/* Right side: Theme toggle + socials */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-2.5 rounded-full transition-all duration-300 border ${
                  isDark
                    ? "bg-abyssal-base/50 border-abyssal-accent/20 hover:bg-abyssal-base hover:border-abyssal-accent/40"
                    : "bg-white border-orange-300 hover:bg-orange-50 hover:border-abyssal-accent"
                }`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} className="text-orange-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} className="text-abyssal-accent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.a
                href="https://github.com/adamsafril19"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-orange-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-orange-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:adamsafrila0@gmail.com"
                whileHover={{ y: -2 }}
                className="text-abyssal-accent hover:text-orange-400 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden ${isDark ? "text-white" : "text-gray-800"}`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden absolute left-0 right-0 top-full mt-2 mx-6 backdrop-blur-md rounded-xl shadow-lg p-6 border ${
                isDark
                  ? "bg-abyssal-base/95 border-abyssal-accent/20"
                  : "bg-white/95 border-orange-200"
              }`}
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block text-center font-medium transition-colors py-2 ${
                      isDark
                        ? "text-white hover:text-abyssal-accent"
                        : "text-gray-800 hover:text-abyssal-accent"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Theme Toggle in mobile menu */}
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${
                    isDark
                      ? "border-abyssal-accent/30 text-white hover:bg-abyssal-accent/10"
                      : "border-orange-300 text-gray-800 hover:bg-orange-50"
                  }`}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm font-medium">
                    {isDark ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>

                <hr
                  className={`my-4 ${
                    isDark ? "border-abyssal-accent/30" : "border-orange-200"
                  }`}
                />

                <div className="flex justify-center items-center space-x-6 pt-2">
                  <motion.a
                    href="https://github.com/adamsafril19"
                    whileHover={{ y: -2 }}
                    className="text-abyssal-accent hover:text-orange-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/adam-safrila-5122971a2/"
                    whileHover={{ y: -2 }}
                    className="text-abyssal-accent hover:text-orange-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href="mailto:adamsafrila0@gmail.com"
                    whileHover={{ y: -2 }}
                    className="text-abyssal-accent hover:text-orange-400"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
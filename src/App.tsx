import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import TechnologyStack from "./components/TechnologyStack";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-abyssal-base dark:bg-abyssal-base light:bg-orange-50 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <TechnologyStack />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <footer className="bg-abyssal-base dark:bg-abyssal-base light:bg-orange-50 text-white light:text-gray-800 py-8 border-t border-abyssal-accent/20 light:border-orange-200 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="light:text-gray-700">© {new Date().getFullYear()} Adam Safrila. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
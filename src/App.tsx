import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import TechnologyStack from "./components/TechnologyStack";
import Services from "./components/Services"; // Import Services
import Blog from "./components/Blog"; // Import Blog

function App() {
  return (
    // Apply base background to the main container
    <div className="min-h-screen bg-abyssal-base">
      <Header />
      <main>
        <Hero />
        <About />
        <TechnologyStack />
        <Portfolio />
        <Contact />
      </main>
      {/* Apply base background to the footer */}
      <footer className="bg-abyssal-base text-white py-8 border-t border-abyssal-accent/20">
        {" "}
        {/* Added top border */}
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Adam Safrila. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

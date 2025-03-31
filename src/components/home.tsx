import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";

const Home = () => {
  const scrollToTarget = React.useCallback(() => {
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  React.useEffect(() => {
    scrollToTarget();
    // Check if there's a scroll target in sessionStorage
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      // Clear the scroll target
      sessionStorage.removeItem("scrollTarget");
      // Wait for the page to load and then scroll
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Header />

      {/* Add top margin to account for fixed header */}
      <main id="main-content" className="pt-20">
        <HeroSection />

        <div id="services">
          <ServicesGrid />
        </div>

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <div id="contact-section">
          <ContactSection />
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-6 mb-4">
            {/* Visit Us */}
            <div className="text-right">
              <h3 className="text-sm font-semibold mb-1">Visit Us</h3>
              <div className="text-xs text-gray-400 space-y-0.5">
                <p>First Federal Building</p>
                <p>1519 Av. de la Constitución</p>
                <p>San Juan, PR 00912</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-right">
              <h3 className="text-sm font-semibold mb-1">Quick Links</h3>
              <div className="flex flex-col items-end space-y-0.5">
                <a href="/" className="text-xs text-gray-400 hover:text-white">Home</a>
                <a href="/projects" className="text-xs text-gray-400 hover:text-white">Projects</a>
                <a href="/about" className="text-xs text-gray-400 hover:text-white">About</a>
                <a href="#contact" className="text-xs text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-3 text-right">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} StratSol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

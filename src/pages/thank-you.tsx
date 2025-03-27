import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Thank You!</h1>
          <p className="text-xl text-gray-400 mb-8">
            We've received your message and will get back to you soon.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors"
          >
            Return to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou; 
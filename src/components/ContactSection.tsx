import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[10%] top-[20%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] min-w-[250px] min-h-[250px] border-[30px] border-[#62368a]/50 bg-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Ready to transform your business? Let's start a conversation about
            your needs and how we can help you achieve your goals.
          </p>
          
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 h-auto"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;

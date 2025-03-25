import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Strategic Solutions for Puerto Rico's Future",
  subtitle = "A distinguished multidisciplinary consulting firm delivering data-driven strategies and expert consultation since 2016.",
  backgroundImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  ctaText = "Get Started",
  onCtaClick = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  },
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[700px] bg-[#0A0A0A] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[15%] top-[15%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] min-w-[250px] min-h-[250px] border-[30px] border-[#dfa628]/50 bg-transparent"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[10%] bottom-[20%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] min-w-[200px] min-h-[200px] border-[30px] border-[#1e69ad]/50 bg-transparent"
        />
      </div>

      {/* Content Grid */}
      <div className="relative h-full max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={onCtaClick}
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image with Creative Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-tr-[100px] rounded-bl-[100px] opacity-50 blur-lg" />

          {/* Image Container */}
          <div className="relative aspect-[4/3] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border-2 border-white/10">
            <img
              src={backgroundImage}
              alt="Abstract Business"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: ["-10px", "10px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-8 -right-8 w-[8vw] h-[8vw] max-w-[64px] max-h-[64px] min-w-[40px] min-h-[40px] border-[7px] border-[#dfa628]/50 bg-transparent backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: ["10px", "-10px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-8 -left-8 w-[6vw] h-[6vw] max-w-[48px] max-h-[48px] min-w-[32px] min-h-[32px] border-[7px] border-[#1e69ad]/50 bg-transparent backdrop-blur-sm"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

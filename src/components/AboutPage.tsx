import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import { Users, Target, Award, Briefcase, FileCheck, Brain, BarChart, DollarSign, GraduationCap, LineChart, Users2, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  
  const leftSquareY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rightSquareY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "8" },
    { icon: DollarSign, label: "Program Impact", value: "$650M+" },
    { icon: FileCheck, label: "Government Projects", value: "20+" },
    { icon: BarChart, label: "Data Visualizations", value: "16+" },
  ];

  return (
    <div className="relative w-full bg-[#0A0A0A] overflow-hidden">
      {/* Skip to content link for accessibility */}
      <a href="#about-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Floating Squares that follow scroll */}
      <motion.div
        style={{ y: leftSquareY }}
        className="fixed left-4 top-1/4 w-[10vw] h-[10vw] sm:w-[15vw] sm:h-[15vw] max-w-[200px] max-h-[200px] min-w-[60px] min-h-[60px] border-[15px] sm:border-[30px] border-[#dfa628]/20 pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: rightSquareY }}
        className="fixed right-4 top-1/3 w-[8vw] h-[8vw] sm:w-[12vw] sm:h-[12vw] max-w-[150px] max-h-[150px] min-w-[40px] min-h-[40px] border-[12px] sm:border-[30px] border-[#348a92]/20 pointer-events-none"
        aria-hidden="true"
      />

      <Header />

      <main id="about-content" className="pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Established in 2016, StratSol is a distinguished multidisciplinary consulting firm dedicated to designing, developing, and implementing strategic solutions meticulously tailored to meet the unique needs of each client. With a strong foundation built on knowledge, capability, and experience, we employ a data-driven, results-oriented approach.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-500" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-20">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                <div className="relative p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl">
                  <div className="absolute sm:-top-5 sm:-left-5 top-2 left-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 pl-4 sm:pl-10">
                    Our Mission
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    With a strong foundation built on knowledge, capability, and experience, we employ a data-driven, results-oriented approach. We integrate advanced research methodologies and rigorous scientific analysis to ensure the accuracy and relevance of our solutions, contributing to over $650 million in local and federal funding impact.
                  </p>
                  <motion.div 
                    className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Key Sectors Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-[#dfa628]/30 rounded-xl opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                <div className="relative p-8 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl">
                  <div className="absolute sm:-top-5 sm:-right-5 top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-[#dfa628] flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Key Sectors
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-base">
                    <motion.li 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-3 h-3 bg-purple-500 mr-3 rounded-full" />
                      Governance and Public Policy
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="w-3 h-3 bg-blue-500 mr-3 rounded-full" />
                      Oversight and Compliance
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-[#348a92] mr-3 rounded-full" />
                      Research, Evaluation, and Data Analysis
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="w-3 h-3 bg-[#dfa628] mr-3 rounded-full" />
                      Project Management
                    </motion.li>
                  </ul>
                  <motion.div 
                    className="w-full h-1 bg-gradient-to-r from-blue-500 to-[#dfa628] mt-6 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-7xl mx-auto px-4 py-24">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our senior consultants bring decades of combined experience in strategic planning, research, and public policy.
              </p>
            </motion.div>

            {/* Principal Consultant - Featured Section */}
            <div className="mb-32">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#62368a]/20 via-[#1e69ad]/20 to-[#dfa628]/20 rounded-2xl blur-lg opacity-75" />
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      Senior Principal Consultant
                    </div>
                    <img 
                      src="/images/josue.jpg" 
                      alt="Lcdo. Josué Jiménez López"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">Lcdo. Josué Jiménez López</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    10+ years of experience in executive and legislative consulting, specializing in public policy analysis, project management, and federal funds compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Board of Directors Section */}
            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-white">Our Consultants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Dr. Luis A. Adorno González */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#348a92]/5">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      Senior Planning & Research
                    </div>
                    <img 
                      src="/images/luis.jpg" 
                      alt="Dr. Luis A. Adorno González"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xl font-semibold text-white">Dr. Luis A. Adorno González</h4>
                    <p className="text-sm text-gray-400">
                      Licensed professional planner and economist, leading major projects including municipal recovery plans.
                    </p>
                  </div>
                </motion.div>

                {/* Ángel Rivera Montañez */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#1e69ad]/5">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      Senior Economics
                    </div>
                    <img 
                      src="/images/angel.jpg" 
                      alt="Ángel Rivera Montañez"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xl font-semibold text-white">Ángel Rivera Montañez</h4>
                    <p className="text-sm text-gray-400">
                      30+ years of expertise in public administration and economics, creator of key economic indicators.
                    </p>
                  </div>
                </motion.div>

                {/* Plan. Ángela Pérez */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#dfa628]/5">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      Planning & Project Management
                    </div>
                    <img 
                      src="/images/angela.jpg" 
                      alt="Plan. Ángela Pérez"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xl font-semibold text-white">Plan. Ángela Pérez</h4>
                    <p className="text-sm text-gray-400">
                      8+ years experience in program development and project management, specializing in federal proposals.
                    </p>
                  </div>
                </motion.div>

                {/* Trisha Alicea Lozada */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative group"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#62368a]/5">
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                      Administrative & Project Coordinator
                    </div>
                    <img 
                      src="/images/trisha.jpg" 
                      alt="Trisha Alicea Lozada"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className="text-xl font-semibold text-white">Trisha Alicea Lozada</h4>
                    <p className="text-sm text-gray-400">
                      BA in Social Sciences with expertise in HR and project coordination, managing key initiatives including Child Care Recovery Projects.
                    </p>
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-24 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-500/10 blur-2xl"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500/10 blur-2xl"></div>
            <div className="absolute left-1/4 bottom-0 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"></div>
            <div className="absolute right-1/4 top-0 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Visit Us</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-full bg-purple-500/10">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                      <p className="text-gray-400 leading-relaxed">
                        First Federal Building<br />
                        1519 Av. de la Constitución<br />
                        San Juan, PR 00912
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-full bg-blue-500/10">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => window.open('https://maps.google.com/?q=First+Federal+Building+1519+Av+de+la+Constitucion+San+Juan+PR+00912')}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Get Directions</span>
                  </Button>
                </div>
                
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800 border border-white/10">
                  <div className="absolute inset-0 bg-[url('/images/map-background.svg')] opacity-40 bg-center bg-cover"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute animate-ping w-6 h-6 rounded-full bg-purple-500/30"></div>
                      <div className="relative w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold mb-3">Visit Us</h3>
              <div className="space-y-1 text-xs text-gray-400">
                <p>First Federal Building</p>
                <p>1519 Av. de la Constitución</p>
                <p>San Juan, PR 00912</p>
              </div>
            </div>

            {/* Essential Links */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold mb-3">Quick Links</h3>
              <div className="space-y-1">
                <a href="/" className="block text-xs text-gray-400 hover:text-white">Home</a>
                <a href="/projects" className="block text-xs text-gray-400 hover:text-white">Projects</a>
                <a href="/about" className="block text-xs text-gray-400 hover:text-white">About</a>
                <a href="#contact" className="block text-xs text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} StratSol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

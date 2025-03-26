import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header";
import { Users, Target, Award, Briefcase, FileCheck, Brain, BarChart, DollarSign, GraduationCap, LineChart, Users2 } from "lucide-react";

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
        className="fixed left-4 top-1/4 w-[15vw] h-[15vw] max-w-[200px] max-h-[200px] min-w-[100px] min-h-[100px] border-[30px] border-[#dfa628]/20 pointer-events-none"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: rightSquareY }}
        className="fixed right-4 top-1/3 w-[12vw] h-[12vw] max-w-[150px] max-h-[150px] min-w-[80px] min-h-[80px] border-[30px] border-[#348a92]/20 pointer-events-none"
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
                  <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 pl-10">
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
                  <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-[#dfa628] flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
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
                      src="/images/josue.png" 
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
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-[#1e69ad] transition-colors">
                      <Briefcase className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#1e69ad] transition-colors">
                      <Users className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white hover:text-[#1e69ad] transition-colors">
                      <FileCheck className="w-6 h-6" />
                    </a>
                  </div>
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
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Visit Us</h2>
            <p className="text-xl text-gray-400">
              First Federal Building, 1519 Av. de la Constitución, San Juan,
              00912
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] rounded-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0897726098074!2d-66.10547792412868!3d18.45161798744271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f5c190d7acb%3A0x8c4e0ba5da43d0d0!2sFirst%20Federal%20Building%2C%201519%20Av.%20Constituci%C3%B3n%2C%20San%20Juan%2C%2000912%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1709598844037!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} StratSol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

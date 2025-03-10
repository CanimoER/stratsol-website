import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, LineChart, Users, Target } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  const defaultServices: Service[] = [
    {
      icon: LayoutGrid,
      title: "Strategic Planning",
      description:
        "Comprehensive business strategy development and implementation planning for sustainable growth.",
    },
    {
      icon: LineChart,
      title: "Financial Analysis",
      description:
        "In-depth financial assessment and forecasting to optimize your business performance.",
    },
    {
      icon: Users,
      title: "Organizational Development",
      description:
        "Structure and optimize your team for maximum efficiency and productivity.",
    },
    {
      icon: Target,
      title: "Market Research",
      description:
        "Data-driven insights to help you understand and capture your target market.",
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent"
        />
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-1/4 bottom-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive planning solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Glowing background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

              {/* Card content */}
              <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="mb-6 p-3 w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;

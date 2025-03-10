import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ServiceCardProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
}

const ServiceCard = ({
  icon: Icon = Briefcase,
  title = "Strategic Planning",
  description = "Comprehensive business strategy development and implementation planning for sustainable growth.",
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="w-[350px] h-[280px] bg-white"
    >
      <Card className="h-full border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-gray-900">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;

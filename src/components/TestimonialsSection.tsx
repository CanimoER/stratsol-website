import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  logo: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "",
    role: "",
    company: "ACUDEN",
    content: "La colaboración con StratSol ha fortalecido nuestras capacidades estratégicas y operativas. Su enfoque riguroso y asesoramiento especializado han sido decisivos para la planificación y evaluación de programas críticos, beneficiando a la niñez y a las familias de Puerto Rico.",
    logo: "/images/logos/futuro-logo.png",
    rating: 5,
  },
  {
    id: 2,
    name: "",
    role: "",
    company: "ASSMCA",
    content: "La experiencia comprobada de StratSol en proyectos similares y su compromiso con la mejora continua han marcado una diferencia notable en nuestros procesos. Estamos convencidos de que su metodología y recursos son clave para optimizar nuestros servicios.",
    logo: "/images/logos/ASSMCA.png",
    rating: 5,
  },
  {
    id: 3,
    name: "",
    role: "",
    company: "OGP",
    content: "En nuestra búsqueda de soluciones integrales para enfrentar desafíos en planificación, análisis de datos y gestión de proyectos, confiamos plenamente en StratSol. Su capacidad técnica y experiencia han sido fundamentales para asegurar el éxito de nuestros procesos.",
    logo: "/images/logos/OGP.png",
    rating: 5,
  }
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
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
            duration: 180,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[20%] top-[20%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] min-w-[200px] min-h-[200px] border-[30px] border-[#dfa628]/20 bg-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from organizations we've helped transform through strategic planning and data-driven solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
              <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                {/* Organization Logo */}
                <div className="h-24 mb-6 flex items-center justify-center bg-white/25 rounded-lg px-8 py-4 shadow-lg">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="h-full w-auto object-contain opacity-100 transition-transform hover:scale-105 duration-300"
                  />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-400 text-center mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="font-semibold text-white">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

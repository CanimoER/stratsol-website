import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { Download, Share2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Legal Representation and Advisory for ACUDEN",
    description: "A professional services contract where STRATSOL provides legal representation and advisory services to ACUDEN for managing federal funds allocated to childcare programs (Head Start/Early Head Start and the Child Care and Development Fund).",
    imageUrl: "/projects/legal-advisory.jpeg",
    pdfUrl: "/pdfs/ACUDEN_Legal_Advisory.pdf"
  },
  {
    id: 2,
    title: "Strategic Planning Consultancy for ACUDEN",
    description: "A consulting and technical assistance service for ACUDEN's Planning Office that includes policy analysis, strategy design, and the development of performance indicators to monitor program implementation.",
    imageUrl: "/projects/strategic-planning.jpeg",
    pdfUrl: "/pdfs/ACUDEN_Strategic_Planning.pdf"
  },
  {
    id: 3,
    title: "PECC Case Management for ACUDEN",
    description: "A contract focused on the implementation and monitoring of the Child Care Stabilization Program (PECC), with STRATSOL supporting the comprehensive process from case intake to closure, aimed at improving access and quality in childcare services.",
    imageUrl: "/projects/case-management.jpeg",
    pdfUrl: "/pdfs/ACUDEN_PECC_Case_Management.pdf"
  },
  {
    id: 4,
    title: "Traffic Safety Attitude Survey Study for CST",
    description: "A professional service to conduct surveys and analyze data to evaluate the effectiveness of traffic safety campaigns and messages, ensuring compliance with federal guidelines and a representative sample of the target population.",
    imageUrl: "/projects/traffic-safety.jpeg",
    pdfUrl: "/pdfs/CST_Traffic_Safety_Survey.pdf"
  },
  {
    id: 5,
    title: "Evaluation of the ACUDEN Recovery HUB",
    description: "A services contract to assess the impact of federal funds allocated under the Covid-19 response through the ACUDEN Recovery HUB project, identifying areas for improvement and optimizing resource allocation.",
    imageUrl: "/projects/recovery-hub.jpeg",
    pdfUrl: "/pdfs/ACUDEN_Recovery_Hub_Evaluation.pdf"
  },
  {
    id: 6,
    title: "Consultancy for the OGP (Office of Management and Budget)",
    description: "A professional consulting service focused on planning, project management, and data analysis for the OGP, including the creation of reports and interactive dashboards to support decision-making.",
    imageUrl: "/projects/ogp-consultancy.jpeg",
    pdfUrl: "/pdfs/1430_2025-000027_SSC.pdf"
  },
  {
    id: 7,
    title: "Community Needs Assessment Study for the Municipality of Guayama",
    description: "A project funded by SLFRF-ARPA funds designed to conduct a comprehensive study in Guayama using surveys, geospatial analysis, and data review to identify service gaps and provide recommendations for community improvement.",
    imageUrl: "/projects/guayama-assessment.jpeg",
    pdfUrl: "/pdfs/4030_2025-000292_SSC.pdf"
  },
  {
    id: 8,
    title: "Strategic Consultancy for the 2024-2027 State Child Care Plan",
    description: "Technical assistance and consulting services aimed at implementing the new State Child Care Plan, including the development of protocols, updating manuals, staff training, and report generation to ensure compliance with new guidelines.",
    imageUrl: "/projects/childcare-plan.jpeg",
    pdfUrl: "/pdfs/2251_2025-000446_SSC.pdf"
  },
  {
    id: 9,
    title: "Community Needs Study for Head Start Programs",
    description: "A contract to conduct a comprehensive study using both quantitative and qualitative methodologies to identify needs and gaps in Head Start programs, optimize fund distribution, and guide future interventions in childcare services.",
    imageUrl: "/projects/head-start-study.jpeg",
    pdfUrl: "/pdfs/2251_2025-000479_SSC.pdf"
  },
  {
    id: 10,
    title: "Integrated Management of the Mental Health and Addiction Observatory",
    description: "A professional and consulting service to enhance the collection, management, and analysis of data for the Mental Health and Addiction Observatory, providing reports and community briefs to support decision-making at ASSMCA.",
    imageUrl: "/projects/mental-health-observatory.jpeg",
    pdfUrl: "/pdfs/2245_2025-951785_SSC.pdf"
  },
  {
    id: 11,
    title: "Child Care Program Needs Assessment Study",
    description: "Un estudio realizado por StratSol, Inc. para ACUDEN que identifica y prioriza las necesidades críticas en los servicios de cuidado infantil en Puerto Rico, estableciendo una base para mejoras en calidad y eficiencia.",
    imageUrl: "/projects/childcare-needs.jpeg",
    pdfUrl: "/pdfs/childcare-needs-assessment.pdf"
  },
  {
    id: 12,
    title: "Child Care Services Gap Analysis",
    description: "Un informe analítico que examina las áreas desiertas y brechas de cobertura en el programa Child Care, destacando oportunidades para ampliar el acceso y atender mejor a la niñez temprana.",
    imageUrl: "/projects/childcare-gap.jpeg",
    pdfUrl: "/pdfs/childcare-gap-analysis.pdf"
  },
  {
    id: 13,
    title: "Early Childhood Recovery Programs Impact Report",
    description: "Un reporte preliminar elaborado por StratSol, Inc. para ACUDEN que detalla el uso e impacto de los fondos de recuperación (CARES, PECC, PAL y PIO) en el sector de cuidado infantil, evidenciando resultados en retención de empleados, mejoras en infraestructuras y apoyo a las familias.",
    imageUrl: "/projects/recovery-impact.jpeg",
    pdfUrl: "/pdfs/recovery-programs-report.pdf"
  }
];

const ProjectsPage = () => {
  const [downloading, setDownloading] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDownload = async (project: Project) => {
    try {
      setDownloading(project.id);
      const response = await fetch(project.pdfUrl);
      if (!response.ok) throw new Error('Failed to download PDF');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = project.pdfUrl.split('/').pop() || 'document.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: "Your case study is being downloaded.",
        className: "bg-green-500 text-white",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the case study. Please try again.",
        variant: "destructive",
        className: "bg-red-500 text-white",
      });
    } finally {
      setDownloading(null);
    }
  };

  const handleShare = (project: Project) => {
    // In development mode, show a message about sharing limitation
    if (window.location.hostname === 'localhost') {
      toast({
        title: "Sharing Not Available in Development",
        description: "PDF sharing is only available when the site is deployed. Please download the PDF instead.",
        className: "bg-yellow-500 text-white",
      });
      return;
    }

    // For production, use the full URL
    const url = window.location.origin + project.pdfUrl;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link Copied",
      description: "The case study link has been copied to your clipboard.",
      className: "bg-blue-500 text-white",
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our successful planning projects and download detailed case studies
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            console.error(`Error loading image: ${project.imageUrl}`);
                            console.error('Full image path:', window.location.origin + project.imageUrl);
                            e.currentTarget.src = "https://placehold.co/800x450/1a1a1a/666666";
                          }}
                          onLoad={() => {
                            console.log(`Successfully loaded image: ${project.imageUrl}`);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex gap-4">
                        <Button
                          onClick={() => handleDownload(project)}
                          disabled={downloading === project.id}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          {downloading === project.id ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Downloading...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2" />
                              Download Case Study
                            </>
                          )}
                        </Button>
                        <Button
                          onClick={() => handleShare(project)}
                          className="border-white/10 text-white hover:bg-white/10"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage; 
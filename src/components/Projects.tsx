import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Scale, Stethoscope } from "lucide-react";
import lawFirmImage from "@/assets/law-firm-project.jpg";
import infrastructureImage from "@/assets/infrastructure-project.jpg";
import dentalImage from "@/assets/dental-project.jpg";

const projects = [
  {
    title: "Rights Law Firm",
    description:
      "Building a modern, professional website for Rights Law Firm with responsive design, service pages, and contact forms.",
    icon: Scale,
    status: "In Progress",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    image: lawFirmImage,
  },
  {
    title: "El Shibili Construction & Development Portal",
    description:
      "Developing a comprehensive web portal for El Shibili, a construction and development company, showcasing their services and projects.",
    icon: Building2,
    status: "In Progress",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: infrastructureImage,
  },
  {
    title: "Premium Dental Supplies",
    description:
      "Creating an e-commerce platform for premium dental equipment and supplies, featuring product catalogs, ordering system, and customer portal.",
    icon: Stethoscope,
    status: "In Progress",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: dentalImage,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="group hover:scale-[1.02] sm:hover:scale-105 transition-all duration-500 border-2 hover:border-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "var(--shadow-glow)" }}
        />

        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border-primary/30 animate-glow-pulse"
            >
              {project.status}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
          <CardDescription className="text-base mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="group-hover:border-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

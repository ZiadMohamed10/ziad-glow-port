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
import { Building2, Scale } from "lucide-react";
import lawFirmImage from "@/assets/law-firm-project.jpg";
import infrastructureImage from "@/assets/infrastructure-project.jpg";

const projects = [
  {
    title: "Rights Law Firm Website",
    description:
      "Building a modern, professional website for Rights Law Firm with responsive design, service pages, and contact forms.",
    icon: Scale,
    status: "In Progress",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    image: lawFirmImage,
  },
  {
    title: "El Shibli Construction & Development Portal",
    description:
      "Developing a comprehensive web portal for El Shibli, a construction and development company, showcasing their services and projects.",
    icon: Building2,
    status: "In Progress",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: infrastructureImage,
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
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 glass-effect">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none neon-border" />

          {/* Image with parallax-like effect */}
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            
            {/* Floating icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 p-3 rounded-xl glass-effect"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          </div>

          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
              >
                <Icon className="w-8 h-8 text-primary" />
              </motion.div>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-primary/30 to-accent/30 text-foreground border-primary/40 animate-glow-pulse"
              >
                {project.status}
              </Badge>
            </div>
            
            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            
            <CardDescription className="text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>

          {/* Shimmer effect on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            }}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";

const experiences = [
  {
    icon: Code,
    year: "2022 - Present",
    title: "Frontend Developer",
    company: "Freelance",
    description: "Building modern, responsive web applications with React, TypeScript, and Tailwind CSS. Focused on creating exceptional user experiences.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    year: "2023",
    title: "Rights Law Firm Website",
    company: "Client Project",
    description: "Developing a professional law firm website with clean design, responsive layouts, and optimized performance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    year: "2023",
    title: "El Shibli Construction Portal",
    company: "Client Project",
    description: "Creating a comprehensive web portal for a construction company, showcasing services and project portfolio.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: GraduationCap,
    year: "2021",
    title: "Started Web Development Journey",
    company: "Self-taught",
    description: "Began learning HTML, CSS, and JavaScript. Built foundational knowledge through online courses and personal projects.",
    color: "from-green-500 to-emerald-500",
  },
];

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

  const Icon = experience.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="relative mb-16 md:mb-24"
    >
      <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline Line & Icon */}
        <div className="relative flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-2xl`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          
          {/* Connecting Line */}
          {index < experiences.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent origin-top"
            />
          )}
        </div>

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.03, x: isLeft ? 10 : -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex-1 glass-effect rounded-2xl p-6 md:p-8 neon-border"
        >
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white`}>
                {experience.year}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {experience.title}
            </h3>
            
            <p className="text-lg text-primary font-semibold mb-3">
              {experience.company}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="relative py-20 px-6 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent opacity-50"
      />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience & Milestones
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

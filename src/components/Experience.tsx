import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Android Developer Intern",
    company: "Systemira",
    period: "2026 – Present",
    description:
      "Currently gaining hands-on experience in Android development, working on building mobile applications and improving performance while collaborating with a development team.",
  },
  {
    role: "Front-end Developer (Freelance)",
    company: "Remote",
    period: "2025 – Present",
    description:
      "Developing modern and responsive web applications using React.js, focusing on performance, UI/UX, and scalable frontend architecture.",
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative border-l border-primary/30 pl-6 space-y-10"
        >
          {experiences.map((exp, index) => (
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg 
  hover:shadow-2xl hover:border-primary/50 
  transition-all duration-300 
  relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>

                <p className="text-primary font-medium mb-1">{exp.company}</p>

                <p className="text-sm text-muted-foreground mb-3">
                  {exp.period}
                </p>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

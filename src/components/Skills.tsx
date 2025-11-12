import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    title: "Coding",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    title: "Projects & Deploy",
    skills: [
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },
];

const SkillCard = ({
  title,
  skills,
  index,
}: {
  title: string;
  skills: Array<{ name: string; icon: string }>;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:scale-105 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "var(--shadow-glow)" }}
        />

        <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4 justify-items-center px-2">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.12, y: -5 }}
              className="relative group/icon"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center p-1 bg-white/10 rounded transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(var(--neon-glow))]"
                  />
                </div>
                <span className="text-xs text-center opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 bg-white/20 rounded px-2 py-1 max-w-[80px] break-words">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

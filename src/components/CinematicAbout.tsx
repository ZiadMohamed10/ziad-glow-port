import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Palette, Zap, Heart, Rocket, Star } from "lucide-react";
import profileImage from "@/assets/ziad-headshot.jpg";

const skills = [
  { icon: Code2, label: "Clean Code", color: "from-blue-500 to-cyan-500" },
  { icon: Palette, label: "UI/UX Design", color: "from-purple-500 to-pink-500" },
  { icon: Zap, label: "Performance", color: "from-yellow-500 to-orange-500" },
  { icon: Heart, label: "User-Focused", color: "from-red-500 to-pink-500" },
  { icon: Rocket, label: "Innovation", color: "from-green-500 to-emerald-500" },
  { icon: Star, label: "Excellence", color: "from-indigo-500 to-purple-500" },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="text-glow"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-primary ml-1"
      />
    </motion.span>
  );
};

export const CinematicAbout = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('about')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const aboutSection = document.getElementById('about');
    aboutSection?.addEventListener('mousemove', handleMouseMove);
    return () => aboutSection?.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background with Noise Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Spotlight Effect Following Mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          x,
          y,
          background: 'radial-gradient(circle, hsl(var(--neon-glow) / 0.2), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <TypewriterText text="About Me" delay={0.5} />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with Orbiting Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Portrait with Spotlight Frame */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-full h-full rounded-full overflow-hidden neon-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-overlay" />
                <img
                  src={profileImage}
                  alt="Ziad Mohamed"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Orbiting Skills */}
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const angle = (index / skills.length) * 360;

                return (
                  <motion.div
                    key={skill.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      x: '-50%',
                      y: '-50%',
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (index / skills.length) * 20,
                    }}
                  >
                    <motion.div
                      style={{
                        rotate: (angle - 90),
                        x: 180,
                      }}
                      whileHover={{ scale: 1.3 }}
                      className="relative"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-xl cursor-pointer group`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-card px-2 py-1 rounded">
                          {skill.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 neon-border">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg leading-relaxed mb-6"
              >
                I'm <span className="text-primary font-bold">Ziad Mohamed</span>, a frontend developer 
                with <span className="text-primary font-bold">3 years of experience</span> building 
                responsive, high-performance web interfaces using HTML, CSS, JavaScript, TypeScript, and React.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg leading-relaxed mb-6"
              >
                I focus on creating <span className="text-primary font-bold">clean, maintainable code</span> and 
                visually polished designs that deliver exceptional user experiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-lg leading-relaxed"
              >
                Currently working on exciting projects including a law firm website and 
                a government infrastructure portal.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3"
            >
              {["Responsive Design", "Performance", "Accessibility", "Modern UI"].map((tag, i) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

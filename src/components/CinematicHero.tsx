import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Code2, Palette, Rocket, Zap, Star, Sparkles } from "lucide-react";

const floatingElements = [
  { icon: Code2, label: "React", delay: 0 },
  { icon: Palette, label: "Design", delay: 0.5 },
  { icon: Rocket, label: "Fast", delay: 1 },
  { icon: Zap, label: "Modern", delay: 1.5 },
  { icon: Star, label: "Quality", delay: 2 },
  { icon: Sparkles, label: "Creative", delay: 2.5 },
];

export const CinematicHero = () => {
  const [showElements, setShowElements] = useState(true);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const spotlightX = useTransform(mouseX, (value) => `${value}%`);
  const spotlightY = useTransform(mouseY, (value) => `${value}%`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX} ${spotlightY}, hsl(var(--neon-glow) / 0.25), transparent 60%)`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Title with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
          className="relative"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 relative"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--gradient-start)), 
                hsl(var(--gradient-end)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px hsl(var(--neon-glow) / 0.5))',
            }}
          >
            ZIAD
          </motion.h1>

          {/* Floating Elements Around Title */}
          <AnimatePresence>
            {showElements && floatingElements.map((item, index) => {
              const Icon = item.icon;
              const angle = (index / floatingElements.length) * 360;
              const radius = 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.2, 1, 0.5],
                    x: [0, x, x, 0],
                    y: [0, y, y, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    times: [0, 0.3, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="glass-effect neon-border rounded-2xl p-4 flex flex-col items-center gap-2">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Subtitle with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mb-8"
        >
          <motion.p
            className="text-2xl md:text-4xl text-muted-foreground font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Frontend Developer & Creative Designer
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 text-lg font-semibold rounded-full overflow-hidden bg-primary text-primary-foreground"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-primary text-foreground glass-effect hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

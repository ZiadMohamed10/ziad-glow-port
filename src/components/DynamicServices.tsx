import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Palette, Rocket, Zap, Globe, Smartphone } from "lucide-react";

const services = [
  { icon: Code, label: "Web Development", color: "from-blue-500 to-cyan-500" },
  { icon: Palette, label: "UI/UX Design", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, label: "Performance", color: "from-orange-500 to-red-500" },
  { icon: Zap, label: "Animations", color: "from-yellow-500 to-orange-500" },
  { icon: Globe, label: "Responsive", color: "from-green-500 to-emerald-500" },
  { icon: Smartphone, label: "Mobile-First", color: "from-indigo-500 to-purple-500" },
];

export const DynamicServices = () => {
  const [phase, setPhase] = useState<"beam" | "show" | "collapse">("beam");

  useEffect(() => {
    const beamTimer = setTimeout(() => setPhase("show"), 1000);
    const showTimer = setTimeout(() => setPhase("collapse"), 5000);
    const resetTimer = setTimeout(() => setPhase("beam"), 8000);

    return () => {
      clearTimeout(beamTimer);
      clearTimeout(showTimer);
      clearTimeout(resetTimer);
    };
  }, [phase]);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground">
            Full-Stack Frontend Excellence
          </p>
        </motion.div>

        {/* Central Display */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Volumetric Light Beam */}
          <AnimatePresence>
            {phase === "beam" && (
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.6 }}
                exit={{ scaleY: 0, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-full origin-top"
                style={{
                  background: `linear-gradient(to bottom, 
                    hsl(var(--neon-glow) / 0.4), 
                    hsl(var(--neon-glow) / 0.2), 
                    transparent)`,
                  filter: 'blur(30px)',
                }}
              />
            )}
          </AnimatePresence>

          {/* Central Word */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: phase === "collapse" ? 0 : 1, 
              scale: phase === "collapse" ? 0.5 : 1,
            }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <h3 
              className="text-7xl md:text-9xl font-bold text-center"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--gradient-start)), 
                  hsl(var(--gradient-end)))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 40px hsl(var(--neon-glow) / 0.6))',
              }}
            >
              CREATOR
            </h3>
          </motion.div>

          {/* Scattered Services */}
          <AnimatePresence>
            {phase === "show" && services.map((service, index) => {
              const Icon = service.icon;
              const angle = (index / services.length) * 360;
              const radius = 280;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x,
                    y,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.3,
                    x: 0,
                    y: 0,
                    transition: { delay: index * 0.05, duration: 0.4 },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`glass-effect rounded-2xl p-6 neon-border bg-gradient-to-br ${service.color} cursor-pointer`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Icon className="w-10 h-10 text-white" />
                      <span className="text-sm font-bold text-white whitespace-nowrap">
                        {service.label}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Collapse Effect - Particles flowing into center */}
          {phase === "collapse" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0"
            >
              {services.map((_, index) => {
                const angle = (index / services.length) * 360;
                const radius = 280;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ x, y, opacity: 1, scale: 1 }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-primary"
                  />
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

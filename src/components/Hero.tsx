import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

// Floating code snippets for 3D depth effect
const codeSnippets = [
  { code: "<div>", x: "10%", y: "20%", delay: 0, size: "text-sm" },
  { code: "const", x: "85%", y: "15%", delay: 0.5, size: "text-base" },
  { code: "{ }", x: "5%", y: "70%", delay: 1, size: "text-lg" },
  { code: "=>", x: "90%", y: "65%", delay: 1.5, size: "text-xl" },
  { code: "</> ", x: "15%", y: "45%", delay: 0.3, size: "text-xs" },
  { code: "[ ]", x: "80%", y: "40%", delay: 0.8, size: "text-sm" },
  { code: "function", x: "8%", y: "85%", delay: 1.2, size: "text-xs" },
  { code: "return", x: "88%", y: "80%", delay: 0.6, size: "text-sm" },
];

// Floating geometric shapes for depth
const shapes = [
  { type: "circle", x: "20%", y: "30%", size: 60, delay: 0.2 },
  { type: "square", x: "75%", y: "25%", size: 40, delay: 0.7 },
  { type: "circle", x: "70%", y: "75%", size: 80, delay: 1.1 },
  { type: "square", x: "25%", y: "80%", size: 50, delay: 0.4 },
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient orbs for depth - GPU accelerated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-3xl"
          style={{ left: "10%", top: "20%" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-gradient-to-br from-[hsl(var(--gradient-end))]/35 to-transparent blur-3xl"
          style={{ right: "10%", bottom: "20%" }}
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating code snippets with 3D effect - hidden on mobile for clean look */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className={`absolute ${snippet.size} font-mono text-primary/60 select-none pointer-events-none hidden md:block`}
          style={{
            left: snippet.x,
            top: snippet.y,
            perspective: "1000px",
          }}
          initial={{ opacity: 0, z: -100 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -15, 0],
            rotateX: [0, 5, 0],
            rotateY: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: snippet.delay,
          }}
        >
          <span className="drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
            {snippet.code}
          </span>
        </motion.div>
      ))}

      {/* Geometric shapes for depth layers - hidden on mobile */}
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute pointer-events-none hidden md:block"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.2, 1],
            rotate: shape.type === "square" ? [0, 45, 0] : 0,
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          <div
            className={`w-full h-full border-2 border-primary/40 ${
              shape.type === "circle" ? "rounded-full" : "rounded-lg"
            } backdrop-blur-sm`}
          />
        </motion.div>
      ))}

      {/* Grid lines for tech feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content with enhanced depth */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ perspective: "1000px" }}
        >
          <motion.div
            initial={{ rotateX: 10 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ziad Mohamed
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="relative">
              Frontend Developer
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            2 Years of Experience Building Modern Web Interfaces
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group border-2 hover:border-primary hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

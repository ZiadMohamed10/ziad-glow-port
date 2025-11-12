import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ziad Mohamed
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer
          </motion.p>
          
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            3 Years of Experience Building Modern Web Interfaces
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
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="group border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

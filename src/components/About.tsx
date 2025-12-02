import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import profileImage from "@/assets/ziad-headshot.jpg";
const strengths = ["Clean & maintainable code", "Responsive design & accessibility", "Fast, modern, and user-friendly UI", "Smooth animations and transitions"];
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  return <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </motion.div>

        <motion.div ref={ref} initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.8
      }} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -50
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse" />
              <img src={profileImage} alt="Ziad Mohamed" className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 50
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Ziad Mohamed, a frontend developer with 3 years of experience building responsive, 
              high-performance web interfaces using HTML, CSS, JavaScript, TypeScript, and React. 
              I focus on creating clean, maintainable code and visually polished designs.
            </p>
            
            

            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold mb-4">What I Bring:</h3>
              {strengths.map((strength, index) => <motion.div key={strength} initial={{
              opacity: 0,
              x: -20
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.1
            }} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-base">{strength}</span>
                </motion.div>)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
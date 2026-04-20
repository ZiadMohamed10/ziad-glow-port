import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import {Experience} from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MarqueeName } from "@/components/MarqueeName";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-500 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <MarqueeName />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

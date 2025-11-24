import { ThemeToggle } from "@/components/ThemeToggle";
import { CinematicHero } from "@/components/CinematicHero";
import { CinematicAbout } from "@/components/CinematicAbout";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { DynamicServices } from "@/components/DynamicServices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <ThemeToggle />
      <CinematicHero />
      <CinematicAbout />
      <ExperienceTimeline />
      <DynamicServices />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

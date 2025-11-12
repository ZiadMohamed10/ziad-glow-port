import Head from 'next/head';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Ziad Mohamed Portfolio</title>
        <meta name="description" content="Front-end Developer Portfolio" />
        <meta property="og:title" content="Ziad Mohamed Portfolio" />
        <meta property="og:description" content="Front-end Developer Portfolio" />
        <meta property="og:image" content="/public/preview.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziadmohamedportfolio.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/new-preview.jpg" />
      </Head>

      <div className="min-h-screen transition-colors duration-500">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;

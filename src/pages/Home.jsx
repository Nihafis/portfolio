import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { SkillsSection } from "../components/SkillsSEction";
import { StarBackground } from "../components/StarBackground";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
   
      {/* background Effects */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main */}
    <main>
        <HeroSection/>
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
    </main>
      {/* footer */}
    </div>
  );
};

import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background Effects */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main */}
    <main>
        <HeroSection/>
        <AboutSection />
    </main>
      {/* footer */}
    </div>
  );
};

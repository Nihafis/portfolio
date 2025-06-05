import { ArrowDown } from "lucide-react";
import { AvatarComponent } from "./ui/Avatar";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center">
            <AvatarComponent />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nihafis
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {""}
              Hasamoh
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground 
                        max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"
          >
            I'm a full stack developer with a passion for building web
            applications 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#experiance"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139, 92, 246, 0.5)] hover:scale-105 active:scale-95"
              >
                View My Experience
              </a>
            </div>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139, 92, 246, 0.5)] hover:scale-105 active:scale-95"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transfrom -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-semibold text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
};

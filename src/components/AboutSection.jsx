import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About
          <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Develeper & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a tech creator with a passion for building web applications
              and tools that help people live better lives.
            </p>

            <p className="text-muted-foreground">
              I'm a tech creator with a passion for building web applications
              and tools that help people live better lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139, 92, 246, 0.5)] hover:scale-105 active:scale-95"
              >
                {""}
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/70 transition-colors  text-primary-foreground font-mediumduration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    I'm a tech creator with a passion for building web
                    applications and tools that help people live better lives.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Create a robust and scalable backend for web applications.
                    and API for mobile applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Tech Creator</h4>
                  <p className="text-muted-foreground">
                    I'm a tech creator with a passion for building web
                    applications and tools that help people live better lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
              Backend-Focused Software Developer
            </h3>

            <p className="text-muted-foreground">
              I’m a Software Developer specializing in scalable and secure backend systems,
              focusing on reliable APIs, performance optimization, and system security.
            </p>

            <p className="text-muted-foreground">
              With a background in full-stack development, I deliver high-quality solutions
              and solve complex problems in real-world applications.
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
                href="/Resume_Nihafis.pdf"
                download
                className="px-6 py-2 rounded-full font-semibold  text-primary border border-primary hover:bg-primary/70 transition-colors   font-mediumduration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Frontend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>

                <div className="text-left space-y-2">
                  <h4 className="text-lg font-semibold">Frontend Development</h4>

                  <p className="text-muted-foreground">
                    Build responsive, high-performance user interfaces with modern web technologies.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">React</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">Tailwind</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">Shadcn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>

                <div className="text-left space-y-2">
                  <h4 className="text-lg font-semibold">Backend Systems</h4>

                  <p className="text-muted-foreground">
                    Design scalable, secure backend systems with microservices, caching, and event-driven architecture.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">NestJS</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">Kafka</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">Redis</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">JWT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div className="text-left space-y-2">
                  <h4 className="text-lg font-semibold">Database & Data Engineering</h4>

                  <p className="text-muted-foreground">
                    Optimize data models and queries for scalability, performance, and reliability.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">MongoDB</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">MySQL</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">Aggregation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

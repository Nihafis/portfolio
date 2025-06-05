import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  {
    name: "HTML",
    level: 100,
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 100,
    category: "frontend",
  },
  {
    name: "JavaScript",
    level: 100,
    category: "frontend",
  },
  {
    name: "PHP",
    level: 100,
    category: "backend",
  },
  {
    name: "CodeIgniter",
    level: 80,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    level: 100,
    category: "frontend",
  },
  {
    name: "Bootstrap",
    level: 100,
    category: "frontend",
  },
  {
    name: "Node.js",
    level: 100,
    category: "backend",
  },
  {
    name: "Express.js",
    level: 100,
    category: "backend",
  },
  {
    name: "Next.js",
    level: 50,
    category: "frontend",
  },
  {
    name: "Vue.js",
    level: 50,
    category: "frontend",
  },
  {
    name: "React",
    level: 60,
    category: "frontend",
  },
  {
    name: "MySQL",
    level: 100,
    category: "database",
  },
  {
    name: "MongoDB",
    level: 50,
    category: "database",
  },
  {
    name: "PostgreSQL",
    level: 50,
    category: "database",
  },
  {
    name: "MSSQL",
    level: 50,
    category: "database",
  },
  {
    name: "Redis",
    level: 100,
    category: "database",
  },
  {
    name: "Docker",
    level: 20,
    category: "tools",
  },
  {
    name: "Git",
    level: 50,
    category: "tools",
  },
  {
    name: "CursorAI",
    level: 100,
    category: "tools",
  },
  {
    name: "Postman",
    level: 100,
    category: "tools",
  },
  {
    name: "Linux",
    level: 100,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "database", "tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="relative px-4 py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:tetx-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2   lg:grid-cols-3 gap-3 sm:gap-6 animate-fade-in">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover w-full "
            >
              <div className="text-left mb-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 orgin-left animate-[grow_1.5s_ease-in-out] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

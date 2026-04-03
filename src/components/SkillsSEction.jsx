import { useState } from "react";
import { cn } from "../lib/utils";

// icons
import {
  FaHtml5, FaCss3Alt, FaJs, FaLinux, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPhp
} from "react-icons/fa";

import {
  SiTypescript, SiTailwindcss, SiBootstrap, SiNextdotjs, SiVuedotjs,
  SiMysql, SiMongodb, SiPostgresql, SiRedis, SiNestjs,
  SiSocketdotio, SiApachekafka, SiCodeigniter, SiPostman, SiArgo, SiElastic, SiKibana
} from "react-icons/si";

const skills = [
  { name: "HTML", level: 100, category: "frontend", icon: FaHtml5 },
  { name: "CSS", level: 100, category: "frontend", icon: FaCss3Alt },
  { name: "JavaScript", level: 100, category: "frontend", icon: FaJs },
  { name: "TypeScript", level: 100, category: "frontend", icon: SiTypescript },
  { name: "React", level: 60, category: "frontend", icon: FaReact },
  { name: "Next.js", level: 50, category: "frontend", icon: SiNextdotjs },
  { name: "Vue.js", level: 50, category: "frontend", icon: SiVuedotjs },
  { name: "Tailwind CSS", level: 100, category: "frontend", icon: SiTailwindcss },
  { name: "Bootstrap", level: 100, category: "frontend", icon: SiBootstrap },

  { name: "Node.js", level: 100, category: "backend", icon: FaNodeJs },
  { name: "NestJS", level: 100, category: "backend", icon: SiNestjs },
  { name: "Socket.IO", level: 100, category: "backend", icon: SiSocketdotio },
  { name: "PHP", level: 100, category: "backend", icon: FaPhp },
  { name: "CodeIgniter", level: 80, category: "backend", icon: SiCodeigniter },

  { name: "MySQL", level: 100, category: "database", icon: SiMysql },
  { name: "MongoDB", level: 100, category: "database", icon: SiMongodb },
  { name: "PostgreSQL", level: 50, category: "database", icon: SiPostgresql },
  { name: "Redis", level: 100, category: "database", icon: SiRedis },

  { name: "Docker", level: 50, category: "tools", icon: FaDocker },
  { name: "Git", level: 100, category: "tools", icon: FaGitAlt },
  { name: "Kafka", level: 100, category: "tools", icon: SiApachekafka },
  { name: "Postman", level: 100, category: "tools", icon: SiPostman },
  { name: "Linux and WSL", level: 100, category: "tools", icon: FaLinux },
  { name: "ArgoCICD", level: 100, category: "tools", icon: SiArgo },
  { name: "Elastic Kibana", level: 100, category: "tools", icon: SiKibana },
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter */}
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

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover w-full group"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-2 mb-3">
                {skill.icon && (
                  <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                )}
                <h3 className="text-sm sm:text-base font-semibold">
                  {skill.name}
                </h3>
              </div>

              {/* Progress */}
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 origin-left animate-[grow_1.5s_ease-in-out] rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percent */}
              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">
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
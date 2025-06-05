import {
  ArrowRight,
  CircleX,
  ExternalLink,
  Github,
  GithubIcon,
  Images,
} from "lucide-react";
import SwiperComponent from "./ui/Swiper";
import { useState } from "react";
const projects = [
  {
    id: 1,
    title: "Mern-Blog",
    description: "A blog website built with MERN stack",
    image: ["/projects/mern-post.png", "/projects/mern-dash.png"],
    tags: [
      "MERN",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
    ],
    demoUrl: "https://mern-blog-pqp1.onrender.com/",
    githubUrl: "https://github.com/Nihafis/mern-blog",
  },
  {
    id: 2,
    title: "Task-Manager",
    description:
      "Task management system built using Vue.js for the frontend, Node.js for the backend, MySQL as the database, and Docker for containerization.",
    image: "/projects/task-manager.png",
    tags: ["Express", "Vue3", "Node.js", "Tailwind CSS", "Mysql", "Docker","JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/Nihafis/task-main",
  },
  {
    id: 3,
    title: "Natours",
    description: "A tour booking website built with Node.js and MongoDB",
    image: [
      "/projects/natour/natour.png",
      "/projects/natour/natour2.png",
      "/projects/natour/natour3.png",
      "/projects/natour/natour4.png",
      "/projects/natour/natour5.png",
    ],
    tags: ["Node.js", "MongoDB", "Express", "Stripe", "Nodemailer"],
    demoUrl: "https://natours-nodejs-z5a2.onrender.com/",
    githubUrl: "https://github.com/Nihafis/Natours-nodejs",
  },
];

export const ProjectSection = () => {
  // const [activeImage, setActiveImage] = useState(projects[0].image[0]);
  const [showSwiper, setShowSwiper] = useState(false);
  const [imageSlides, setImageSlides] = useState([]);

  const handleImageClick = (image) => {
    setShowSwiper(true);
    setImageSlides(image);
  };
  return (
    <section id="projects" className="relative px-4 py-24 ">
      {showSwiper && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <button
            onClick={() => setShowSwiper(false)}
            className="absolute top-20 right-4 z-60"
          >
            {" "}
            <CircleX size={20} />{" "}
          </button>
          <SwiperComponent images={imageSlides} />
        </div>
      )}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects in my portfolio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              project={project}
              className="group bg-card rouded-lg  overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="hover:cursor-pointer w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={project.title}
                  src={project.image[0]}
                  onClick={() => handleImageClick(project.image)}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${project.id}-${tagIndex}`}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <button onClick={() => handleImageClick(project.image)}>
                      <Images className="hover:text-primary" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Nihafis/"
            target="_blank"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139, 92, 246, 0.5)] hover:scale-105 active:scale-95 w-fit  flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

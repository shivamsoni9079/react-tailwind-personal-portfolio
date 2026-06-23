import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
  title: "Anime Streaming Web Application",
  description: `Developed a fully responsive Anime Streaming Web Application using HTML5, CSS3 and JavaScript with real-time API integration using the Jikan API. Built dynamic anime listing pages, reusable components, pagination and interactive UI sections for a smooth user experience.`,
  image: "/projects/anime-streaming.png",
  tags: ["HTML", "CSS", "JavaScript", "Jikan API"],
  link: "https://ss-anime-streaming-website.vercel.app/",
  github: "https://github.com/shivamsoni9079/SS-anime-streaming-website",
},
  {
    title: "Plant E Commerce Landing Page",
    description:
      "A modern and responsive plant landing page built with HTML, CSS, and JavaScript, featuring a clean design, engaging visuals, and mobile-friendly layout.",
    image: "/projects/Plant-e-commerce.png",
    tags: ["HTML5", "CSS", "JavaScript"],
    link: "https://plant-e-commerce-website-pi.vercel.app",
    github: "https://github.com/shivamsoni9079/Plant-e-commerce-website",
  },
  {
    title: "Snake Game",
    description:
      "Modern Snake Game with responsive design, level system, high scores, sound effects, game-over screen, and smooth gameplay using vanilla JavaScript.",
    image: "/projects/Snake-game.png",
    tags: ["HTML5", "CSS", "JavaScript"],
    link: "https://snake-game-amber-delta.vercel.app/",
    github: "https://github.com/shivamsoni9079/snake-game-pro",
  },
  {
    title: "Shivam Soni Portfolio",
    description:
      "Modern responsive portfolio website built with React, Tailwind CSS, and Vite. Features project showcase, skills, achievements, learning journey, and contact form integration.",
    image: "/projects/Portfolio-project.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://shivam-soni-portfolio.vercel.app/",
    github: "https://github.com/shivamsoni9079/react-tailwind-personal-portfolio",
  },

  
];

export const Projects = () => {
   const [showMore, setShowMore] = useState(false);
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
           A collection of frontend projects showcasing responsive design, API integration, and modern web development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, showMore ? projects.length : 4).map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                     rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => {
            setShowMore(!showMore)
          }}>
           {showMore ? "Show Less" : "View More Projects"}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

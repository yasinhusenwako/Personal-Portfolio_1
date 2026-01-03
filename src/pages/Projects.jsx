import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, product management, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team features, and deadline tracking.",
      technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
      technologies: ["Next.js", "PostgreSQL", "Chart.js", "Prisma"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather data.",
      technologies: ["React", "OpenWeather API", "CSS Modules"],
      github: "#",
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Blog CMS",
      description:
        "Content management system for bloggers with markdown support, SEO optimization, and media management.",
      technologies: ["Next.js", "Sanity.io", "Vercel"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Fitness Tracker",
      description:
        "Personal fitness tracking application with workout plans, progress tracking, and nutrition logging.",
      technologies: ["React Native", "Node.js", "Express", "MySQL"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects demonstrating various
            technologies and skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

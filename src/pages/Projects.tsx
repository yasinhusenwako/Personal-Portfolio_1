import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, product management, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team features, and deadline tracking.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.",
      technologies: ["Next.js", "PostgreSQL", "Chart.js", "Prisma"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather data.",
      technologies: ["React", "OpenWeather API", "CSS Modules"],
      github: "#",
      demo: "#",
      category: "Frontend",
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support, SEO optimization, and media management.",
      technologies: ["Next.js", "Sanity.io", "Vercel"],
      github: "#",
      demo: "#",
      category: "Fullstack",
    },
    {
      title: "Fitness Tracker",
      description: "Personal fitness tracking application with workout plans, progress tracking, and nutrition logging.",
      technologies: ["React Native", "Node.js", "Express", "MySQL"],
      github: "#",
      demo: "#",
      category: "Mobile",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects demonstrating various technologies and skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-grow">
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

              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

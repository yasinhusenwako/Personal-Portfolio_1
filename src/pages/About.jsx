import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative solutions to complex technical challenges",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate fullstack developer dedicated to crafting exceptional web
            experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <p className="text-muted-foreground">
              I'm a passionate fullstack web developer with a keen eye for
              detail and a love for creating beautiful, functional web
              applications. My journey in web development started with curiosity
              and has evolved into a career dedicated to building innovative
              digital solutions.
            </p>
            <p className="text-muted-foreground">
              I specialize in modern JavaScript frameworks, responsive design,
              and creating seamless user experiences. Whether it's a complex web
              application or a simple landing page, I approach every project
              with enthusiasm and a commitment to excellence.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/20 rounded-full flex items-center justify-center">
              <div className="text-6xl font-bold text-primary-foreground">
                YH
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 text-center">
              <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-muted-foreground">
                Creating responsive, interactive user interfaces with React,
                Vue.js, and modern CSS frameworks
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <p className="text-muted-foreground">
                Building robust server-side applications with Node.js, Express,
                and database management
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive user experiences with attention to detail
                and user-centered principles
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

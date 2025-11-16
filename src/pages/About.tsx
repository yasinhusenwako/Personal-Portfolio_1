import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
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
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate fullstack developer dedicated to crafting exceptional web experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-slide-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={profilePhoto}
                alt="Yasin Husen"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-primary/20"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Yasin Husen</h2>
            <h3 className="text-xl text-primary">Fullstack Web Developer</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate fullstack web developer with over 5 years of experience
                building modern, responsive, and user-friendly web applications. My journey
                in web development started with a curiosity about how websites work, and
                it has evolved into a fulfilling career creating digital solutions.
              </p>
              <p>
                I specialize in building scalable applications using the latest technologies,
                with a strong focus on performance, accessibility, and user experience. My
                approach combines technical expertise with creative problem-solving to
                deliver exceptional results.
              </p>
              <p>
                When I'm not coding, I enjoy staying up-to-date with the latest web
                technologies, contributing to open-source projects, and sharing knowledge
                with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">yasin@example.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-medium">5+ Years</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Projects</p>
                <p className="font-medium">100+ Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What I Bring to the Table
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

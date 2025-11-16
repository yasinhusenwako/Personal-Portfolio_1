import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Webpack / Vite", level: 85 },
        { name: "Jest / Testing", level: 80 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-secondary"
                    />
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Skills;

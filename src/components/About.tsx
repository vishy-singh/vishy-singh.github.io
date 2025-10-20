import { GraduationCap, Code2, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Expertise",
      description: "Specialized in Java and Spring ecosystem with focus on microservices and scalable architectures",
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description: "Proven track record of optimizing systems for better performance and efficiency",
    },
    {
      icon: Users,
      title: "Scrum Master",
      description: "Leading agile teams with strong collaboration and project management skills",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and best practices in backend development",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate backend developer with a strong focus on building robust, 
            scalable enterprise solutions. Currently working at Maya Data Privacy Limited, 
            I specialize in creating distributed microservices, implementing secure data 
            processing pipelines, and optimizing system performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-smooth border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <GraduationCap className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl">Education</h3>
                <p className="text-muted-foreground">B.Tech Graduate, 2023</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Strong academic foundation in computer science and engineering, complemented 
              by hands-on experience in building production-grade applications. My education 
              provided me with fundamental knowledge in algorithms, data structures, and 
              software engineering principles that I apply daily in my work.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

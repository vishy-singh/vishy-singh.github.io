import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: [
        "Java",
        "J2EE",
        "JDBC",
        "Hibernate",
        "Servlets",
        "Spring Boot",
        "JPA",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "Oracle", "SAP HANA", "Redis"],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "CI/CD", "Git", "Maven", "Gradle"],
    },
    {
      category: "Security & Authentication",
      skills: ["JWT", "RBAC", "2FA", "RSA Encryption", "Digital Signatures"],
    },
    {
      category: "Messaging & Events",
      skills: ["Kafka", "Event-driven Architecture"],
    },
    {
      category: "Testing & Documentation",
      skills: ["JUnit", "Mockito", "Postman", "Swagger", "Unit Testing", "API Testing"],
    },
    {
      category: "Observability & Monitoring",
      skills: ["Prometheus", "Grafana", "Spring Boot Actuator"],
    },
    {
      category: "Soft Skills",
      skills: ["Agile/Scrum", "Team Leadership", "Project Management", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Comprehensive expertise across the backend development stack
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:border-primary/30 transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-bold text-lg mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-fast cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

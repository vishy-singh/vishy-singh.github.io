import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Maya Data Privacy Limited",
      period: "Apr 2024 – Present",
      achievements: [
        "Developed distributed microservices pipeline processing 1M+ records daily with 40% faster processing times",
        "Built anonymization framework for SAP HANA with data masking and encryption capabilities",
        "Architected scalable authentication platform supporting 10,000+ concurrent users with JWT and RBAC",
        "Implemented observability using Prometheus and Grafana for real-time system monitoring",
        "Designed REST API service with standardized endpoints, reducing integration time by 30%",
        "Created secure license validation system using RSA encryption and digital signatures",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Maya Data Privacy Limited",
      period: "Dec 2023 – Mar 2024",
      achievements: [
        "Enhanced data anonymization platform with dynamic column-level transformations",
        "Optimized backend data pipeline reducing processing time by 25%",
        "Strengthened authentication security with OTP-based 2FA reducing unauthorized access by 95%",
        "Implemented comprehensive API testing with Postman for improved reliability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Building enterprise-grade solutions with measurable impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 border-border hover:border-primary/30 transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>

              <div className="space-y-3 pl-16">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex gap-3">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

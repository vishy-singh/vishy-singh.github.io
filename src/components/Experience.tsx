import { Briefcase, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "SDE-1",
      company: "Maya Data Privacy Limited",
      period: "Apr 2024 – Present",
      achievements: [
        "Cut SAP S4 database processing time from 48h to 35m by architecting a distributed microservices pipeline (Java, Spring Boot) with concurrent execution across 25+ tables.",
        "Improved system throughput by 90%, enabling enterprise clients to complete compliance-critical jobs in minutes instead of days.",
        "Engineered a high-performance anonymization and custom hashing framework for IPs/URLs, adopted across all microservices to securely process 5B+ records without collisions.",
        "Designed a multi-layer authentication platform (JWT, RBAC, CAPTCHA, 2FA) that blocked 95%+ unauthorized access attempts across multiple enterprise deployments.",
        "Built scalable REST APIs for schema scanning and PII detection, automating analysis of 500K+ database tables and cutting manual effort by 95%.",
        "Developed backup, restore, and condition-based data cleaning APIs with sub-second latency on 100B+ records, strengthening enterprise disaster recovery SLAs.",
        "Implemented a license validation system using RSA encryption and digital signatures, achieving 100% compliance and eliminating piracy in enterprise rollouts.",
        "Integrated observability stack (Spring Boot Actuator, Prometheus, Grafana), reducing alert response times by 30% and enabling proactive monitoring across all microservices."
      ],
    },
    {
      title: "SDE Intern",
      company: "Maya Data Privacy Limited",
      period: "Dec 2023 – Mar 2024",
      achievements: [
        "Improved data anonymization accuracy by 20% by redesigning classification logic in Spring Boot.",
        "Enhanced backend pipelines for IBAN and credit card detection, boosting throughput for millions of records.",
        "Strengthened security of user flows by implementing two-step verification (CAPTCHA + OTP) in Spring Security for password resets."
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

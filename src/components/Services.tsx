import { Server, Database, Lock, Zap, Cloud, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {

  const services = [
    {
      icon: Server,
      title: "Backend System Design",
      description:
          "Design and build backend systems using Java and Spring Boot, focusing on clean architecture, service boundaries, and long-term maintainability in real production environments.",
    },
    {
      icon: Database,
      title: "Large-Scale Data Processing",
      description:
          "Work with large schemas and data-heavy systems, handling batch and concurrent processing, schema-wide analysis, and performance optimisation across PostgreSQL, Oracle, and SAP HANA.",
    },
    {
      icon: Zap,
      title: "Performance & Scalability",
      description:
          "Identify bottlenecks in backend workflows and redesign processing pipelines using concurrency, sampling, and optimisation techniques to significantly reduce execution time.",
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description:
          "Build authentication and authorisation systems including JWT-based access, role-based permissions, account security flows, and secure service-to-service access.",
    },
    {
      icon: Cloud,
      title: "Production Operations & Reliability",
      description:
          "Operate backend services in production by implementing monitoring, alerting, and operational safeguards to ensure reliability, observability, and safe failure handling.",
    },
    {
      icon: Code2,
      title: "API & Platform Development",
      description:
          "Design and implement REST APIs and internal platform services that support configuration-driven workflows, automation, and safe interaction with complex backend systems.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Enterprise-grade backend development services focused on scalability, security, and performance
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 border-border hover:border-primary/30 hover:shadow-elegant hover:-translate-y-0.5 transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-fast">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-[1.5] text-justify break-words">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

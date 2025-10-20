import { Server, Database, Lock, Zap, Cloud, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Microservices Architecture",
      description:
        "Design and implement scalable microservices using Spring Boot, ensuring high availability and fault tolerance for enterprise applications.",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Expert in PostgreSQL, Oracle, and SAP HANA with focus on query optimization, data modeling, and performance tuning for large-scale systems.",
    },
    {
      icon: Lock,
      title: "Security Implementation",
      description:
        "Implement robust authentication and authorization using JWT, RBAC, 2FA, and encryption to ensure data protection and secure access control.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Analyze and optimize backend systems for improved throughput, reduced latency, and efficient resource utilization in production environments.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Deploy and manage applications on AWS with Docker containerization, CI/CD pipelines, and infrastructure as code for reliable deployments.",
    },
    {
      icon: Code2,
      title: "API Development",
      description:
        "Create RESTful APIs with comprehensive documentation using Swagger, ensuring standardized, maintainable, and developer-friendly interfaces.",
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
              className="p-6 border-border hover:border-primary/30 hover:shadow-elegant transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-fast">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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

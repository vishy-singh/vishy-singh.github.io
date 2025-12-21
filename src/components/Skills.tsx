import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Frameworks",
      skills: [
        "Java",
        "Core Java",
        "Java 8+",
        "J2EE",
        "JDBC",
        "Hibernate",
        "JPA",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "REST APIs",
        "Microservices",
        "Multithreading",
        "Concurrency",
        "Collections",
        "Streams API",
        "Design Patterns",
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        "PostgreSQL",
        "Oracle",
        "SAP HANA",
        "Redis",
        "SQL",
        "Query Optimization",
        "Indexing",
        "Transactions",
        "Batch Processing",
        "Data Modeling",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Containerization",
        "CI/CD",
        "Git",
        "Linux",
        "Shell Scripting",
        "Maven",
        "Gradle",
        "Build Automation",
        "Deployment Automation",
      ],
    },
    {
      category: "Security & Authentication",
      skills: [
        "Spring Security",
        "JWT",
        "OAuth 2.0",
        "RBAC",
        "2FA",
        "OTP Verification",
        "RSA Encryption",
        "Digital Signatures",
        "Secure API Design",
        "Data Privacy",
        "PII Protection",
        "GDPR Compliance",
      ],
    },
    {
      category: "Messaging & Events",
      skills: [
        "Event-driven Architecture",
        "Asynchronous Processing",
        "Event Processing",
        "Kafka",
      ],
    },
    {
      category: "Testing & Documentation",
      skills: [
        "JUnit",
        "Mockito",
        "Unit Testing",
        "Integration Testing",
        "API Testing",
        "Test Coverage",
        "Postman",
        "Swagger",
        "OpenAPI",
        "Code Reviews",
      ],
    },
    {
      category: "Observability & Monitoring",
      skills: [
        "Prometheus",
        "Grafana",
        "Spring Boot Actuator",
        "Logging",
        "Metrics",
        "Alerting",
        "Production Monitoring",
        "Incident Response",
        "Production Debugging",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Technical Leadership",
        "Mentoring",
        "Ownership",
        "System Thinking",
        "Cross-team Collaboration",
        "Problem Solving",
        "Agile Practices",
      ],
    },
  ];


    const skillCategories = [
        {
            category: "Backend Engineering",
            skills: [
                "Java (Core Java, Java 8+)",
                "JVM",
                "Optional & Streams API",
                "Multithreading & Concurrency",
                "Collections Framework",
                "Exception Handling",
                "Spring Boot",
                "Spring MVC",
                "Spring Data JPA",
                "Spring Security",
                "REST APIs",
                "API Design",
                "Microservices",
                "Design Patterns",
                "SOLID Principles",
            ],
        },
        {
            category: "Databases & Data Processing",
            skills: [
                "PostgreSQL",
                "Oracle",
                "SAP HANA",
                "Redis",
                "SQL",
                "Query Optimisation",
                "Indexing Strategies",
                "Transactions & Isolation Levels",
                "Data Modelling",
                "Schema Design",
                "Batch & High-Volume Data Processing",
                "Concurrency Control",
            ],
        },
        {
            category: "Distributed Systems & Async Processing",
            skills: [
                "Asynchronous Processing",
                "Event-Driven Systems",
                "Message-Based Architectures",
                "Retries & Failure Handling",
                "Idempotency",
                "Consistency Control",
            ],
        },
        {
            category: "Security & Identity",
            skills: [
                "Authentication & Authorisation Flows",
                "JWT (Access & Refresh Tokens)",
                "Role-Based Access Control (RBAC)",
                "Multi-Factor Authentication (MFA)",
                "OTP Verification",
                "Secure API Design",
                "Digital Signatures",
                "Secure Licensing & Validation",
            ],
        },
        {
            category: "Cloud, DevOps & Production",
            skills: [
                "AWS",
                "Docker",
                "CI/CD Pipelines",
                "Linux",
                "Git",
                "Maven",
                "Gradle",
                "Production Configuration",
                "Deployment Practices",
            ],
        },
        {
            category: "Observability & Reliability",
            skills: [
                "Spring Boot Actuator",
                "Prometheus",
                "Grafana",
                "Structured Logging",
                "Metrics & Alerting",
                "Production Monitoring",
                "Incident Response",
                "Root Cause Analysis",
            ],
        },
        {
            category: "Testing & Engineering Quality",
            skills: [
                "JUnit",
                "Mockito",
                "Unit Testing",
                "Integration Testing",
                "API Testing",
                "Code Reviews",
                "Production Readiness",
            ],
        },
        {
            category: "Ownership & Execution",
            skills: [
                "End-to-End Feature Ownership",
                "System Thinking",
                "Problem Solving",
                "Mentoring",
                "Technical Decision Making",
                "Working in Ambiguous Environments",
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 gradient-primary mx-auto mb-8"/>
                    <p className="text-lg text-muted-foreground">
                        Technical skills built through real production ownership </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="p-6 border-border hover:border-primary/30 transition-smooth animate-fade-in"
                            style={{animationDelay: `${index * 100}ms`}}
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

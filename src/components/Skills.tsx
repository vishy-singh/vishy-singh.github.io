import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";

const Skills = () => {

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
        <section id="skills" className="py-24 bg-secondary/40">
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
                            className="p-6 border-border hover:border-primary/30 hover:-translate-y-0.5 transition-smooth animate-fade-in"
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

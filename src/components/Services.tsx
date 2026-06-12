import { Server, Database, Lock, Zap, Cloud, Code2 } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Server,
            title: "Backend System Design",
            description:
                "Architect clean, maintainable backend systems in Java and Spring Boot — defining service boundaries, data models, and API contracts that hold up under real production load. I've built entire services from scratch, including IAM, billing, and data processing engines.",
        },
        {
            icon: Database,
            title: "Large-Scale Data Processing",
            description:
                "Build configurable pipelines for batch and concurrent data operations — with pluggable rule engines, automated trigger management, and support for diverse client schemas. Reduced schema analysis time from 48 hours to under 3 in production.",
        },
        {
            icon: Zap,
            title: "Performance & Scalability",
            description:
                "Diagnose bottlenecks in live systems and fix them — connection pooling with HikariCP, Redis caching layers, query optimisation, and concurrency improvements. Every optimisation I ship is measured against production before and after.",
        },
        {
            icon: Lock,
            title: "Identity & Access Management",
            description:
                "Design and implement complete IAM systems — JWT-based auth, RBAC, MFA, digital signatures, and gateway-level validation. Built and own the entire identity layer at my current company.",
        },
        {
            icon: Cloud,
            title: "Production Operations & Reliability",
            description:
                "Support backend services through their full lifecycle — from deployment to incident response, RCA, log analysis, and recovery automation. Comfortable owning reliability in environments where downtime has real business consequences.",
        },
        {
            icon: Code2,
            title: "API & Platform Development",
            description:
                "Design REST APIs that are clean, versioned, and integration-ready — for frontend teams, third-party clients, and internal services. Also experienced in event-driven integration using Apache Kafka.",
        },
    ];

    return (
        <section id="services" className="py-24" style={{ backgroundColor: "#FAF9F6" }}>
            <div className="container mx-auto px-6" style={{ maxWidth: "1100px" }}>

                {/* Eyebrow + Heading */}
                <div className="mb-16">
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-3"
                        style={{ color: "#999" }}
                    >
                        What I Do
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: "#1A1A1A" }}
                    >
                        Services
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-7 border transition-colors duration-150"
                            style={{
                                borderColor: "rgba(21,55,44,0.12)",
                                borderRadius: "8px",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(21,55,44,0.35)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(21,55,44,0.12)";
                            }}
                        >
                            <service.icon size={22} className="mb-5" style={{ color: "#15372C" }} />
                            <h3 className="font-semibold text-base mb-3" style={{ color: "#1A1A1A" }}>
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#666", lineHeight: "1.7" }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

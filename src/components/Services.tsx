import {Cloud, Code2, Database, Lock, Server, Zap} from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Server,
            title: "Backend System Design",
            description:
                "Architect clean, maintainable backend systems in Java and Spring Boot - defining service boundaries, data models, and API contracts that hold up under real production load. I've built entire services from scratch, including IAM, billing, and data processing engines.",
        },
        {
            icon: Database,
            title: "Large-Scale Data Processing",
            description:
                "Build configurable pipelines for batch and concurrent data operations - with pluggable rule engines, automated trigger management, and support for diverse client schemas. Reduced schema analysis time from 48 hours to under 3 in production.",
        },
        {
            icon: Zap,
            title: "Performance & Scalability",
            description:
                "Diagnose bottlenecks in live systems and fix them - connection pooling with HikariCP, Redis caching layers, query optimisation, and concurrency improvements. Every optimisation I ship is measured against production before and after.",
        },
        {
            icon: Lock,
            title: "Identity & Access Management",
            description:
                "Design and implement complete IAM systems - JWT-based auth, RBAC, MFA, digital signatures, and gateway-level validation. Built and own the entire identity layer at my current company.",
        },
        {
            icon: Cloud,
            title: "Production Operations & Reliability",
            description:
                "Support backend services through their full lifecycle - from deployment to incident response, RCA, log analysis, and recovery automation. Comfortable owning reliability in environments where downtime has real business consequences.",
        },
        {
            icon: Code2,
            title: "API & Platform Development",
            description:
                "Design REST APIs that are clean, versioned, and integration-ready - for frontend teams, third-party clients, and internal services. Also experienced in event-driven integration using Apache Kafka.",
        },
    ];

    return (
        <section
            id="services"
            className="px-5 md:px-10 py-12 md:py-16"
            style={{scrollMarginTop: "80px"}}
        >
            {/* Heading */}
            <h2
                className="mb-8"
                style={{color: "var(--pp-text)", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800}}
            >
                Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="pp-card flex flex-col">
                        <div
                            className="flex items-center justify-center mb-4"
                            style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "12px",
                                backgroundColor: "var(--pp-nav-active-bg)",
                            }}
                        >
                            <service.icon size={22} style={{color: "var(--pp-blue)"}}/>
                        </div>
                        <h3 className="mb-2" style={{color: "var(--pp-text)", fontSize: "18px", fontWeight: 700}}>
                            {service.title}
                        </h3>
                        <p style={{color: "var(--pp-body)", fontSize: "15px", lineHeight: 1.7, textAlign: "justify"}}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

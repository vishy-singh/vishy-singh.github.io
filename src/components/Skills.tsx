const Skills = () => {
    const skillCategories = [
        {
            category: "Backend & Languages",
            note: null,
            accent: false,
            skills: [
                "Java", "Spring Boot", "Python", "REST APIs", "Microservices",
                "Apache Kafka", "Event-Driven Systems",
                "JUnit Testing", "Mockito (Mocking)", "JDBC (Java DB Connectivity)", "Hibernate",
            ],
        },
        {
            category: "Databases",
            note: "Strong in PostgreSQL and SAP HANA for production workloads",
            accent: false,
            skills: ["PostgreSQL", "Redis", "SAP HANA", "Oracle"],
        },
        {
            category: "Cloud & DevOps",
            note: null,
            accent: false,
            skills: [
                "Google Cloud Platform", "Docker", "CI/CD Pipelines",
                "JWT Authentication", "Multi-Factor Auth (MFA)", "Digital Signatures (Security)",
            ],
        },
        {
            category: "Engineering Practices",
            note: null,
            accent: false,
            skills: [
                "System Design", "API Design", "Performance Optimisation",
                "Scrum Master", "Production Debugging & RCA", "Legacy Refactoring",
            ],
        },
        {
            category: "Core Interests",
            note: null,
            accent: true,
            skills: [
                "Fintech Systems", "Distributed Systems",
                "Scalable Architecture", "High-Performance Backends",
            ],
        },
    ];

    return (
        <section id="skills" className="py-24" style={{ backgroundColor: "#FAF9F6" }}>
            <div className="container mx-auto px-6" style={{ maxWidth: "1100px" }}>

                {/* Eyebrow + Heading */}
                <div className="mb-16">
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-3"
                        style={{ color: "#999" }}
                    >
                        Skills
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: "#1A1A1A" }}
                    >
                        Technical Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {skillCategories.map((group, i) => (
                        <div key={i} className={group.accent ? "md:col-span-2" : ""}>
                            <h3
                                className="text-xs uppercase tracking-widest font-semibold mb-1"
                                style={{ color: "#888" }}
                            >
                                {group.category}
                            </h3>
                            {group.note && (
                                <p
                                    className="mb-4"
                                    style={{ color: "#aaa", fontSize: "12px" }}
                                >
                                    {group.note}
                                </p>
                            )}
                            {!group.note && <div className="mb-4" />}
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className="text-sm font-medium"
                                        style={{
                                            backgroundColor: group.accent
                                                ? "rgba(21,55,44,0.09)"
                                                : "#E8E6E1",
                                            color: group.accent ? "#15372C" : "#2A2A2A",
                                            borderRadius: "8px",
                                            padding: "8px 18px",
                                            cursor: "default",
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

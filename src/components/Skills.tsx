const Skills = () => {


    const skillCategories = [
        {
            category: "Backend Development",
            note: null,
            accent: false,
            skills: [
                "Java",
                "Spring Boot",
                "Microservices",
                "REST API",
                "Python",
                "JUnit",
                "Mockito",
                "Unit Testing",
                "Apache Kafka",
                "Integration Testing",
                "Event-Driven Systems",
            ],
        },
        {
            category: "Databases",
            note: null,
            accent: false,
            skills: [
                "PostgreSQL",
                "SAP HANA",
                "Redis",
                "Oracle",
            ],
        },
        {
            category: "Software Engineering",
            note: null,
            accent: false,
            skills: [
                "OAuth2",
                "Docker",
                "JWT Auth",
                "API Design",
                "Code Reviews",
                "System Design",
                "Digital Signatures",
                "Technical Documentation",
                "Google Cloud Platform (GCP)",
                "Multi-Factor Authentication (MFA)",
            ],
        },
        {
            category: "Agile & Delivery",
            note: null,
            accent: false,
            skills: [
                "Scrum Master",
                "Sprint Planning",
                "Retrospectives",

                "Backlog Grooming",

                "Release Management",
                "Stakeholder Communication",
                "Cross-team Coordination",
            ],
        },
    ];

    return (
        <section id="skills" className="py-24" style={{backgroundColor: "#FAF9F6"}}>
            <div className="container mx-auto px-6" style={{maxWidth: "1100px"}}>

                {/* Eyebrow + Heading */}
                <div className="mb-16">
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-3"
                        style={{color: "#999"}}
                    >
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{color: "#1A1A1A"}}
                    >
                        Technical Skills
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {skillCategories.map((group, i) => (
                        <div key={i} className={group.accent ? "md:col-span-2" : ""}>
                            <h3
                                className="text-xs uppercase tracking-widest font-semibold mb-1"
                                style={{color: "#888"}}
                            >
                                {group.category}
                            </h3>
                            {group.note && (
                                <p
                                    className="mb-4"
                                    style={{color: "#aaa", fontSize: "12px"}}
                                >
                                    {group.note}
                                </p>
                            )}
                            {!group.note && <div className="mb-4"/>}
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

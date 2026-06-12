const Experience = () => {
    const fullTimeAchievements = [
        "Built a complete IAM service from scratch — JWT, RBAC, MFA, and account security — as the sole engineer owning the entire identity layer.",
        "Cut schema analysis time from 48–60 hours to ~2–3 hours by building a concurrent schema intelligence engine in Java.",
        "Automated the full trial-to-billing lifecycle for API key access — eliminated manual billing tracking entirely.",
        "Worked with Apache Kafka for async event-driven workflows and Redis for caching — improving throughput and cutting response latency across multiple services.",
        "Led AWS → GCP cloud migration — containerised microservices with Docker, provisioned VMs, and wired service connectivity across sandbox and prod.",
        "Designed a digitally signed on-prem licensing system with gateway-level validation, automated renewal and onboarding flows.",
        "Built a configurable data transformation pipeline with pluggable rule engine and concurrent processing for large-scale client data operations.",
        "Introduced Hikari CP connection pooling — cut connection errors and timeout failures in production.",
        "Designed automated backup and recovery workflows for critical services.",
        "Ran Scrum ceremonies — sprint planning, backlog refinement, retrospectives, and stakeholder updates — as Scrum Master for a distributed team, while delivering all engineering work above as an individual contributor.",
    ];

    const internAchievements = [
        "Built a Python-based data classification utility for automated schema profiling.",
        "Implemented group-based access control for multi-tenant workflows.",
    ];

    return (
        <section id="experience" className="py-24 bg-secondary/40">
            <div className="container mx-auto px-6" style={{ maxWidth: "1100px" }}>

                {/* Eyebrow + Heading */}
                <div className="mb-16">
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-3"
                        style={{ color: "#999" }}
                    >
                        Experience
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: "#1A1A1A" }}
                    >
                        Professional Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl">

                    {/* Full-time entry */}
                    <div className="relative pl-8 pb-14">
                        {/* Connector */}
                        <div
                            className="absolute top-3 bottom-0 w-px"
                            style={{ left: "5px", backgroundColor: "rgba(21,55,44,0.18)" }}
                        />
                        {/* Dot */}
                        <div
                            className="absolute w-[11px] h-[11px] rounded-full border-2 bg-white"
                            style={{ top: "6px", left: "0", borderColor: "#15372C" }}
                        />

                        {/* Role + company */}
                        <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                            <h3 className="text-xl font-bold" style={{ color: "#1A1A1A" }}>
                                Software Engineer
                            </h3>
                            <span className="text-base font-medium" style={{ color: "#028561" }}>
                                Maya Data Privacy
                            </span>
                        </div>

                        {/* Clarification line */}
                        <p className="text-sm italic mb-3" style={{ color: "#777" }}>
                            Individual Contributor as Developer · Leader as Scrum Master
                        </p>

                        <p className="text-sm mb-4" style={{ color: "#888" }}>
                            Apr 2024 – Present
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-7">
                            {["Software Engineer", "Scrum Master"].map(badge => (
                                <span
                                    key={badge}
                                    className="text-xs font-medium px-3 py-1"
                                    style={{
                                        backgroundColor: "rgba(21,55,44,0.08)",
                                        color: "#15372C",
                                        borderRadius: "6px",
                                    }}
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        {/* Achievements */}
                        <ul className="space-y-4">
                            {fullTimeAchievements.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span
                                        className="flex-shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: "#028561" }}
                                    />
                                    <span
                                        className="text-base leading-relaxed"
                                        style={{ color: "#3A3A3A", lineHeight: "1.75" }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Intern sub-entry */}
                    <div className="relative pl-8">
                        <div
                            className="absolute w-[11px] h-[11px] rounded-full border-2 bg-white"
                            style={{ top: "6px", left: "0", borderColor: "rgba(21,55,44,0.35)" }}
                        />

                        <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                            <h3 className="text-lg font-semibold" style={{ color: "#555" }}>
                                Intern
                            </h3>
                            <span className="text-sm font-medium" style={{ color: "#028561" }}>
                                Maya Data Privacy
                            </span>
                        </div>

                        <p className="text-sm mb-5" style={{ color: "#aaa" }}>
                            Dec 2023 – Mar 2024
                        </p>

                        <ul className="space-y-4">
                            {internAchievements.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span
                                        className="flex-shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: "rgba(21,55,44,0.3)" }}
                                    />
                                    <span
                                        className="text-base leading-relaxed"
                                        style={{ color: "#555", lineHeight: "1.75" }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;

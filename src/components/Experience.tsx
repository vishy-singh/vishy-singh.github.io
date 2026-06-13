import {ReactNode} from "react";

const Experience = () => {
    const fullTimeAchievements = [
        "Built a complete IAM service from scratch - JWT, RBAC, MFA, and account security - as the sole engineer owning the entire identity layer.",
        "Cut schema analysis time from 48–60 hours to ~2–3 hours by building a concurrent schema intelligence engine in Java.",
        "Automated the full trial-to-billing lifecycle for API key access - eliminated manual billing tracking entirely.",
        "Worked with Apache Kafka for async event-driven workflows and Redis for caching - improving throughput and cutting response latency across multiple services.",
        "Led AWS → GCP cloud migration - containerised microservices with Docker, provisioned VMs, and wired service connectivity across sandbox and prod.",
        "Designed a digitally signed on-prem licensing system with gateway-level validation, automated renewal and onboarding flows.",
        "Built a configurable data transformation pipeline with pluggable rule engine and concurrent processing for large-scale client data operations.",
        "Introduced Hikari CP connection pooling - cut connection errors and timeout failures in production.",
        "Designed automated backup and recovery workflows for critical services.",
        "Ran Scrum ceremonies - sprint planning, backlog refinement, retrospectives, and stakeholder updates - as Scrum Master for a distributed team, while delivering all engineering work above as an individual contributor.",
    ];

    const internAchievements = [
        "Built a Python-based data classification utility for automated schema profiling.",
        "Implemented group-based access control for multi-tenant workflows.",
    ];

    const Bullet = ({children}: { children: ReactNode }) => (
        <li className="flex gap-3 items-start">
            <span
                className="flex-shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full"
                style={{backgroundColor: "var(--pp-blue)"}}
            />
            <span style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7}}>
                {children}
            </span>
        </li>
    );

    return (
        <section
            id="experience"
            className="px-5 md:px-10 py-12 md:py-16"
            style={{scrollMarginTop: "80px"}}
        >
            {/* Heading */}
            <h2
                className="mb-8"
                style={{color: "var(--pp-text)", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800}}
            >
                Professional Experience
            </h2>

            <div className="space-y-5">

                {/* Full-time entry */}
                <div className="pp-card" style={{padding: "28px"}}>
                    {/* Role + company */}
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                        <h3 style={{color: "var(--pp-text)", fontSize: "20px", fontWeight: 700}}>
                            Software Engineer
                        </h3>
                        <span style={{color: "var(--pp-blue)", fontSize: "16px", fontWeight: 600}}>
                            Maya Data Privacy
                        </span>
                    </div>

                    {/* Clarification line */}
                    <p className="italic mb-3" style={{color: "var(--pp-muted)", fontSize: "14px"}}>
                        Individual Contributor as Developer · Leader as Scrum Master
                    </p>

                    <p className="mb-4" style={{color: "var(--pp-muted)", fontSize: "14px", fontWeight: 600}}>
                        Apr 2024 – Present
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Software Engineer", "Scrum Master"].map(badge => (
                            <span key={badge} className="pp-chip pp-chip-blue" style={{fontSize: "13px", padding: "6px 14px"}}>
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3.5">
                        {fullTimeAchievements.map((item, i) => (
                            <Bullet key={i}>{item}</Bullet>
                        ))}
                    </ul>
                </div>

                {/* Intern entry */}
                <div className="pp-card" style={{padding: "28px"}}>
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                        <h3 style={{color: "var(--pp-text)", fontSize: "20px", fontWeight: 700}}>
                            Software Engineer Intern
                        </h3>
                        <span style={{color: "var(--pp-blue)", fontSize: "15px", fontWeight: 600}}>
                            Maya Data Privacy
                        </span>
                    </div>

                    <p className="mb-5" style={{color: "var(--pp-muted)", fontSize: "14px", fontWeight: 600}}>
                        Dec 2023 – Mar 2024
                    </p>

                    <ul className="space-y-3.5">
                        {internAchievements.map((item, i) => (
                            <Bullet key={i}>{item}</Bullet>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;

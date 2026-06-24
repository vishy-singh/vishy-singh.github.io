import {ReactNode} from "react";

const Experience = () => {
    const fullTimeAchievements = [
        "Owned end-to-end feature delivery as an individual contributor while simultaneously serving as Scrum Master and tester across a ~20-person product team spanning 5 functions (UI, AI, Backend, Product, Testing) - holding three roles at once, two years into my career.",
        "Integrated my own open-sourced tool, Helix, for automated GitHub pull request review - reducing review time by 50% while catching issues that are difficult or impossible for a human reviewer to consistently spot.",
        "Designed and built a fault-tolerant state-management feature for long-running bulk operations across multiple databases (PostgreSQL, Oracle, SAP HANA), using a crash-safe journaling pattern for automatic recovery from mid-process crashes - and cut bulk insert time by ~50% by disabling triggers during writes.",
        "Delivered end-to-end across two Spring Boot microservices (Kafka/Redis) with a tenant-configurable REST setting, cross-database SQL handling, and concurrency-safe resource management in a Spring Batch pipeline - validated with unit and Testcontainers tests.",
        "Owned the entire identity layer as sole engineer, shipping a production IAM service from scratch - auth flows, JWT, RBAC, MFA, OAuth2, and account security - now securing access for 500+ users across B2B tenants deployed on-premises.",
        "Cut a 48–60 hr workflow pipeline to ~2–3 hr by parallelising table processing 25-at-a-time across 100k-table datasets and pushing filtering down to the database layer - so only a fraction of the data ever reached the application instead of the full set.",
        " Automated the full trial-to-billing lifecycle for API key access - eliminated manual billing tracking entirely.",
        "Designed automated backup and recovery workflows for critical services.",
        "Designed a digitally signed on-prem licensing system with gateway-level validation, automated renewal and onboarding flows.",
        "Contributed to the AWS → GCP infrastructure migration, containerising services with Docker and managing secrets and connectivity across environments.",
        "Optimised multi-tenant database connection pooling and built the on-premises licensing system.",
    ];

    const internAchievements = [
        "Built a Python-based data classification utility that samples field values and applies configurable detection logic to identify sensitive data types at scale, powering automated data profiling.",
        "Implemented group-based access control logic to enforce data consistency boundaries across multi-tenant workflows, hardening the authorisation model ahead of production rollout.",
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
                        Three roles at once · Developer · Scrum Master · Tester
                    </p>

                    <p className="mb-4" style={{color: "var(--pp-muted)", fontSize: "14px", fontWeight: 600}}>
                        Jan 2024 – Present
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Software Engineer", "Scrum Master", "Tester"].map(badge => (
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

                    <p className="italic mb-3" style={{color: "var(--pp-muted)", fontSize: "14px"}}>
                        Converted to full-time
                    </p>

                    <p className="mb-5" style={{color: "var(--pp-muted)", fontSize: "14px", fontWeight: 600}}>
                        Dec 2023
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

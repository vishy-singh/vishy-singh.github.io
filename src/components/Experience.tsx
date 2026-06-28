import {ReactNode} from "react";

const Experience = () => {
    const fullTimeAchievements = [
        "Built the entire identity layer as sole engineer - shipping a production IAM service from scratch (auth flows, JWT, RBAC, MFA, OAuth2, account security) that now secures 500+ users across SaaS and on-premises B2B deployments.",
        "Cut a 48–60 hr data-processing pipeline to ~2–3 hr (roughly 20x) by parallelising table processing 25-at-a-time across 100k+ table datasets and pushing filtering down to the database - so only a fraction of the data ever reached the application instead of the full set.",
        "Designed a fault-tolerant state-management layer for long-running bulk operations across PostgreSQL, Oracle, and SAP HANA, using a crash-safe journaling pattern for automatic mid-process recovery - and cut bulk-insert time ~50% by disabling triggers during writes.",
        "Integrated my own open-sourced tool, Helix, into the team's GitHub workflow for automated PR review - halving review turnaround while catching issues a human reviewer can't consistently spot.",
        "Delivered end-to-end across two Spring Boot microservices (Kafka, Redis) with tenant-configurable REST settings, cross-database SQL handling, and concurrency-safe resource management in a Spring Batch pipeline - validated with JUnit, Mockito, and Testcontainers.",
        "Automated the full trial-to-billing lifecycle for API-key access, eliminating manual billing tracking entirely.",
        "Designed a digitally signed, on-premises licensing system with gateway-level validation and automated renewal and onboarding flows.",
        "Contributed to the AWS → GCP infrastructure migration - containerising services with Docker and managing secrets and connectivity across environments.",
        "Optimised multi-tenant database connection pooling and designed automated backup-and-recovery workflows for critical services.",
        "Operated as individual contributor, Scrum Master, and tester simultaneously across a ~20-person product team spanning five functions (UI, AI, Backend, Product, Testing) - owning feature delivery as the team's core developer just two years into my career.",
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
                            <span key={badge} className="pp-chip pp-chip-blue"
                                  style={{fontSize: "13px", padding: "6px 14px"}}>
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

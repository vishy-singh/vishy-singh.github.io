import {Briefcase, CheckCircle2, Minus, ChevronRight, Dot} from "lucide-react";
import {Card} from "@/components/ui/card";

const Experience = () => {
    const experiences = [
        {
            title: "SDE – 1",
            company: "Maya Data Privacy",
            period: "Apr 2024 – Present",
            achievements: [
                "Designed and built a value-based column detection and classification system to automatically identify what kind of data is stored in each column across large database schemas. The system samples real data values from columns, filters out low-signal fields (such as columns with very few distinct values or empty data), and classifies fields into types like name, email, or date. To make this practical at scale, I introduced concurrency, early pruning, and intelligent sampling, which reduced full-schema processing time from 48–60 hours to roughly 35–40 minutes.",

                "Implemented an internal Sensitive Data Detection (SDD) engine fully in Java that allows users to provide a reference table and column (for example, a column known to contain names) and then scans the entire schema to find other columns containing similar sensitive data. The detection logic combines value comparison, column metadata, and distribution checks, and runs concurrently to handle large schemas efficiently.",

                "Built a secure on-prem licensing system to support customers running the platform outside of SaaS environments. This involved creating an internal license generation service that produces digitally signed license files containing user limits, expiry dates, and feature flags. I integrated public-key validation into the gateway so licenses can be validated at runtime without redeployments, and added workflows for license renewal and first-time user onboarding.",

                "Automated the Trial–Reminder–Billing (TRB) workflow for API key–based access. I modelled the trial lifecycle in the database, implemented scheduled jobs to send welcome and reminder notifications, and built invoice generation and tracking logic. This removed manual tracking, ensured consistent trial expiry handling, and provided a clear audit trail for billing-related actions.",

                "Designed and implemented a backup and restore mechanism to make anonymisation workflows safe and reversible. Before anonymisation, the system can create backups of selected tables or entire schemas, and users can later restore, redo, or delete these backups. I added concurrent execution to handle large schemas efficiently and ensured the system works consistently across PostgreSQL, Oracle, and SAP HANA.",

                "Implemented IP address and URL anonymisation with user-configurable consistency. When users choose consistent anonymisation, the system generates deterministic anonymised values using database-backed mappings so the same input always maps to the same output. When consistency is not required, fresh anonymised values are generated. This allows flexibility without sacrificing correctness.",

                "Developed a collaboration group–based anonymisation mechanism to control consistency boundaries. Anonymised values are generated using a combination of the original value and a collaboration group identifier, ensuring data is anonymised consistently within a group while remaining isolated across different groups.",

                "Set up production monitoring and alerting using Spring Boot Actuator, Prometheus, and Grafana. I defined health checks and alert rules that trigger automated email notifications when services become unhealthy, improving visibility into production issues and reducing time to detect failures."
            ],
        },
        {
            title: "SDE – Intern",
            company: "Maya Data Privacy",
            period: "Dec 2023 – Mar 2024",
            achievements: [
                "Built a core Identity and Access Management (IDM) service responsible for authentication and authorisation across the platform. This included secure sign-up and login flows, JWT-based access and refresh tokens, role-based access control, account locking, and password management. The service became the central identity layer used by other backend services.",

                "Integrated IBAN and credit card detection into the anonymisation pipeline using established Python libraries. This ensured accurate identification of financial identifiers while avoiding the risk and complexity of reimplementing validation logic from scratch.",

                "Improved account security workflows by adding CAPTCHA and email-based OTP verification for sensitive operations such as password resets, reducing the risk of automated abuse and credential attacks."
            ],
        },
    ];

    return (
        <section id="experience" className="py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="h-1 w-20 gradient-primary mx-auto mb-8"/>
                    <p className="text-lg text-muted-foreground">
                        Building and owning backend systems that scale in real production environments
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="p-8 border-border hover:border-primary/30 transition-smooth animate-fade-in"
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-primary/10 mt-1">
                                    <Briefcase className="text-primary" size={24}/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                                </div>
                            </div>

                            <div className="space-y-3 pl-10  ">
                                {exp.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className="flex gap-0">
                                        <Dot
                                            className="text-accent flex-shrink-0"
                                            size={25}
                                        />
                                        <p className="text-muted-foreground text-[15px] leading-[1.5] text-justify break-words">

                                        {achievement}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

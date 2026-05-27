import {Briefcase, CheckCircle2, Minus, ChevronRight, Dot} from "lucide-react";
import {Card} from "@/components/ui/card";

const Experience = () => {
    const experiences = [
        {
            title: "SWE – 1",
            company: "Maya Data Privacy",
            period: "Jan 2024 – Present",
            achievements: [
                "Optimised database connection management across multiple service modules by configuring an efficient connection pooling strategy, significantly reducing connection errors and timeout failures in production, improving overall service stability and reliability.",

                "Built and scaled a value-based column detection and classification system for large database schemas, using intelligent sampling, cross-service processing, and concurrency to identify data types for anonymisation and cut processing time from 48-60 hours to ~35-40 minutes.",

                "Implemented a secure on-prem licensing system with digitally signed license files and gateway-level validation to enforce expiry and user limits, automating license renewal and secure first-time user onboarding without manual intervention.",

                "Automated the Trial–Reminder–Billing (TRB) lifecycle for API key-based access by modelling trial state in the database, running reliable scheduled notifications, and generating invoices-removing manual tracking and improving reliability in production.",

                "Built and owned a core Identity and Access Management (IDM) service, covering authentication and authorisation flows such as secure sign-up/login, token handling, role-based access control, and account security.",

                "Developed a backup and restore mechanism to support safe anonymisation workflows across Oracle, PostgreSQL, and SAP HANA, enabling concurrent execution, rollback, redo, and cleanup for large schemas in production.",

                "Owned IP and URL anonymisation logic, making key technical decisions to support user-configurable consistency through database-backed mappings and ensuring reliable, repeatable anonymisation in production systems.",

                "Built an internal Sensitive Data Detection (SDD) engine in Java, identifying sensitive columns across large schemas using value comparison, column properties, and concurrent processing to scale efficiently.",
            ],
        },
        {
            title: "SWE – Intern",
            company: "Maya Data Privacy",
            period: "Dec 2023 – Dec 2023",
            achievements: [
                "Implemented group-based access controls to manage data consistency boundaries across anonymisation workflows.",

                "Integrated IBAN and credit card detection using established Python libraries to support accurate identification of financial identifiers within anonymisation workflows.",
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
                            className="p-8 border-border border-l-4 border-l-primary hover:border-primary/30 transition-smooth animate-fade-in"
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
                                            className="text-primary flex-shrink-0"
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

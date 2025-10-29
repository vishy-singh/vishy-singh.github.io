import {Briefcase, CheckCircle2} from "lucide-react";
import {Card} from "@/components/ui/card";

const Experience = () => {
    const experiences = [
        {
            title: "SDE-1",
            company: "Maya Data Privacy",
            period: "Apr 2024 – Present",
            achievements: [
                "Led the end-to-end development of critical compliance features, taking full ownership from architectural design in Spring Boot to complex database optimizations and final deployment.",
                "Spearheaded the development of a high-throughput, concurrent data processing pipeline using Java & Spring Boot, slashing processing time for massive enterprise datasets from 48 hours to just 35 minutes.",
                "Engineered a high-performance data privacy framework in Java, capable of securely processing 5B+ records with custom hashing and anonymization algorithms.",
                "Secured the platform with a multi-layer authentication framework (Java, Spring Security, JWT, RBAC), successfully blocking over 95% of unauthorized access attempts in enterprise environments.",
                "Automated large-scale database analysis by building scalable REST APIs (Spring Boot), cutting manual compliance and reporting effort by 95% across 500K+ tables.",
                "Constructed highly resilient, large-scale data management APIs (Java) for backup and recovery, handling 100B+ records with sub-second latency to guarantee enterprise disaster recovery SLAs.",
                "Implemented a robust cryptographic security module (Java, RSA) to manage and validate software licenses, achieving 100% compliance in all enterprise deployments.",
                "Instrumented a full observability stack (Spring Boot Actuator, Prometheus, Grafana), reducing incident response times by 30% through proactive, real-time monitoring."
            ],
        },
        {
            title: "SDE Intern",
            company: "Maya Data Privacy",
            period: "Dec 2023 – Mar 2024",
            achievements: [
                "Refined complex data classification logic in Spring Boot, boosting the accuracy of sensitive data detection by 20%.",
                "Overhauled critical backend data pipelines (Java) processing sensitive financial data, significantly increasing throughput for millions of database records.",
                "Strengthened user account security by integrating two-step verification (CAPTCHA + Email OTP) into the Spring Security framework, securing the password reset workflow."
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
                        Building enterprise-grade solutions with measurable impact
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

                            <div className="space-y-3 pl-16">
                                {exp.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className="flex gap-3">
                                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18}/>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
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

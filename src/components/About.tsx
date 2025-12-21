import { GraduationCap, Code2, Zap, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: "Backend Systems Ownership",
            description:
                "Build and own backend systems using Java and Spring Boot, taking features from system design through implementation to production operation.",
        },
        {
            icon: Zap,
            title: "Performance & Scale",
            description:
                "Hands-on experience optimising data-intensive and concurrent backend workflows, reducing execution time from hours to minutes in production systems.",
        },
        {
            icon: Server,
            title: "Production-First Mindset",
            description:
                "Focus on reliability, observability, and safe operations by designing systems that are monitored, debuggable, and resilient in real production environments.",
        },
        {
            icon: GraduationCap,
            title: "Continuous Growth",
            description:
                "Actively deepen understanding of system design, databases, and distributed systems through real-world problem solving and iteration.",
        },
    ];

    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                {/* Header + Summary */}
                <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                        Backend Software Engineer with ~2 years of experience building and
                        operating high-throughput backend systems in a startup environment.
                        I take features from design to production, owning architecture,
                        implementation, and production readiness. Personally authored and
                        maintained <strong>54K+ lines of production Java code</strong> across{" "}
                        <strong>100+ REST APIs</strong> and{" "}
                        <strong>250+ internal services/components</strong>, focusing on
                        performance, reliability, and observability. I regularly help drive
                        backend execution—planning work, mentoring engineers, and unblocking
                        delivery—while remaining a hands-on individual contributor.
                    </p>
                </div>

                {/* Highlights (rendered ONCE) */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <Card
                            key={index}
                            className="p-6 hover:shadow-elegant transition-smooth border-border hover:border-primary/30 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-[15px] leading-[1.7]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
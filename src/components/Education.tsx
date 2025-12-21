import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
    return (
        <section id="education" className="py-24">
            <div className="container mx-auto px-6">
                {/* 70% width wrapper */}
                <div className="max-w-[70%] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                        <div className="h-1 w-20 gradient-primary mx-auto mb-8" />
                        <p className="text-lg text-muted-foreground">
                            Academic foundation that supports practical, production-focused
                            backend engineering work.
                        </p>
                    </div>

                    {/* Education Card */}
                    <Card className="p-8 border-border hover:border-primary/30 hover:shadow-elegant transition-smooth animate-fade-in">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-accent/10">
                                <GraduationCap className="text-accent" size={28} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">
                                    Bachelor of Technology (B.Tech)
                                </h3>
                                <p className="text-muted-foreground">
                                    Computer Science & Engineering · 2023
                                </p>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-[15px] leading-[1.7] text-justify mb-6">
                            Built a strong foundation in computer science and software
                            engineering fundamentals, which now directly supports my work on
                            backend systems in production environments. The curriculum
                            emphasised problem-solving, analytical thinking, and understanding
                            how systems behave under real-world constraints.
                        </p>

                        {/* Key Subjects */}
                        <div className="flex items-start gap-3">
                            <BookOpen className="text-primary mt-[3px]" size={18} />
                            <p className="text-muted-foreground text-[15px] leading-[1.7]">
                                Core areas of study included{" "}
                                <strong>Data Structures and Algorithms</strong>,
                                <strong> Operating Systems</strong>,
                                <strong> Database Management Systems</strong>,
                                <strong> Computer Networks</strong>, and
                                <strong> Software Engineering</strong>.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Education;
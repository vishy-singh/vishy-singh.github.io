import {ArrowRight, Github, Linkedin, Mail, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-secondary/50">

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-6 animate-fade-in">
                        <div
                            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                            Software Engineer
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Hi, I'm{" "}
                            <span className="text-primary">
                                  Vishwajeet Pratap Singh
                            </span>
                        </h1>

                        <p className="text-base text-muted-foreground max-w-2xl font-normal">
                            Software Developer specializing in the Java and Spring ecosystem,
                            crafting enterprise-grade, secure, and scalable systems with a focus on microservices
                            architecture,
                            secure data pipelines, and high-throughput solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={() => scrollToSection("#experience")}
                                className="group"
                            >
                                View My Work
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20}/>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => scrollToSection("#contact")}
                            >
                                Contact Me
                            </Button>
                        </div>

                        {/* Quick Contact Links */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <a
                                href="https://github.com/vishwajeet-singhh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth"
                            >
                                <Github size={20} className="text-foreground hover:text-primary"/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vishydev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth"
                            >
                                <Linkedin size={20} className="text-foreground hover:text-primary"/>
                            </a>
                            <a
                                href="mailto:vishy_singh@zohomail.in"
                                className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth"
                            >
                                <Mail size={20} className="text-foreground hover:text-primary"/>
                            </a>
                            <a
                                href="tel:9155676582"
                                className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-smooth"
                            >
                                <Phone size={20} className="text-foreground hover:text-primary"/>
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile Image */}
                    <div className="flex justify-center lg:justify-end animate-scale-in">
                        <div className="relative">


                            <div
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-xl">
                                <img
                                    src={profileImage}
                                    alt="Vishwajeet Pratap Singh"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badge */}
                            <div
                                className="absolute bottom-8 -right-4 bg-card px-6 py-3 rounded-lg shadow-md border border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-accent rounded-full"/>
                                    <span className="text-sm font-semibold">Available for Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

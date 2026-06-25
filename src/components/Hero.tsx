import {ArrowRight, Download, Github, Globe, Linkedin, Mail} from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const RESUME_URL =
    "https://drive.google.com/file/d/1zdu-Cr772mH3U8AMBPDTvFojiuFG4gsj/view?usp=drive_link";

const Hero = () => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({behavior: "smooth"});
    };

    return (
        <section
            id="home"
            className="px-5 md:px-10 pt-12 pb-16 md:pt-16 md:pb-20"
            style={{scrollMarginTop: "80px"}}
        >
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">

                {/* Left: Text */}
                <div className="space-y-6" style={{containerType: "inline-size"}}>

                    {/* Availability badge */}
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-2.5 w-2.5">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                style={{backgroundColor: "var(--pp-green)"}}
                            />
                            <span
                                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                                style={{backgroundColor: "var(--pp-green)"}}
                            />
                        </span>
                        <span className="text-sm font-semibold" style={{color: "var(--pp-green)"}}>
                            Available for Projects
                        </span>
                    </div>

                    {/* Eyebrow label */}
                    <p
                        className="uppercase tracking-widest"
                        style={{color: "var(--pp-muted)", fontSize: "13px", fontWeight: 600}}
                    >
                        Software Engineer · Backend
                    </p>

                    {/* Headline */}
                    <h1
                        style={{
                            color: "var(--pp-text)",
                            fontSize: "clamp(22px, 6.5cqi, 52px)",
                            fontWeight: 800,
                            lineHeight: 1.4,
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                        }}
                    >
                        <span style={{whiteSpace: "nowrap"}}>Developing systems that scale.</span><br/>
                        <span style={{whiteSpace: "nowrap"}}>Building infrastructure that lasts.</span>
                    </h1>

                    {/* Subtext */}
                    <p
                        style={{
                            color: "var(--pp-muted)",
                            fontSize: "16px",
                            lineHeight: 1.7,
                            maxWidth: "540px",
                            textAlign: "justify",
                        }}
                    >
                        Software Engineer with 2.5+ years building fault-tolerant distributed systems, identity and security infrastructure, REST APIs, and
                        microservices at scale (Java, Spring Boot, PostgreSQL/Oracle, Kafka). Combines hands-on engineering with Agile/Scrum Master
                        leadership across cross-functional teams. Built and open-sourced an AI-powered PR review tool that cut review time by 50%.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-3 pt-1">
                        <button onClick={() => scrollToSection("experience")} className="pp-btn-primary">
                            See My Work
                            <ArrowRight size={17}/>
                        </button>

                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pp-btn-secondary"
                        >
                            <Download size={17}/>
                            Download Resume
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-5 pt-2">
                        {[
                            {href: "https://github.com/vishwajeet-singhh", icon: Github, label: "GitHub"},
                            {href: "https://www.linkedin.com/in/vishyysingh/", icon: Linkedin, label: "LinkedIn"},
                            {href: "mailto:vishy.devv@gmail.com", icon: Mail, label: "Email"},
                            {href: "https://vishwajeet.me", icon: Globe, label: "Website"},
                        ].map(({href, icon: Icon, label}) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="transition-colors duration-150"
                                style={{color: "var(--pp-muted)"}}
                                title={label}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--pp-blue)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--pp-muted)";
                                }}
                            >
                                <Icon size={20}/>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Profile image */}
                <div className="flex justify-center lg:justify-end">
                    <div
                        className="w-64 h-64 md:w-[340px] md:h-[340px] overflow-hidden"
                        style={{
                            borderRadius: "20px",
                            border: "1px solid var(--pp-border)",
                            backgroundColor: "var(--pp-card)",
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="Vishwajeet Pratap Singh"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

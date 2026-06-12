import { ArrowRight, Download, Github, Linkedin, Mail, Globe } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const RESUME_URL =
    "https://drive.google.com/file/d/1XsD4Zm-YxP-jUMyoA1Iwd2bzGHlhEba7/view?usp=drive_link";

const Hero = () => {
    const scrollToSection = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="min-h-[88vh] flex items-center"
            style={{ backgroundColor: "#FAF9F6" }}
        >
            <div className="container mx-auto px-6 py-24" style={{ maxWidth: "1100px" }}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text */}
                    <div className="space-y-7">

                        {/* Availability badge */}
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                                    style={{ backgroundColor: "#028561" }}
                                />
                                <span
                                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                                    style={{ backgroundColor: "#028561" }}
                                />
                            </span>
                            <span className="text-sm font-medium" style={{ color: "#028561" }}>
                                Available for Projects
                            </span>
                        </div>

                        {/* Eyebrow label */}
                        <p
                            className="text-xs uppercase tracking-widest font-medium"
                            style={{ color: "#999" }}
                        >
                            Software Engineer · Backend
                        </p>

                        {/* Headline */}
                        <h1
                            className="font-bold"
                            style={{
                                color: "#1A1A1A",
                                fontSize: "clamp(2rem, 3.2vw, 3rem)",
                                lineHeight: "1.1",
                            }}
                        >
                            Systems that scale.<br />
                            Infrastructure that holds.
                        </h1>

                        {/* Subtext */}
                        <p
                            className="text-base leading-relaxed"
                            style={{ color: "#4A4A4A", lineHeight: "1.8", maxWidth: "520px", textAlign: "justify" }}
                        >
                            I'm Vishwajeet — a backend engineer with 2.5+ years of experience
                            designing and shipping production-grade systems end-to-end. Java,
                            Spring Boot, distributed architecture, and the quiet satisfaction
                            of things that just work.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => scrollToSection("#experience")}
                                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-200"
                                style={{
                                    backgroundColor: "#15372C",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0f2a1f";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#15372C";
                                }}
                            >
                                See My Work
                                <ArrowRight size={15} />
                            </button>

                            <a
                                href={RESUME_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border transition-all duration-200"
                                style={{
                                    borderColor: "rgba(21,55,44,0.3)",
                                    color: "#15372C",
                                    backgroundColor: "transparent",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = "#15372C";
                                    el.style.backgroundColor = "rgba(21,55,44,0.04)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = "rgba(21,55,44,0.3)";
                                    el.style.backgroundColor = "transparent";
                                }}
                            >
                                <Download size={15} />
                                Download Resume
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-5 pt-1">
                            {[
                                { href: "https://github.com/vishwajeet-singhh", icon: Github, label: "GitHub" },
                                { href: "https://www.linkedin.com/in/vishyysingh/", icon: Linkedin, label: "LinkedIn" },
                                { href: "mailto:vishy.devv@gmail.com", icon: Mail, label: "Email" },
                                { href: "https://vishwajeet.me", icon: Globe, label: "Website" },
                            ].map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="transition-opacity duration-150"
                                    style={{ color: "#888", opacity: 1 }}
                                    title={label}
                                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.5"; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Profile image */}
                    <div className="flex justify-center lg:justify-end">
                        <div
                            className="w-72 h-72 md:w-[380px] md:h-[380px] overflow-hidden"
                            style={{
                                borderRadius: "12px",
                                boxShadow: "0 8px 40px rgba(21,55,44,0.12)",
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
            </div>
        </section>
    );
};

export default Hero;

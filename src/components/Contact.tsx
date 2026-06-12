import {Github, Globe, Linkedin, Mail} from "lucide-react";

const Contact = () => {
    const contactLinks = [
        {
            icon: Mail,
            label: "Email",
            value: "vishy.devv@gmail.com",
            href: "mailto:vishy.devv@gmail.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/vishyysingh",
            href: "https://www.linkedin.com/in/vishyysingh/",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/vishwajeet-singhh",
            href: "https://github.com/vishwajeet-singhh",
        },
        {
            icon: Globe,
            label: "Website",
            value: "vishwajeet.me",
            href: "https://vishwajeet.me",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-secondary/40">
            <div
                className="container mx-auto px-6 flex flex-col items-center text-center"
                style={{maxWidth: "700px"}}
            >
                {/* Eyebrow */}
                <p
                    className="text-xs uppercase tracking-widest font-medium mb-4"
                    style={{color: "#999"}}
                >
                    Contact
                </p>

                {/* Heading */}
                <h2
                    className="text-4xl md:text-5xl font-bold mb-5"
                    style={{color: "#1A1A1A"}}
                >
                    Let's Build Something.
                </h2>

                {/* Subtext */}
                <p
                    className="text-lg mb-6"
                    style={{color: "#4A4A4A", lineHeight: "1.8", maxWidth: "480px"}}
                >
                    I'm available for backend projects, freelance work, and full-time roles.
                    Especially interested in fintech and distributed systems.
                </p>

                {/* Availability badge */}
                <div className="flex items-center gap-2.5 mb-14">
                    <span className="relative flex h-2.5 w-2.5">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                            style={{backgroundColor: "#028561"}}
                        />
                        <span
                            className="relative inline-flex h-2.5 w-2.5 rounded-full"
                            style={{backgroundColor: "#028561"}}
                        />
                    </span>
                    <span className="text-sm font-medium" style={{color: "#028561"}}>
                        Available for Projects
                    </span>
                </div>

                {/* Contact link cards — 2×2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {contactLinks.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex flex-col items-center gap-2 px-4 border transition-all duration-150"
                            style={{
                                borderColor: "rgba(21,55,44,0.15)",
                                borderRadius: "10px",
                                backgroundColor: "#fff",
                                textDecoration: "none",
                                minHeight: "110px",
                                justifyContent: "center",
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "#15372C";
                                el.style.backgroundColor = "rgba(21,55,44,0.03)";
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "rgba(21,55,44,0.15)";
                                el.style.backgroundColor = "#fff";
                            }}
                        >
                            <item.icon size={20} style={{color: "#15372C"}}/>
                            <span
                                className="text-xs uppercase tracking-widest font-medium"
                                style={{color: "#999"}}
                            >
                                {item.label}
                            </span>
                            <span
                                className="font-medium text-center"
                                style={{color: "#1A1A1A", fontSize: "14px"}}
                            >
                                {item.value}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;

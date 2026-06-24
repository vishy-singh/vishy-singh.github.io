import {ArrowUpRight, GitPullRequest, Github, Star} from "lucide-react";

const HELIX_URL = "https://github.com/vishy-singh/helix";

const Projects = () => {
    const stack = [
        "Java",
        "Spring Boot",
        "Docker",
        "REST API",
        "Webhooks",
        "Ollama",
        "LLM",
        "GCP",
        "Nginx",
        "Maven",
    ];

    return (
        <section
            id="projects"
            className="px-5 md:px-10 py-12 md:py-16"
            style={{scrollMarginTop: "80px"}}
        >
            {/* Eyebrow */}
            <p
                className="uppercase tracking-widest mb-3"
                style={{color: "var(--pp-blue)", fontSize: "13px", fontWeight: 600}}
            >
                Open Source
            </p>

            {/* Heading */}
            <h2
                className="mb-8"
                style={{color: "var(--pp-text)", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800}}
            >
                Featured Project
            </h2>

            {/* Featured card */}
            <div className="pp-card" style={{padding: "28px"}}>
                {/* Title row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex items-center justify-center flex-shrink-0"
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "12px",
                                backgroundColor: "var(--pp-nav-active-bg)",
                            }}
                        >
                            <GitPullRequest size={24} style={{color: "var(--pp-blue)"}}/>
                        </div>
                        <div>
                            <div className="flex items-center gap-2.5">
                                <h3 style={{color: "var(--pp-text)", fontSize: "22px", fontWeight: 700}}>
                                    Helix
                                </h3>
                                <span
                                    className="pp-chip pp-chip-blue"
                                    style={{fontSize: "12px", padding: "4px 12px"}}
                                >
                                    <Star size={12} style={{marginRight: "5px"}}/>
                                    Open Source
                                </span>
                            </div>
                            <p style={{color: "var(--pp-muted)", fontSize: "14px", fontWeight: 600, marginTop: "2px"}}>
                                Self-hosted AI PR-review tool
                            </p>
                        </div>
                    </div>

                    <a
                        href={HELIX_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pp-btn-primary"
                        style={{padding: "11px 22px", fontSize: "15px"}}
                    >
                        <Github size={17}/>
                        View on GitHub
                        <ArrowUpRight size={16}/>
                    </a>
                </div>

                {/* Description */}
                <p
                    className="mb-6"
                    style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify"}}
                >
                    Built and open-sourced a self-hosted AI pull-request review tool, shipped as a
                    public Docker image so any team can pull, deploy on their own infra, and connect
                    their GitHub org with zero vendor lock-in or per-seat licensing. It automates
                    GitHub PR reviews - cutting review time by 50% while catching issues that are
                    difficult or impossible for a human reviewer to consistently spot.
                </p>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-2.5">
                    {stack.map((tech) => (
                        <span key={tech} className="pp-chip">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

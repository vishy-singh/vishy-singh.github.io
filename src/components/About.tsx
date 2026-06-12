const About = () => {
    const stats = [
        { value: "2.5+", label: "Years Exp" },
        { value: "8+",   label: "Systems Built" },
        { value: "3",    label: "Databases" },
    ];

    return (
        <section id="about" className="py-24 bg-secondary/40">
            <div className="container mx-auto px-6" style={{ maxWidth: "1100px" }}>

                {/* Heading */}
                <div className="mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: "#1A1A1A" }}
                    >
                        About Me
                    </h2>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">

                    {/* Left: Bio (2/3) */}
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-lg leading-relaxed" style={{ color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify" }}>
                            I started as an intern and quickly grew into the engineer responsible
                            for designing entire systems from the ground up — IAM, billing engines,
                            schema intelligence, licensing, cloud infrastructure. All of it, solo.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify" }}>
                            Along the way I also took on the role of Scrum Master — running sprint
                            ceremonies, unblocking the team, and keeping delivery on track — while
                            continuing to ship as an individual contributor. It taught me that good
                            engineering is as much about communication as it is about code.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify" }}>
                            I'm drawn to backend problems that have real consequences: fintech
                            systems where money moves, distributed architectures where failures
                            cascade, APIs that serve at scale. That's where I do my best work.
                        </p>
                        <p className="text-lg leading-relaxed" style={{ color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify" }}>
                            Outside of professional work, I've built features involving event-driven
                            systems with Apache Kafka, implemented Redis caching layers that cut
                            response times significantly, refactored legacy codebases for
                            maintainability, and worked across the full backend lifecycle from
                            design to deployment to production support.
                        </p>
                    </div>

                    {/* Right: Stats (1/3) */}
                    <div className="space-y-10">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div
                                    className="font-bold leading-none mb-2"
                                    style={{ color: "#15372C", fontSize: "48px" }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs uppercase tracking-widest font-medium"
                                    style={{ color: "#999" }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

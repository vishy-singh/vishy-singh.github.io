const About = () => {
    const stats = [
        {value: "2.5+", label: "Years Exp"},
        {value: "4+", label: "Systems Built"},
        {value: "3", label: "Databases"},
        {value: "60+", label: "REST APIs"},
        {value: "60K+", label: "Lines of Code"},
    ];

    return (
        <section id="about" className="py-24 bg-secondary/40">
            <div className="container mx-auto px-6" style={{maxWidth: "1100px"}}>

                {/* Heading */}
                <div className="mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{color: "#1A1A1A"}}
                    >
                        About Me
                    </h2>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">

                    {/* Left: Bio (2/3) */}
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-lg leading-relaxed"
                           style={{color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify"}}>
                            I began as an intern but quickly grew into the lead engineer role, designing and building
                            entire systems on my own-including IAM, billing engines, schema intelligence, licensing, and
                            cloud infrastructure. Alongside my work as an individual contributor, I also took on the
                            Scrum Master role, running sprint ceremonies, removing blockers, and keeping the team on
                            track. This experience reinforced for me that great engineering is as much about clear
                            communication as it is about technical skill.
                        </p>
                        <p className="text-lg leading-relaxed"
                           style={{color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify"}}>
                            I’m passionate about tackling challenging backend problems with real-world impact-whether
                            it’s fintech systems handling money movements, distributed architectures where failures
                            cascade, or high-scale APIs. These are the areas where I do my best work.
                        </p>

                        <p className="text-lg leading-relaxed"
                           style={{color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify"}}>
                            I’m passionate about tackling challenging backend problems with real-world impact-whether
                            it’s fintech systems handling money movements, distributed architectures where failures
                            cascade, or high-scale APIs. These are the areas where I do my best work.
                        </p>
                        <p className="text-lg leading-relaxed"
                           style={{color: "#3A3A3A", lineHeight: "1.85", textAlign: "justify"}}>
                            I’m genuinely passionate about fintech and distributed systems. What really drives me is
                            building backend systems that can handle financial transactions, process large volumes of
                            data reliably, and stay resilient as they scale. As a backend engineer, I find the
                            challenges of ensuring system reliability, performance, and fault tolerance the most
                            exciting and rewarding to solve.

                        </p>
                    </div>

                    {/* Right: Stats (1/3) */}
                    <div className="space-y-10">
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div
                                    className="font-bold leading-none mb-2"
                                    style={{color: "#15372C", fontSize: "48px"}}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs uppercase tracking-widest font-medium"
                                    style={{color: "#999"}}
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

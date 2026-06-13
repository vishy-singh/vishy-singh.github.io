const About = () => {
    const stats = [
        {value: "2.5+", label: "Years Exp"},
        {value: "4+", label: "Systems Built"},
        {value: "3", label: "Databases"},
        {value: "60+", label: "REST APIs"},
        {value: "60K+", label: "Lines of Code"},
    ];

    return (
        <section
            id="about"
            className="px-5 md:px-10 py-12 md:py-16"
            style={{scrollMarginTop: "80px"}}
        >
            {/* Heading */}
            <h2
                className="mb-8"
                style={{color: "var(--pp-text)", fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800}}
            >
                About Me
            </h2>

            {/* Bio card */}
            <div className="pp-card" style={{padding: "28px"}}>
                <div className="space-y-5">
                    <p style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify"}}>
                        I began as an intern but quickly grew into the lead engineer role, designing and building
                        entire systems on my own-including IAM, billing engines, schema intelligence, licensing, and
                        cloud infrastructure. Alongside my work as an individual contributor, I also took on the
                        Scrum Master role, running sprint ceremonies, removing blockers, and keeping the team on
                        track. This experience reinforced for me that great engineering is as much about clear
                        communication as it is about technical skill.
                    </p>
                    <p style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify"}}>
                        I’m passionate about tackling challenging backend problems with real-world impact-whether
                        it’s fintech systems handling money movements, distributed architectures where failures
                        cascade, or high-scale APIs. These are the areas where I do my best work.
                    </p>
                    <p style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify"}}>
                        I’m passionate about tackling challenging backend problems with real-world impact-whether
                        it’s fintech systems handling money movements, distributed architectures where failures
                        cascade, or high-scale APIs. These are the areas where I do my best work.
                    </p>
                    <p style={{color: "var(--pp-body)", fontSize: "16px", lineHeight: 1.7, textAlign: "justify"}}>
                        I’m genuinely passionate about fintech and distributed systems. What really drives me is
                        building backend systems that can handle financial transactions, process large volumes of
                        data reliably, and stay resilient as they scale. As a backend engineer, I find the
                        challenges of ensuring system reliability, performance, and fault tolerance the most
                        exciting and rewarding to solve.
                    </p>
                </div>
            </div>

            {/* Stats — metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {stats.map((stat, i) => (
                    <div key={i} className="pp-card" style={{padding: "24px"}}>
                        <div
                            className="leading-none"
                            style={{color: "var(--pp-text)", fontSize: "40px", fontWeight: 800}}
                        >
                            {stat.value}
                        </div>
                        <div
                            className="mt-2"
                            style={{color: "var(--pp-muted)", fontSize: "13px", fontWeight: 600}}
                        >
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;

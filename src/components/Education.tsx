import {GraduationCap} from "lucide-react";

const Education = () => {
    const entries = [
        {
            degree: "B.Tech — Computer Science",
            institute: "Techno India University, Kolkata",
            meta: "2023  ·  CGPA 8.64 / 10",
            note: "Strong foundation in Data Structures, OS, Networks, and DBMS — applied daily in production backend work.",
        },
        {
            degree: "Java Full Stack Development",
            institute: "Q-Spider, Kolkata",
            meta: "Dec 2023",
            note: null,
        },
    ];

    return (
        <section id="education" className="py-24">
            <div className="container mx-auto px-6" style={{maxWidth: "1100px"}}>

                {/* Eyebrow + Heading */}
                <div className="mb-16">
                    <p
                        className="text-xs uppercase tracking-widest font-medium mb-3"
                        style={{color: "#999"}}
                    >
                        Education
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{color: "#1A1A1A"}}
                    >
                        Education
                    </h2>
                </div>

                <div className="max-w-2xl space-y-10">
                    {entries.map((entry, i) => (
                        <div
                            key={i}
                            className="flex gap-5 items-start"
                        >
                            <div
                                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg"
                                style={{backgroundColor: "rgba(21,55,44,0.08)"}}
                            >
                                <GraduationCap size={18} style={{color: "#15372C"}}/>
                            </div>
                            <div>
                                <h3
                                    className="text-lg font-semibold mb-0.5"
                                    style={{color: "#1A1A1A"}}
                                >
                                    {entry.degree}
                                </h3>
                                <p
                                    className="text-sm mb-1"
                                    style={{color: "#028561", fontWeight: 500}}
                                >
                                    {entry.institute}
                                </p>
                                <p
                                    className="text-xs uppercase tracking-widest mb-2"
                                    style={{color: "#aaa"}}
                                >
                                    {entry.meta}
                                </p>
                                {entry.note && (
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{color: "#777", lineHeight: "1.7", fontSize: "14px"}}
                                    >
                                        {entry.note}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

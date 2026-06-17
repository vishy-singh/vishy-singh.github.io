import {useEffect, useState} from "react";
import {Menu, User, X} from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log("scroll position:", window.scrollY);
            const navHeight = document.querySelector("nav")?.getBoundingClientRect().height;
            setIsScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            setIsMobileMenuOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {name: "Home", href: "#home"},
        {name: "About", href: "#about"},
        {name: "Experience", href: "#experience"},
        {name: "Skills", href: "#skills"},
        {name: "Services", href: "#services"},
        {name: "Contact", href: "#contact"},
        {name: "Resume", href: "https://drive.google.com/file/d/1XsD4Zm-YxP-jUMyoA1Iwd2bzGHlhEba7/view?usp=drive_link"}
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
            setIsMobileMenuOpen(false);
            setActiveSection(href.replace("#", ""));
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${isScrolled ? "shadow-sm" : ""}`}
            style={{borderBottom: "1px solid #e5e7eb"}}
        >
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#home");
                        }}
                        className="text-xl tracking-tight"
                        style={{
                            color: "#15372C",
                            fontFamily: 'Helvetica',
                            fontWeight: 400,
                            letterSpacing: "-0.02em",
                            textDecoration: "none",
                            fontSize: "1.65rem"
                        }}
                    >
                        Vishwajeet Pratap Singh
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            const isHighlighted = isActive || hoveredItem === item.name;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        if (item.href.startsWith("http")) return;
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    className="text-sm pb-1 transition-all duration-150"
                                    style={{
                                        color: isHighlighted ? "#028561" : "#15372c",
                                        fontFamily: 'Inter',
                                        fontWeight: isActive ? 600 : 400,
                                        borderBottom: isHighlighted ? "2px solid #15372C" : "2px solid transparent",
                                        textDecoration: "none",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    {item.name}
                                </a>
                            );
                        })}

                        {/* Avatar icon */}
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150"
                            style={{backgroundColor: "#15372C"}}
                            title="Get In Touch"
                        >
                            <User size={16} color="white"/>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        style={{color: "#15372C"}}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-white md:hidden">
                        <div className="flex justify-between items-center px-6 py-4"
                             style={{borderBottom: "1px solid #e5e7eb"}}>
                            <span
                                className="text-xl"
                                style={{
                                    color: "#15372C",
                                    fontFamily: '"Untitled Serif", Georgia, serif',
                                    fontWeight: 400
                                }}
                            >
                                vishwajeet
                            </span>
                            <button onClick={() => setIsMobileMenuOpen(false)} style={{color: "#15372C"}}
                                    className="p-2">
                                <X size={22}/>
                            </button>
                        </div>

                        <div className="flex flex-col p-6 space-y-5">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className="text-sm font-medium"
                                    style={{color: "#15372C", fontFamily: "Inter, sans-serif", textDecoration: "none"}}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {name: "Home", href: "#home"},
        {name: "About", href: "#about"},
        {name: "Experience", href: "#experience"},
        {name: "Skills", href: "#skills"},
        {name: "Services", href: "#services"},
        {name: "Contact", href: "#contact"},
        {name: "Resume", href: "https://drive.google.com/file/d/1ES1_aBKl0fp3heBVTYLm83r1T_-s4eV3/view"}
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
                isScrolled ? "bg-card/95 backdrop-blur-sm shadow-elegant" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#home");
                        }}
                        className="text-xl font-bold text-foreground hover:text-primary transition-fast"
                    >
                        Vishwajeet Pratap Singh
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                      {navItems.map((item) => (
                          <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                // if the link is external (like Google Drive)
                                if (item.href.startsWith("http")) {
                                  // allow it to open normally in a new tab
                                  return;
                                }

                                // otherwise, prevent default and scroll smoothly
                                e.preventDefault();
                                scrollToSection(item.href);
                              }}
                              target={item.href.startsWith("http") ? "_blank" : "_self"}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-sm font-medium text-foreground hover:text-primary transition-fast relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-smooth"
                          >
                            {item.name}
                          </a>
                      ))}
                        <Button
                            variant="hero"
                            size="sm"
                            onClick={() => scrollToSection("#contact")}
                        >
                            Get In Touch
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-fast"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-white/90 backdrop-blur-md shadow-md md:hidden animate-fade-in"
                    >
                        <div className="flex justify-between items-center px-6 py-4 border-b">
                            <span className="text-lg font-semibold">Vishwajeet Singh</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-foreground hover:text-primary transition-fast"
                            >
                                <X size={24}/>
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className="text-base font-medium text-foreground hover:text-primary transition-fast"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button
                                variant="hero"
                                size="sm"
                                className="mt-4 w-full"
                                onClick={() => scrollToSection("#contact")}
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;

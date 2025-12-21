import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education"

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navigation/>
            <Hero/>
            <About/>
            <Experience/>
            <Skills/>
            <Services/>
            <Education/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Index;

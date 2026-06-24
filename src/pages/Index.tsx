import DashboardLayout from "@/components/DashboardLayout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education"

const Index = () => {
    return (
        <DashboardLayout>
            <Hero/>
            <Projects/>
            <About/>
            <Skills/>
            <Experience/>
            <Services/>
            <Education/>
            <Contact/>
            <Footer/>
        </DashboardLayout>
    );
};

export default Index;

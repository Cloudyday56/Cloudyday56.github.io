import {useState} from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Links from "./components/Links";
import SectionWrapper from "./components/SectionWrapper";
import ScrollManager from "./components/ScrollManager";

export default function App() {
    const [activeSection, setActiveSection] = useState("intro");

    return (
        <div className="md:overflow-hidden md:h-screen">
            <Background/>
            <Navbar activeSection={activeSection}/>
            <ScrollManager activeSection={activeSection} onNavigate={setActiveSection}/>

            <main className="relative z-10">
                <SectionWrapper id="intro" activeSection={activeSection} onActivate={setActiveSection}>
                    <Intro/>
                </SectionWrapper>
                <SectionWrapper id="experience" activeSection={activeSection} onActivate={setActiveSection}>
                    <Experience/>
                </SectionWrapper>
                <SectionWrapper id="projects" activeSection={activeSection} onActivate={setActiveSection}>
                    <Projects/>
                </SectionWrapper>
                <SectionWrapper id="links" activeSection={activeSection} onActivate={setActiveSection}>
                    <Links/>
                </SectionWrapper>
            </main>
        </div>
    );
}
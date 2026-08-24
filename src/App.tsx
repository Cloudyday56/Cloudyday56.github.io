import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Background from "./components/Background";

function App() {
    return (
        <div className="min-h-screen scroll-smooth relative">
            <Background/>
            <Navbar/>
            {/* Desktop layout */}
            <div className="hidden md:block relative z-10">
                <div className="min-h-screen">
                    <Intro/>
                </div>
                {/* Experience section */}
                <div className="min-h-screen">
                    <Experience/>
                </div>
                <div className="min-h-screen">
                    <Projects/>
                </div>
                <div className="min-h-screen flex flex-col h-full justify-between">
                    <div className="flex-1 flex items-center justify-center pb-10">
                        <Links/>
                    </div>
                </div>
            </div>
            {/* Mobile layout */}
            <div className="block md:hidden relative z-10">
                <Intro/>
                <div className="w-full h-36 md:hidden"/>
                <Experience/>
                <Projects/>
                <Links/>
            </div>
        </div>
    );
}

export default App;
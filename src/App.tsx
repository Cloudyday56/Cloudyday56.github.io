import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div
      data-theme="luxury"
      className="min-h-screen md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth relative"
    >
      <Background />
      <Navbar />
      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="min-h-screen snap-start">
          <Intro />
        </div>
        <div className="min-h-screen snap-start">
          <Skills />
        </div>
        <div className="min-h-screen snap-start">
          <Projects />
        </div>
        <div className="min-h-screen snap-start flex flex-col h-full justify-between">
          <div className="flex-1 flex items-center justify-center pb-10">
            <Links />
          </div>
          <Footer />
        </div>
      </div>
      {/* Mobile layout */}
      <div className="block md:hidden">
        <Intro />
        <Skills />
        <div className="w-full h-36 md:hidden" />
        <Projects />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;

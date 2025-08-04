import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <div data-theme="luxury">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Links />
      <Footer />
    </div>
  );
}

export default App;

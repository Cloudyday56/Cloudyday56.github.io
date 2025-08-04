import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";

function App() {
  return (
    <div data-theme="luxury">
      <Intro />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
}

export default App;

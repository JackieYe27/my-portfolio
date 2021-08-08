import IntroductionHero from "./components/IntroductionHero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
const App = () => {
  return (
    <div className="App">
      <IntroductionHero /> 
      <AboutMe />
      <Projects />
      <Skills />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;

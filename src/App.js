import IntroductionHero from "./components/IntroductionHero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
const App = () => {
  return (
    <div className="App">
      <IntroductionHero /> 
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

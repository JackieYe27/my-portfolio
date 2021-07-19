import IntroductionHero from "./components/IntroductionHero";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div className="App">
      <IntroductionHero /> 
      <AboutMe />
      <Parallax /> 
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

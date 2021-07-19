import IntroductionHero from "./components/IntroductionHero";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css"

const App = () => {
  return (
    <div className="App">
      <IntroductionHero /> 
      <Parallax /> 
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

import IntroductionHero from "./components/IntroductionHero";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";


const App = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <IntroductionHero />
      <Parallax />
      <Projects />
    </div>
  );
}

export default App;

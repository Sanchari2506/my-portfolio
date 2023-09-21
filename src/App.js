import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
    </div>
  );
}

export default App;

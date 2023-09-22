import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Service from "./components/Service";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Service/>
    </div>
  );
}

export default App;

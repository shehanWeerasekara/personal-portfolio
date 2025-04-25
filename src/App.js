import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
//import VideoBackground from './Components/VideoBackground/VideoBackground';

function App() {
  return (
    <div>
      {/* <VideoBackground />  */}
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portifolio';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
}

export default App;

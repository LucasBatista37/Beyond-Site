import Hero from "./Hero";
import About from "../components/About";
import Portfolio from "../components/Portifolio.jsx";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Navbar from "./NavBar.jsx";

export default function Layout() {
  return (
    <div className="relative overflow-visible">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <circle cx="600" cy="100" r="300" fill="rgba(255,255,255,0.03)" />
        <circle cx="200" cy="500" r="250" fill="rgba(255,255,255,0.02)" />
      </svg>

      <main className="relative z-10">
        <Navbar/>
        <Hero />
        <About />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

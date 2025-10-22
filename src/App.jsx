import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import HorizontalCarousel from "./components/HorizontalCarousel";
import TrueFocus from "./components/TrueFocus";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />

  <About />
  <TrueFocus sentence="Event Highlights" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} />
  <HorizontalCarousel />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

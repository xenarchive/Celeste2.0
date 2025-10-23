import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import HorizontalCarousel from "./components/HorizontalCarousel";
import TrueFocus from "./components/TrueFocus";
import Gallery from "./components/Gallery";



function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />

  <About />
  <div className="-mt-40">
    <TrueFocus sentence="Event Highlights" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} />
  </div>
  <HorizontalCarousel />
      <Gallery />
    </main>
  );
}

export default App;

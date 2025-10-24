import { useState } from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import HorizontalCarousel from "./components/HorizontalCarousel";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import SpecialThanks from "./components/SpecialThanks";
import { Route, Routes } from 'react-router-dom';
import RegistrationLink from './components/EventRegsitration';
import Team from './components/Team';
import Details from "./components/Details";
import PocSection from './components/POC';

const sampleEvents = [
  {
    id: 1,
    name: "Pot Painting: Matir Kella",
    date: "November 8, 2025",
    time: "01:00 PM - 02:30 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Let your creativity take root! Grab your brushes and turn simple pots into works of art—quirky, aesthetic, or wildly weird. Go classic or chaotic, just make sure your pot's got personality!",
    registrationLink: "https://forms.gle/sCAtDdX5bsHSwvjTA",
  },
  {
    id: 2,
    name: "Short Film Making: Shilper Ayna",
    date: "November 8, 2025",
    time: "01:00 PM - 04:00 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Got a story to tell? Here's your spotlight! Script, shoot, and edit your own short film packed with emotion, creativity, and flair. Small runtime, big impact—your movie moment starts now!",
    registrationLink: "https://forms.gle/1zLDc1AdbcooxJaZ9",
  },
  {
    id: 3,
    name: "Cover Art: Echos of Ray",
    date: "November 8, 2025",
    time: "03:00 PM - 04:00 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Judge a movie by your cover! Reimagine your favorite film posters with your own artistic twist—bold, minimal, dramatic, or totally wild. Let your creativity roll the credits in style!",
    registrationLink: "https://forms.gle/GsX8tLEP6gUTmSgU9",
  },
  {
    id: 4,
    name: "Face Painting: Ruper Rong",
    date: "November 8, 2025",
    time: "04:00 PM - 05:30 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Your face, your canvas! Whether it's a fierce tiger, a glittery galaxy, or your alter ego from another world, paint it loud and proud! It's messy, colorful, and guaranteed to turn heads (literally).",
    registrationLink: "https://forms.gle/Y1y9gekrBCL5GH2NA",
  },
    {
    id: 5,
    name: "Film Debate: Charulata'r Charcha",
    date: "November 9, 2025",
    time: "10:00 AM - 01:00 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Lights, Camera, Argue! Battle it out over the best movies, epic plot twists, and Oscar-worthy performances. Defend your favorite film with passion, wit, and drama—because in this showdown, only the sharpest critics survive!",
    registrationLink: "https://forms.gle/R29beA5ULSe7zGkq5",
  },
    {
    id: 6,
    name: "Film Quiz: Rahasya Bhed",
    date: "November 9, 2025",
    time: "11:00 AM - 01:00 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Think you are a movie maniac? Prove your cinematic smarts in a quiz packed with iconic dialogues, legendary trivia, and wild behind-the-scenes moments. From Marvel to Ray—only the truest cinephile wins the frame!",
    registrationLink: "https://forms.gle/w3dhcs43iHq1PZx89",
  },
    {
    id: 7,
    name: "Fabric Painting: Bastra Chitra",
    date: "November 9, 2025",
    time: "12:00 PM - 01:30 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Unleash your inner Picasso—on fabric! Splatter, blend, and create magic with colors and patterns that scream you. Turn a plain cloth into a wearable masterpiece and let your art walk the runway of imagination!",
    registrationLink: "https://forms.gle/csrNH8RGSTMqLq3Y6",
  },
    {
    id: 8,
    name: "Reelomania: Ray o Reel",
    date: "To Be Announced",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Ready, Set, Shoot! Make a reel that's funny, fab, or just pure chaos. Whether it's cinematic magic or meme-worthy moments, let your creativity steal the scroll! Lights, Camera, Virality!",
    registrationLink: "https://forms.gle/ptuDhMju7UhBd16S7",
  },
    {
    id: 9,
    name: "Art Exhibition: Chhobi Rajar Deshe",
    date: "To Be Announced",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "A creative wonderland awaits! Explore a gallery of imagination where every artwork, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!",
    registrationLink: "https://forms.gle/ie1Z8tGtSaQUQ5X48",
  },
    {
    id: 10,
    name: "Photography Exhibition: Framebondi Jibon",
    date: "To Be Announced",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "A creative wonderland awaits! Explore a gallery of imagination where every photo, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!",
    registrationLink: "https://forms.gle/u1xVQU1LWgnAVQ2RA",
  },
]

function App() {
  // eslint-disable-next-line no-unused-vars
  const [galleryReady, setGalleryReady] = useState(false);

  return (
    <Routes>
      <Route path="/" element={
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <SpecialThanks />
          <HorizontalCarousel />
          <Gallery onReady={() => setGalleryReady(true)} />
          <Details />
          {/* <Team />  */}
          <PocSection />
          <Footer />
        </main>
      } />
      <Route path="/registration-link" element={<RegistrationLink />} />
      <Route path="/team" element={<Team />} />
      <Route path="/timeline" element={<Timeline events={sampleEvents} />} />
    </Routes>
  );
}

export default App;

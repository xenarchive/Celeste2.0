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

const sampleEvents = [
  {
    id: 1,
    name: "Matir Kella: Pot Painting",
    date: "November 8, 2025",
    time: "01:00 PM - 02:30 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Get ready for Matir Kella, a pot painting extravaganza celebrating imagination and storytelling in true Satyajit Ray style! Every plain clay pot conveys your canvas for whimsical worlds and vibrant adventures, where colors roar and brushstrokes sing. Let your creativity take root, go classic or chaotic, up and sure your pot’s got personality!",
    registrationLink: "https://example.com/register",
  },
  {
    id: 2,
    name: "Echos of Ray: Cover Art",
    date: "November 8, 2025",
    time: "03:00 PM - 04:00 PM",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Echoes of Ray celebrates the timeless prolificness of Satyajit Ray, inviting artists to re-imagine his world through design, crafting covers for films, books, or albums turning simplicity into storytelling. From analog strokes to digital finesse, each creation imparts dialogue between past and present, tradition and innovation, with every line, hue and frame echoing Ray’s artistry.",
    registrationLink: "https://example.com/register",
  },
  {
    id: 3,
    name: "Ruper Rong: Face Painting",
    date: "May 10, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Step into Ruper Rong, where brushes become wands and colors tell tales! Inspired by Satyajit Ray, this celebration of creativity and teamwork lets you transform faces into magical creatures, cinematic characters, or vibrant stories in just 60 minutes. Let your imagination run wild, paint loud and proud, and turn every face into a canvas of cinematic expression!",
    registrationLink: "https://example.com/register",
  },
  {
    id: 4,
    name: "Shilper Ayna: Short Film",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 5,
    name: "Charulata'r Charcha: Film Debate",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 6,
    name: "Rahasya Bhed: Film Quiz",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 7,
    name: "Bastra Chitra: Fabric Painting",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 8,
    name: "Chhobi Rajar Deshe: Exhibition",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 9,
    name: "Framebondi Jibon: Photography Exhibtiion",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
    {
    id: 10,
    name: "Ray o Reel: Campus-Wide Reel Challenge",
    date: "June 5, 2025",
    time: "To Be Announced",
    venue: "To Be Announced",
    guests: "To Be Announced",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
]

function App() {
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
          <Timeline events={sampleEvents} startWhen={galleryReady} />
          <Team />
          <Footer />
        </main>
      } />
      <Route path="/registration-link" element={<RegistrationLink />} />
    </Routes>
  );
}

export default App;

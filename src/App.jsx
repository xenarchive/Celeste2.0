import { useState } from 'react';
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import HorizontalCarousel from "./components/HorizontalCarousel";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
// import { Route } from 'react-router-dom';
// import RegistrationLink from './components/EventRegsitration';

const sampleEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "March 15, 2025",
    venue: "San Francisco Convention Center",
    guests: "500+ Attendees",
    description: "Join industry leaders for a day of cutting-edge tech talks, networking, and innovation showcases.",
    registrationLink: "https://example.com/register",
  },
  {
    id: 2,
    name: "Web Development Workshop",
    date: "April 2, 2025",
    venue: "New York Tech Hub",
    guests: "100 Participants",
    description: "Hands-on workshop covering React, Next.js, and modern web development best practices.",
    registrationLink: "https://example.com/register",
  },
  {
    id: 3,
    name: "AI & Machine Learning Summit",
    date: "May 10, 2025",
    venue: "Boston Innovation Center",
    guests: "300+ Attendees",
    description: "Explore the latest advancements in AI, machine learning, and their real-world applications.",
    registrationLink: "https://example.com/register",
  },
  {
    id: 4,
    name: "Startup Networking Event",
    date: "June 5, 2025",
    venue: "Austin Tech Park",
    guests: "200 Founders",
    description: "Connect with fellow entrepreneurs, investors, and mentors in an exclusive networking environment.",
    registrationLink: "https://example.com/register",
  },
]

function App() {
  const [galleryReady, setGalleryReady] = useState(false);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <HorizontalCarousel />
      <Gallery onReady={() => setGalleryReady(true)} />
      <Timeline events={sampleEvents} startWhen={galleryReady} />
      {/* <Route path="/RegistrationLink" element={<RegistrationLink />} /> */}
    </main>
  );
}

export default App;

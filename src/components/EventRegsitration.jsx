/* eslint-disable tailwindcss/no-custom-classname */
import NavBar from './Navbar';
import TrueFocus from './TrueFocus';
import Footer from './Footer';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const events = [
    {
    id: 1,
    title: 'Pot Painting: Matir Kella',
    subtitle: "Give boring pots a glow-up with your most vibrant designs and ideas!",
    link: ' https://forms.gle/sCAtDdX5bsHSwvjTA',
  },
  {
    id: 2,
    title: 'Short Film Making:  Shilper Ayna',
    subtitle: "Tell a powerful story on screen—short, creative, and unforgettable!",
    link: 'https://forms.gle/1zLDc1AdbcooxJaZ9',
  },
  {
    id: 3,
    title: 'Cover Art: Echoes of Ray',
    subtitle: 'Redesign your favorite film poster with your own unique artistic twist!',
    link: ' https://forms.gle/GsX8tLEP6gUTmSgU9',
  },
  {
    id: 4,
    title: 'Face Painting: Ruper Rong',
    subtitle: "Transform faces into art with colors, creativity, and a dash of fun!",
    link: 'https://forms.gle/Y1y9gekrBCL5GH2NA',
  },
  {
    id: 5,
    title: 'Film Debate: Charulata\'r Charcha',
    subtitle: "Clash over cinema's biggest moments and prove your film opinions reign supreme!",
    link: ' https://forms.gle/R29beA5ULSe7zGkq5',
  },
  {
    id: 6,
    title: 'Film Quiz: Rahasya Bhed',
    subtitle: "Test your movie IQ and see if you're the ultimate cinephile champion!",
    link: 'https://forms.gle/w3dhcs43iHq1PZx89',
  },
  {
    id: 7,
    title: 'Fabric Painting: Bastra Chitra',
    subtitle: "Turn plain fabric into a colorful masterpiece that shows off your imagination!",
    link: 'https://forms.gle/csrNH8RGSTMqLq3Y6',
  },
  {
    id: 8,
    title: 'Reelomania: Ray o Reel',
    subtitle: "Make a reel that steals the spotlight—funny, dramatic, or just pure genius!",
    link: 'https://forms.gle/ptuDhMju7UhBd16S7',
  },
  {
    id: 9,
    title: 'Art Exhibition: Chhobi Rajar Deshe',
    subtitle: "Showcase your creative flair in an inspiring display of art and design!",
    link: 'https://forms.gle/ie1Z8tGtSaQUQ5X48',
  },
  {
    id: 10,
    title: 'Photography Exhibition: Framebondi Jibon',
    subtitle: "Showcase your creative flair in an inspiring display of photography and creativity!",
    link: 'https://forms.gle/u1xVQU1LWgnAVQ2RA',
  }
];

export default function EventRegsitration() {
  return (
    <>
      <NavBar />
      <div id="events" className="min-h-screen w-screen bg-black px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 pt-24">
            <TrueFocus sentence="REGISTER NOW!" manualMode={false} blurAmount={6} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.map((evt) => (
              <a
                key={evt.id}
                href={evt.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border-2 border-amber-500/50 shadow-lg transition-all duration-300 after:absolute after:inset-0 after:rounded-2xl after:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:-translate-y-1 hover:scale-[1.01] hover:border-amber-400 hover:after:shadow-[0_0_25px_rgba(245,158,11,0.5)]"
              >
                <div className="relative flex h-36 flex-col justify-center bg-gradient-to-br from-neutral-900/70 to-neutral-900/40 p-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-amber-900/20 group-hover:to-neutral-900/40">
                  <h3 className="relative z-10 mb-1 text-xl font-semibold">{evt.title}</h3>
                  <p className="relative z-10 text-sm text-gray-300">{evt.subtitle}</p>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="animate-pulse-slow absolute left-1/2 top-1/2 size-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[100px]" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 to-transparent mix-blend-overlay" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-500/10 to-transparent mix-blend-color-dodge" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-6">
            <p className="text-center text-xl text-gray-300">To know more about each event:</p>
            <div className="flex flex-wrap gap-4">
              <Button
                id="Download Brochure"
                title="Download Brochure"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-400 flex-center gap-1 text-[20px] sm:text-[22px]"
                href="https://drive.google.com/file/d/1QkXlFVX52vZx7F3Ylq-8VedlbWr86B_c/view?usp=sharing"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"><Footer /></div>
    </>
  );
}

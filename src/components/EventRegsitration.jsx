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
    subtitle: "Let your creativity take root! Grab your brushes and turn simple pots into works of art—quirky, aesthetic, or wildly weird. Go classic or chaotic, just make sure your pot's got personality!",
    link: ' https://forms.gle/sCAtDdX5bsHSwvjTA',
  },
  {
    id: 2,
    title: 'Short Film Making:  Shilper Ayna',
    subtitle: "Got a story to tell? Here's your spotlight! Script, shoot, and edit your own short film packed with emotion, creativity, and flair. Small runtime, big impact—your movie moment starts now!",
    link: 'https://forms.gle/1zLDc1AdbcooxJaZ9',
  },
  {
    id: 3,
    title: 'Cover Art: Echoes of Ray',
    subtitle: 'Judge a movie by your cover! Reimagine your favorite film posters with your own artistic twist—bold, minimal, dramatic, or totally wild. Let your creativity roll the credits in style!',
    link: ' https://forms.gle/GsX8tLEP6gUTmSgU9',
  },
  {
    id: 4,
    title: 'Face Painting: Ruper Rong',
    subtitle: "Your face, your canvas! Whether it's a fierce tiger, a glittery galaxy, or your alter ego from another world, paint it loud and proud! It's messy, colorful, and guaranteed to turn heads (literally).",
    link: 'https://forms.gle/Y1y9gekrBCL5GH2NA',
  },
  {
    id: 5,
    title: 'Film Debate: Charulata\'r Charcha',
    subtitle: 'Lights, Camera, Argue! Battle it out over the best movies, epic plot twists, and Oscar-worthy performances. Defend your favorite film with passion, wit, and drama—because in this showdown, only the sharpest critics survive!',
    link: ' https://forms.gle/R29beA5ULSe7zGkq5',
  },
  {
    id: 6,
    title: 'Film Quiz: Rahasya Bhed',
    subtitle: 'Think you are a movie maniac? Prove your cinematic smarts in a quiz packed with iconic dialogues, legendary trivia, and wild behind-the-scenes moments. From Marvel to Ray—only the truest cinephile wins the frame!',
    link: 'https://forms.gle/w3dhcs43iHq1PZx89',
  },
  {
    id: 7,
    title: 'Fabric Painting: Bastra Chitra',
    subtitle: 'Unleash your inner Picasso—on fabric! Splatter, blend, and create magic with colors and patterns that scream you. Turn a plain cloth into a wearable masterpiece and let your art walk the runway of imagination!',
    link: 'https://forms.gle/csrNH8RGSTMqLq3Y6',
  },
  {
    id: 8,
    title: 'Reelomania: Ray o Reel',
    subtitle: "Ready, Set, Shoot! Make a reel that's funny, fab, or just pure chaos. Whether it's cinematic magic or meme-worthy moments, let your creativity steal the scroll! Lights, Camera, Virality!",
    link: 'https://forms.gle/ptuDhMju7UhBd16S7',
  },
  {
    id: 9,
    title: 'Art Exhibition: Chhobi Rajar Deshe',
    subtitle: 'A creative wonderland awaits! Explore a gallery of imagination where every artwork, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!',
    link: 'https://forms.gle/ie1Z8tGtSaQUQ5X48',
  },
  {
    id: 10,
    title: 'Photography Exhibition: Framebondi Jibon',
    subtitle: 'A creative wonderland awaits! Explore a gallery of imagination where every photo, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!',
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
                href="https://drive.google.com/file/d/1U_i7vMgTeMI3sW1N3_mTOTLpZNNIIEnJ/view?usp=sharing"
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

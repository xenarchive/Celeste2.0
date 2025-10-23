/* eslint-disable tailwindcss/no-custom-classname */
import NavBar from './Navbar';
import TrueFocus from './TrueFocus';

const events = [
  {
    id: 1,
    title: 'Fabric Painting',
    subtitle: 'Express your creativity on fabric',
    link: 'https://forms.gle/csrNH8RGSTMqLq3Y6',
  },
  {
    id: 2,
    title: 'Face Painting',
    subtitle: 'Transform faces into art',
    link: 'https://forms.gle/Y1y9gekrBCL5GH2NA',
  },
  {
    id: 3,
    title: 'Pot Painting',
    subtitle: 'Create beautiful ceramic art',
    link: ' https://forms.gle/sCAtDdX5bsHSwvjTA',
  },
  {
    id: 4,
    title: 'Film Debate',
    subtitle: 'Discuss and analyze cinema',
    link: ' https://forms.gle/R29beA5ULSe7zGkq5',
  },
  {
    id: 5,
    title: 'Film Quiz',
    subtitle: ' https://forms.gle/w3dhcs43iHq1PZx89',
    link: 'https://forms.gle/w3dhcs43iHq1PZx89',
  },
  {
    id: 6,
    title: 'Exhibition',
    subtitle: 'Showcase of artistic talent',
    link: 'https://forms.gle/ie1Z8tGtSaQUQ5X48',
  },
  {
    id: 7,
    title: 'Cover Art',
    subtitle: 'Reimagine iconic covers',
    link: ' https://forms.gle/GsX8tLEP6gUTmSgU9',
  },
  {
    id: 8,
    title: 'Reelomania',
    subtitle: 'Celebrate the magic of cinema',
    link: 'https://forms.gle/ptuDhMju7UhBd16S7',
  },
  {
    id: 9,
    title: 'Short Film Making',
    subtitle: 'Create your cinematic story',
    link: 'https://forms.gle/1zLDc1AdbcooxJaZ9',
  },
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
        </div>
      </div>
    </>
  );
}

import React from 'react';
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
    <div className="min-h-screen w-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <TrueFocus sentence="REGISTER NOW!" manualMode={false} blurAmount={6} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((evt, index) => (
            <a
              key={evt.id}
              href={evt.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] border-2 border-amber-500/50 hover:border-amber-400 relative after:absolute after:inset-0 after:rounded-2xl after:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:after:shadow-[0_0_25px_rgba(245,158,11,0.5)] ${
                index === events.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}
            >
              <div className="relative bg-gradient-to-br from-neutral-900/70 to-neutral-900/40 p-6 h-36 flex flex-col justify-center group-hover:bg-gradient-to-br group-hover:from-amber-900/20 group-hover:to-neutral-900/40 transition-all duration-500">
                <h3 className="text-xl font-semibold mb-1 relative z-10">{evt.title}</h3>
                <p className="text-sm text-gray-300 relative z-10">{evt.subtitle}</p>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute left-1/2 top-1/2 w-[200%] h-[200%] bg-amber-500/10 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent mix-blend-overlay rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent mix-blend-color-dodge rounded-2xl" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

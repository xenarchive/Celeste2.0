import React from 'react';
import TrueFocus from './TrueFocus';

const events = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Event ${i + 1}`,
  subtitle: `March ${10 + i}, 2025`,
  link: '#', // placeholder; user will provide Google Form links later
}));

export default function EventRegsitration() {
  return (
    <div className="min-h-screen w-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <TrueFocus sentence="REGISTER NOW!" manualMode={false} blurAmount={6} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(evt => (
            <a
              key={evt.id}
              href={evt.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div className="relative bg-gradient-to-br from-neutral-900/70 to-neutral-900/40 p-6 h-36 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-1">{evt.title}</h3>
                <p className="text-sm text-gray-300">{evt.subtitle}</p>

                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute left-1/2 top-1/3 w-40 h-40 bg-white/6 rounded-full filter blur-3xl opacity-80 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/6 to-transparent mix-blend-screen rounded-2xl" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

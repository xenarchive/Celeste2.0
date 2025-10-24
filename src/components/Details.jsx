import BlurText from './BlurText';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    id: 1,
    icon: CalendarDaysIcon,
    title: 'Date',
    content: 'March 15-17, 2025'
  },
  {
    id: 2,
    icon: MapPinIcon,
    title: 'Venue',
    content: 'National Gallery of Modern Art'
  },
  {
    id: 3,
    icon: ClockIcon,
    title: 'Timings',
    content: '10:00 AM - 8:00 PM'
  },
  {
    id: 4,
    icon: UsersIcon,
    title: 'Expected Guests',
    content: '500+ Artists & Enthusiasts'
  }
];

export default function Details() {
  return (
    <section id="details" className="w-full bg-black py-20 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <BlurText text="Event Details" className="text-center text-4xl md:text-5xl font-bold text-[#EFB642]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                className="group relative overflow-hidden rounded-2xl border border-white/6 bg-neutral-900/40 p-6 h-56 transition-all duration-300 hover:scale-[1.01]"
              >
                {/* neon border glow */}
                <div className="absolute -inset-0.5 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: '0 8px 30px rgba(245,158,11,0.14), 0 0 40px rgba(245,158,11,0.06)' }} />

                {/* glare overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(600px 200px at 20% 10%, rgba(255,255,255,0.06), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.01), transparent 40%)',
                    mixBlendMode: 'overlay'
                  }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center rounded-md p-3 bg-black/30 border border-amber-500/30">
                      <Icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase text-white/60 tracking-wider">{c.title}</h4>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2 text-lg font-semibold">{c.content}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/registration-link"
            className="inline-block rounded-md bg-yellow-400 px-6 py-3 text-black font-medium shadow-md hover:brightness-95"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

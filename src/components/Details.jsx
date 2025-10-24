import TrueFocus from './TrueFocus';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';
const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };
const cards = [
  {
    id: 1,
    icon: CalendarDaysIcon,
    title: 'Date',
    content: 'November 08-09, 2025'
  },
  {
    id: 2,
    icon: MapPinIcon,
    title: 'Venue',
    content: (
      <a href="https://maps.app.goo.gl/JMH7EvMNovF7ZhHh9?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Heritage Institute of Technology, Kolkata
      </a>
    )
  },
  {
    id: 3,
    icon: ClockIcon,
    title: 'Timings',
    content: '09:00 AM - 05:00 PM'
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
    <section id="details" className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
        <h1>
      <TrueFocus sentence="Event Details" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} noTopMargin={true} />
    </h1>
        </div>

        <style>{`
          .details-card {
            background: linear-gradient(to bottom right, rgb(25, 25, 25), rgb(15, 15, 15));
            border: 2px solid rgb(80, 80, 80);
            border-radius: 8px;
            padding: 24px;
            transition: all 0.3s;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
          }

          .details-card:hover {
            border-color: rgba(217, 119, 6, 0.8);
            box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.3);
            background: linear-gradient(to bottom right, rgb(35, 35, 35), rgb(20, 20, 20));
          }
        `}</style>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                onMouseMove={handleMouseMove}
                style={{ '--mouse-x': '0px', '--mouse-y': '0px' }}
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="details-card relative h-56 overflow-hidden rounded-lg"
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center rounded-md border border-amber-500/30 bg-black/30 p-3">
                      <Icon className="size-8 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white/60">{c.title}</h4>
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
            className="inline-block rounded-md bg-yellow-400 px-6 py-3 font-medium text-black shadow-md hover:brightness-95"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

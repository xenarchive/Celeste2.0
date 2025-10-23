/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useRef, useState } from "react";
import TrueFocus from "./TrueFocus";

// Simple card data — replace src/img paths with your real images/videos
const sampleCards = [
  {
    id: 1,
    img: "img/event-1.jpg",
    title: "Fabric painting",
    description: "Unleash your creativity on cloth! Turn plain fabric into your personal masterpiece with colors, patterns, and imagination.",
  },
  {
    id: 2,
    img: "img/event-2.jpg",
    title: "Face painting",
    description: "Your face is the canvas! From fierce tigers to dreamy galaxies—paint your mood, your vibe, your story.",
  },
  {
    id: 3,
    img: "img/event-3.jpg",
    title: "Pot painting",
    description: "Get your hands dirty (in style)! Paint, doodle, and decorate pots that are as vibrant as your imagination.",
  },
  {
    id: 4,
    img: "img/event-4.jpg",
    title: "Film debate",
    description: "Lights, camera, argument! Dive deep into iconic movies, defend your favorites, and battle it out cinephile-style.",
  },
  {
    id: 5,
    img: "img/event-5.jpg",
    title: "Film quiz",
    description: "Think you know your movies? Prove it! From classics to cult favorites—only true movie buffs will survive this quiz.",
  },
  {
    id: 6,
    img: "img/event-6.jpg",
    title: "Exhibition",
    description: "A visual feast awaits! Explore stunning creations, concepts, and stories brought to life by talented minds.",
  },
  {
    id: 7,
    img: "img/event-7.jpg",
    title: "Cover art",
    description: "Judge a movie by its cover—literally! Redesign iconic film posters and let your artistic flair steal the spotlight.",
  },
  {
    id: 8,
    img: "img/event-8.jpg",
    title: "Reelomania",
    description: "Lights, filters, action! Create a trending reel that’s witty, bold, or just plain unforgettable. Time to go viral!",
  },
  {
    id: 9,
    img: "img/event-9.jpg",
    title: "Short film making",
    description: "Tell a story that sticks! From script to screen, bring your vision to life in a few powerful minutes.",
  }
];

// eslint-disable-next-line no-unused-vars
const Card = ({ card, isPaused, isHoveredCard }) => {
  // slide image slightly on hover and reveal description only for hovered card
  return (
    <div
      className={`min-w-72 shrink-0 overflow-hidden rounded-lg bg-white/5 backdrop-blur-md transition-transform duration-300 sm:min-w-[22rem] md:min-w-[28rem] lg:min-w-[34rem] ${
        isHoveredCard ? "z-20 scale-105" : ""
      }`}
    >
      <div className="h-48 w-full overflow-hidden bg-gray-900 md:h-64 lg:h-72">
        <img
          src={card.img}
          className="size-full object-cover transition-transform duration-700 ease-out"
          alt={card.title}
          style={{ transform: isHoveredCard ? "translateX(-12%)" : "translateX(0)" }}
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-zentry text-xl font-black text-yellow-400">{card.title}</h3>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHoveredCard ? "max-h-40 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <p className={`text-sm text-yellow-400`}>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const HorizontalCarousel = ({ cards = sampleCards, speed = 0.5 }) => {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let lastTime = performance.now();
    // we'll duplicate the content once, so when scrollLeft passes half the scrollWidth
    // we subtract half so the scroll appears seamless
    const halfWidth = () => track.scrollWidth / 2;

    const step = (time) => {
      if (!track) return;
      const dt = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        track.scrollLeft += speed * dt;

        const hw = halfWidth();
        if (hw && track.scrollLeft >= hw) {
          // move back by halfWidth to create seamless loop
          track.scrollLeft -= hw;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, speed]);

  return (
    <section id="events" className="py-12">
      <div className="container mx-auto">
    <h1>
      <TrueFocus sentence="Event Highlights" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} noTopMargin={true} />
    </h1>
        <div
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
          className="no-scrollbar flex items-stretch gap-6 overflow-x-auto px-4 py-6"
        >
          {cards.map((c, idx) => (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`transition-filter duration-300 ${
                hoveredIndex !== null && hoveredIndex !== idx ? "scale-95 blur-sm" : ""
              }`}
            >
              <Card card={c} isPaused={isPaused} isHoveredCard={hoveredIndex === idx} />
            </div>
          ))}

          {/* duplicate the cards to create continuous flow visual */}
          {cards.map((c, idx) => (
            <div
              key={`dup-${c.id}`}
              onMouseEnter={() => setHoveredIndex(idx + cards.length)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`transition-filter duration-300 ${
                hoveredIndex !== null && hoveredIndex !== idx + cards.length ? "scale-95 blur-sm" : ""
              }`}
            >
              <Card card={c} isPaused={isPaused} isHoveredCard={hoveredIndex === idx + cards.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;

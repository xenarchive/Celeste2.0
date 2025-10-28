/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useRef, useState } from "react";
import TrueFocus from "./TrueFocus";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import fabric from "../assests/fabric.jpg";
import potPainting from "../assests/potPainting.jpg";
import short from "../assests/shortFilm.jpg";
import cover from "../assests/coverArt.png";
import reel from "../assests/reels.jpg";
import debate from "../assests/filmDebate.jpg";
import facepainting from "../assests/facepainting.png";
import filmquiz from "../assests/filmQuiz.png";
import art from "../assests/art.png";
import photo from "../assests/photo.png";

// Simple card data — replace src/img paths with your real images/videos
const sampleCards = [
  {
    id: 1,
    img: potPainting,
    title: "Pot Painting: Matir Kella",
    description:
      "Get ready for Matir Kella, a pot painting extravaganza celebrating imagination and storytelling in true Satyajit Ray style! Every plain clay pot conveys your canvas for whimsical worlds and vibrant adventures, where colors roar and brushstrokes sing. Let your creativity take root — go classic or chaotic, up and sure your pot's got personality!",
  },
  {
    id: 2,
    img: short,
    title: "Short Film Making: Shilper Ayna",
    description:
      "Step into Shilper Ayna and explore the expressive world of filmmaking, inspired by the keen observation and lyrical storytelling of Satyajit Ray. Tell a powerful, personal story through your lenses, whether capturing daily life or tackling complex issues, let your lens be your voice. Script, shoot and edit with zeal and creativity to make a small runtime deliver a big impact!",
  },
  {
    id: 3,
    img: cover,
    title: "Cover Art: Echoes of Ray",
    description:
      "Echoes of Ray celebrates the timeless prolificness of Satyajit Ray, inviting artists to re-imagine his world through design, crafting covers for films, books, or albums turning simplicity into storytelling. From analog strokes to digital finesse, each creation imparts dialogue between past and present, tradition and innovation, with every line, hue and frame echoing Ray's artistry.",
  },
  {
    id: 4,
    img: facepainting,
    title: "Face Painting: Ruper Rong",
    description:
      "Step into Ruper Rong, where brushes become wands and colors tell tales! Inspired by Satyajit Ray, this celebration of creativity and teamwork lets you transform faces into magical creatures, cinematic characters, or vibrant stories in just 60 minutes. Let your imagination run wild, paint loud and proud, and turn every face into a canvas of cinematic expression!",
  },
  {
    id: 5,
    img: debate,
    title: "Film Debate: Charulata'r Charcha",
    description:
      "Step into Charulata'r Charcha, a film debate celebrating cinema, storytelling, and sharp thinking paving the Satyajit Ray style! Teams will explore characters, plots and cinematic magic, from Goopy & Bagha's mischief to Charulata's emotional depths, debating with insight, wit, and creativity. Defend your favorite films with passion and flair, for the sharpest critics shall survive!",
  },
  {
    id: 6,
    img: filmquiz,
    title: "Film Quiz: Rahasya Bhed",
    description:
      "Step into Rahasya Bhed, the ultimate film trivia challenge for true movie enthusiasts! Explore your knowledge, challenge your peers and celebrate cinema, from timeless classics to modern masterpieces. Get your partner, improve fast, and prove your cinematic smarts with iconic dialogues, legendary trivia and behind-the-scenes secret, only the truest cinephile wins!",
  },
  {
    id: 7,
    img: fabric,
    title: "Fabric Painting: Bastra Chitra",
    description:
      "Dive into Bastra Chitra, where brush strokes become storytellers and fabrics turn into magical canvases! Inspired by Satyajit Ray, teams transform plain fabric into vivid stories, be it a Goopy & Bagha adventure or a scene from Charulata, or a whimsical original tale. Splatter, blend and create wearable masterpieces letting your imagination run wild crafting your art to walk the runway of creativity!",
  },
  {
    id: 8,
    img: reel,
    title: "Reelomania: Ray o Reel",
    description:
      "Step into Ray o Reel, a campus challenge celebrating visual storytelling inspired by Satyajit Ray. Use your go-to devices to craft a captivating short reel, channeling Ray’s eye for detail and narrative depth. Make it funny, fab, or chaotic, and turn everyday campus life (or anything else) into a cinematic story that steals the scroll!",
  },
  {
    id: 9,
    img: art,
    title: "Art Exhibition: Chhobi Rajar Deshe ",
    description:
      "A creative wonderland awaits! Explore a gallery of imagination where every artwork, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!",
  },
  {
    id: 10,
    img: photo,
    title: "Photogrpahy Exhibition: Framebondi Jibon",
    description:
      "A creative wonderland awaits! Explore a gallery of imagination where every photo, and design tells a story. Come get inspired, amazed, and maybe even a little awestruck!",
  },
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
          className="size-full object-cover"
          alt={card.title}
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-zentry text-xl font-black text-yellow-400">
          {card.title}
        </h3>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHoveredCard
              ? "max-h-40 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <p className={`text-sm text-yellow-400`}>{card.description}</p>
        </div>
      </div>
    </div>
  );
};

const HorizontalCarousel = ({ cards = sampleCards, speed = 0.15 }) => {
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  // detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();
    const halfWidth = () => track.scrollWidth / 2;

    const step = (time) => {
      if (!track) return;
      const dt = time - lastTime;
      lastTime = time;

      // always move (mobile ignores pause)
      track.scrollLeft += speed * dt;

      const hw = halfWidth();
      if (hw && track.scrollLeft >= hw) {
        track.scrollLeft -= hw;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <section id="events" className="py-12">
      <div className="container mx-auto mb-14">
        <h1>
          <TrueFocus
            sentence="Event Highlights"
            manualMode={false}
            blurAmount={5}
            borderColor="#F59E0B"
            animationDuration={0.6}
            pauseBetweenAnimations={0.8}
            noTopMargin={true}
          />
        </h1>

        <div
          ref={trackRef}
          className={`
            no-scrollbar flex items-stretch gap-6 overflow-x-auto px-4 py-6 mt-4
            ${isMobile ? "pointer-events-none select-none" : ""}
          `}
        >
          {cards.map((c, idx) => (
            <div key={c.id}>
              <Card card={c} />
            </div>
          ))}

          {cards.map((c, idx) => (
            <div key={`dup-${c.id}`}>
              <Card card={c} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 px-4">
          <p className="text-center text-xl text-gray-300">
            To know more about each event:
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              id="Download Brochure"
              title="Download Brochure"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-400 flex-center gap-1 text-[20px] sm:text-[22px]"
              href="https://drive.google.com/file/d/15VVuBjfDBqNiBoy98H_b4KkDDmeqNXVc/view?usp=sharing"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalCarousel;

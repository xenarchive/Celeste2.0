import BlurText from "./BlurText";
import Masonry from "./Masonry";

const Gallery = () => {
  const galleryItems = [
    {
      id: "1",
      img: "/img/about.jpeg",
      url: "#",
      height: 400,
    },
    {
      id: "2",
      img: "/img/about.jpeg",
      url: "#",
      height: 300,
    },
    {
      id: "3",
      img: "/img/about.jpeg",
      url: "#",
      height: 500,
    },
    {
      id: "4",
      img: "/img/about.jpeg",
      url: "#",
      height: 350,
    },
    {
      id: "5",
      img: "/img/about.jpeg",
      url: "#",
      height: 450,
    },
    {
      id: "6",
      img: "/img/about.jpeg",
      url: "#",
      height: 380,
    },
    {
      id: "7",
      img: "/img/about.jpeg",
      url: "#",
      height: 380,
    },
    {
      id: "8",
      img: "/img/about.jpeg",
      url: "#",
      height: 380,
    },
    {
      id: "9",
      img: "/img/about.jpeg",
      url: "#",
      height: 380,
    },
    {
      id: "10",
      img: "/img/about.jpeg",
      url: "#",
      height: 380,
    }
  ];

  return (
    <div id="gallery" className="min-h-dvh w-screen bg-black">
      <div className="flex flex-col items-center py-10 pb-24">
        <BlurText
          text="Celeste Gallery"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => console.log('Animation completed!')}
          noWrap
          className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px] mb-20 text-white text-center bbh-sans-bogle-regular special-font max-w-full leading-[0.9] pointer-events-none mix-blend-difference relative z-10"
        />
        
        <div className="w-full max-w-[90%] mx-auto h-[800px]">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
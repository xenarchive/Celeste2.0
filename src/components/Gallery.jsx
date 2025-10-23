import BlurText from "./BlurText";
import Masonry from "./Masonry";
import img1 from "../../public/img/img1.jpg";
import img2 from "../../public/img/img2.jpg";
import img3 from "../../public/img/img3.jpg";
import img4 from "../../public/img/img4.jpg";
import img5 from "../../public/img/img5.jpg";
import img6 from "../../public/img/img6.jpg";
import img7 from "../../public/img/img7.jpg";
import img8 from "../../public/img/img8.jpg";
import img9 from "../../public/img/img9.jpg";
import img10 from "../../public/img/img10.jpg";
import img11 from "../../public/img/img11.jpg";
import img12 from "../../public/img/img12.jpg";
import img13 from "../../public/img/img13.jpg";
import img14 from "../../public/img/img14.jpg";
import img15 from "../../public/img/img15.jpg";
const Gallery = () => {
  const galleryItems = [
    {
      id: "1",
      img: img1,
      url: "#",
      height: 400,
    },
    {
      id: "2",
      img: img2,
      url: "#",
      height: 300,
    },
    {
      id: "3",
      img: img3,
      url: "#",
      height: 500,
    },
    {
      id: "4",
      img: img4,
      url: "#",
      height: 350,
    },
    {
      id: "5",
      img: img5,
      url: "#",
      height: 450,
    },
    {
      id: "6",
      img: img6,
      url: "#",
      height: 380,
    },
    {
      id: "7",
      img: img7,
      url: "#",
      height: 380,
    },
    {
      id: "8",
      img: img8,
      url: "#",
      height: 380,
    },
    {
      id: "9",
      img: img9,
      url: "#",
      height: 380,
    },
    {
      id: "10",
      img: img10,
      url: "#",
      height: 380,
    },
    {
      id: "11",
      img: img11,
      url: "#",
      height: 380,
    },
    {
      id: "12",
      img: img12,
      url: "#",
      height: 380,
    },
    {
      id: "13",
      img: img13,
      url: "#",
      height: 380,
    },
    {
      id: "14",
      img: img14,
      url: "#",
      height: 380,
    }, 
    {
      id: "15",
      img: img15,
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
          className="bbh-sans-bogle-regular special-font pointer-events-none relative z-10 mb-20 max-w-full text-center text-[40px] leading-[0.9] text-white mix-blend-difference sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px]"
        />
        
        <div className="mx-auto h-[800px] w-full max-w-[90%]">
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
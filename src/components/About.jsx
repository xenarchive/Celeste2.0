import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import BlurText from "./BlurText";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center w-full">
          <p>
            Join Pavasana for this cinematic journey.
          </p>
          <div className="flex justify-center w-full">
            <BlurText
              text={"A tribute to Satyajit Ray"}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => console.log('Animation completed!')}
              noWrap
              className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px] mt-5 text-white text-center bbh-sans-bogle-regular special-font max-w-full leading-[0.9]"
            />
          </div>
        </div>

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

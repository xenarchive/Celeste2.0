import BlurText from "./BlurText";
import TributeSection from "./TributeSection";

const About = () => {

  return (
    <div id="about" className="w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <div className="flex w-full flex-col items-center">
          <p>
            Join Pavasana for this cinematic journey.
          </p>
          <div className="flex w-full justify-center">
            <div className="bbh-sans-bogle-regular special-font mt-5 max-w-full text-center text-[40px] leading-[0.9] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px]">
              <BlurText
                text={"A tribute to "}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="inline text-white"
              />
              <BlurText
                text={"Satyajit Ray"}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="inline text-yellow-400"
              />
            </div>
          </div>
          <TributeSection />
        </div>
      </div>
    </div>
  );
};

export default About;

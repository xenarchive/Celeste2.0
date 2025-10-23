import BlurText from "./BlurText";
import TributeSection from "./TributeSection";

const About = () => {

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center w-full">
          <p>
            Join Pavasana for this cinematic journey.
          </p>
          <div className="flex justify-center w-full">
            <div className="text-[40px] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px] mt-5 text-center bbh-sans-bogle-regular special-font max-w-full leading-[0.9]">
              <BlurText
                text={"A tribute to "}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="text-white inline"
              />
              <BlurText
                text={"Satyajit Ray"}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="text-yellow-400 inline"
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

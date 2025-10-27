/* eslint-disable tailwindcss/no-custom-classname */
import BlurText from "./BlurText";

import ceo from "../../public/img/ceo.jpg";
import principal from "../../public/img/principal.jpg";
import registrar from "../../public/img/registrar.jpg";

const ThanksCard = ({ name, description, img }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="relative">
      <style>{`
        .team-card {
          background: linear-gradient(to bottom right, rgb(25, 25, 25), rgb(15, 15, 15));
          border: 2px solid rgb(80, 80, 80);
          border-radius: 8px;
          padding: 24px;
          transition: all 0.3s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        }

        .team-card:hover {
          border-color: rgba(217, 119, 6, 0.8);
          box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.3);
          background: linear-gradient(to bottom right, rgb(35, 35, 35), rgb(20, 20, 20));
        }
      `}</style>
      <div
        onMouseMove={handleMouseMove}
        style={{ "--mouse-x": "0px", "--mouse-y": "0px" }}
        className="team-card flex h-full flex-col items-center justify-center overflow-hidden rounded-lg"
      >
        <div className="mx-auto mb-4 size-32 overflow-hidden rounded-full border-4 border-orange-500/80">
          <img src={img} alt={name} className="size-full object-cover" />
        </div>
        <h3 className="mb-1 text-center text-xl font-bold text-white">
          {name}
        </h3>
        <p className="text-center text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const SpecialThanks = () => {
  const thanksMembers = [
    {
      name: "Mr. P.K. Agarwal",
      description: "Chief Executive Officer, Heritage Group of Institutions",
      img: ceo,
    },
    {
      name: "Prof. (Dr.) Basab Chaudhuri",
      description: "Principal, Heritage Institute of Technology",
      img: principal,
    },
    {
      name: "Mr. Arvind Srivastava",
      description: "Joint Registrar, Heritage Institute of Technology",
      img: registrar,
    },
  ];

  return (
    <section id="special-thanks" className="bg-black py-20">
      <div className="container mx-auto px-4 ">
        <div className="bbh-sans-bogle-regular special-font mt-5 max-w-full text-center text-[50px] leading-[0.9] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px]">
          <BlurText
            text={"Our "}
            delay={150}
            animateBy="words"
            direction="top"
            noWrap
            className="inline text-white"
          />
          <BlurText
            text={"Visionaries"}
            delay={150}
            animateBy="words"
            direction="top"
            noWrap
            className="inline text-yellow-400"
          />
          {/* <TrueFocus sentence="Our Visionaries" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} noTopMargin={true} /> */}
        </div>
        <p className="lg mb-12 mt-4 text-center text-lg text-gray-300 ">
          With immense gratitude, we thank the visionaries of Celesté 2.0. Their
          guidance and belief turned the event into a collective dream brought
          to life.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {thanksMembers.map((member, index) => (
            <ThanksCard
              key={index}
              name={member.name}
              description={member.description}
              img={member.img || `https://i.pravatar.cc/150?u=${member.name}`} // Placeholder image
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialThanks;

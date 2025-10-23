/* eslint-disable tailwindcss/no-custom-classname */
import TrueFocus from './TrueFocus';
import Button from './Button';
// import team1 from "../../public/img/team/team1.jpg";
// import team2 from "../../public/img/team/team2.jpg";
// import team3 from "../../public/img/team/team3.jpg";
// import team4 from "../../public/img/team/team4.jpg";
// import team5 from "../../public/img/team/team5.jpg";
// import team6 from "../../public/img/team/team6.jpg";
// import team7 from "../../public/img/team/team7.jpg";
// import team8 from "../../public/img/team/team8.jpg";
// import team9 from "../../public/img/team/team9.jpg";
// import team10 from "../../public/img/team/team10.jpg";

const TeamMember = ({ name, role, description, img, linkedinUrl }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
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
        style={{ '--mouse-x': '0px', '--mouse-y': '0px' }}
        className="team-card overflow-hidden rounded-lg"
      >
        <div className="mx-auto mb-4 size-32 overflow-hidden rounded-full border-4 border-orange-500/80">
          <img
            src={img}
            alt={name}
            className="size-full object-cover"
          />
        </div>
        <h3 className="mb-1 text-center text-xl font-bold text-white">{name}</h3>
        <p className="mb-2 text-center text-orange-400">{role}</p>
        <p className="mb-4 text-center text-sm text-gray-400">{description}</p>
        <div className="flex justify-center">
          <Button
            title="LinkedIn"
            href={linkedinUrl}
            containerClass="bg-yellow-400 flex-center gap-2 text-black transition hover:brightness-95"
            leftIcon={<svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
          />
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Coordinator Name 1",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team1,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 2",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team2,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 3",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team3,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 4",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team4,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 5",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team5,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 6",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team6,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 7",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team7,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 8",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team8,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 9",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team9,
      linkedinUrl: "#"
    },
    {
      name: "Coordinator Name 10",
      role: "Department • Year",
      description: "Brief description about the coordinator's role and responsibilities.",
      //img: team10,
      linkedinUrl: "#"
    },
  ];

  return (
    <section id = "contact" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <TrueFocus sentence="Meet Our Team" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} noTopMargin={true} />
          <p className="mb lg mt-4 text-2xl text-gray-300">The brilliant minds behind Celesté 2.0</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
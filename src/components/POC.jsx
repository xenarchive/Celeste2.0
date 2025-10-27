import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import BlurText from './BlurText';
const eventsData = [
  {
    id: 1,
    eventName: 'Pot Painting: Matir Kella',
    date: 'Nov 7, 2025',
    time: '01:00 PM - 02:30 PM',
    venue: 'Amphitheatre',
    description: 'Unleash your creativity on clay pots in this vibrant painting event.',
    pocs: [
      { name: 'Priyam Sarkar', phone: '7584987553 ' },
      { name: 'Sriza Ghosh', phone: '7029036156' },
      { name: 'Kaninika De', phone: '9123938497' },
    ],
  },
  {
    id: 2,
    eventName: 'Cover Art: Echoes of Ray',
    date: 'Nov 7, 2025',
    time: '03:00 PM - 04:00 PM',
    venue: 'Main Auditorium',
    description: 'Re-imagine iconic cover art inspired by the legendary Satyajit Ray.',
    pocs: [
      { name: 'Prithika Chakraborty', phone: '8240660937' },
      { name: 'Tiasha Ganguly', phone: '8100492611' },
      { name: 'Aranya Basu', phone: '7044576568' },
    ],
  },
  {
    id: 3,
    eventName: 'Face Painting: Ruper Rong',
    date: 'Nov 7, 2025',
    time: '11:00 AM - 01:00 PM',
    venue: 'Central Garden',
    description: 'Transform faces into living canvases of art and imagination.',
    pocs: [
      { name: 'Srinjoy Dey', phone: '8240081301' },
      { name: 'Suchana Laha', phone: '8583060942' },
      { name: 'Tamojit Das', phone: '7439010664' },
    ],
  },
  {
    id: 4,
    eventName: 'Short Film Making: Shilper Ayna',
    date: 'Nov 8, 2025',
    time: '10:00 AM - 04:00 PM',
    venue: 'Seminar Hall 1',
    description: 'Showcase your storytelling prowess through the lens of a camera.',
    pocs: [
      { name: 'Apurba Saha', phone: '7980418284' },
      { name: 'Dipanjan Pal', phone: '8927734731' },
      { name: 'Prantik Kundu', phone: '9477092167' },
    ],
  },
  {
    id: 5,
    eventName: "Film Debate: Charulata'r Charcha",
    date: 'Nov 8, 2025',
    time: '02:00 PM - 03:30 PM',
    venue: 'Seminar Hall 2',
    description: 'Engage in a spirited debate on the nuances of classic and modern cinema.',
    pocs: [
      { name: 'Soumyadeep Jana', phone: '9874642542' },
      { name: 'Rajarshi Mishra', phone: '9433017751' },
      { name: ' Shambaditya Sarkar', phone: '8240749177' },
    ],
  },
  {
    id: 6,
    eventName: 'Film Quiz: Rahasya Bhed',
    date: 'Nov 7, 2025',
    time: '04:00 PM - 05:00 PM',
    venue: 'VLTC Complex',
    description: 'Test your cinematic knowledge in this thrilling and fast-paced quiz.',
    pocs: [
      { name: 'Sanjhdiya Swetlana', phone: '9038046486' },
      { name: 'Pratyush Pan', phone: '8250411785' },
      { name: 'Purbita Mitra', phone: '6289482115' },
    ],
  },
  {
    id: 7,
    eventName: 'Fabric Painting: Bastra Chitra',
    date: 'Nov 8, 2025',
    time: '11:00 AM - 12:30 PM',
    venue: 'Workshop Area',
    description: 'Bring your fabric to life with colors and creative designs.',
    pocs: [
      { name: 'Debopriya Ghosh', phone: '7679364134' },
      { name: 'Suchana Maity', phone: '9733002749' },
      { name: ' Soumili Basak', phone: '6290456089' },
    ],
  },
    {
    id: 8,
    eventName: 'Reelomania: Ray o Reel',
    date: 'Nov 8, 2025',
    time: '04:00 PM - 05:00 PM',
    venue: 'Online & On-Campus',
    description: 'Create captivating reels inspired by the cinematic genius of Ray.',
    pocs: [
      { name: 'Devaditya Goswami', phone: '8167880744' },
      { name: 'Rudraneel Sarkar', phone: '9073478561' },
      { name: 'Debayan Bhowmik', phone: '8582891966' },
    ],
  },
  {
    id: 9,
    eventName: 'Art Exhibition: Chhobi Rajar Deshe',
    date: 'Nov 7-8, 2025',
    time: 'All Day',
    venue: 'Exhibition Hall',
    description: 'A curated exhibition of stunning artworks from talented artists.',
    pocs: [
      { name: 'Sayan Pradhan', phone: '8981009973' },
      { name: 'Avijnan Purkait', phone: '6290986642' },
      { name: 'Debargha Samata', phone: '8777786405' },
    ],
  },
  {
    id: 10,
    eventName: 'Photography Exhibition: Framebondi Jibon',
    date: 'Nov 7-8, 2025',
    time: 'All Day',
    venue: 'Gallery Walk',
    description: 'Capture life in frames and tell stories through your photographs.',
    pocs: [
      { name: 'Sayan Pradhan', phone: '8981009973' },
      { name: 'Avijnan Purkait', phone: '6290986642' },
      { name: 'Debargha Samata', phone: '8777786405' },
    ],
  },
];

const Card = ({ event, isHovered, onHover }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative h-64 w-full cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: event.id * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => onHover(event.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        filter: isHovered && !onHover ? 'blur(4px)' : 'none',
        transition: 'filter 0.3s ease-in-out',
      }}
    >
      <motion.div
        className="relative size-full"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute flex size-full flex-col items-center justify-center rounded-lg border-2 border-solid p-6 text-white shadow-lg"
          style={{
            background: 'linear-gradient(to bottom right, rgb(25, 25, 25), rgb(15, 15, 15))',
            borderColor: 'rgb(80, 80, 80)',
            boxShadow: isHovered ? '0 20px 25px -5px rgba(217, 119, 6, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          <h3 className="mb-4 text-2xl font-bold text-yellow-400">{event.eventName}</h3>
          <div className="flex w-full flex-col items-start gap-3 pl-4">
            {event.pocs.map((poc, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaUser className="text-orange-400" />
                <div className="text-left">
                  <p className="text-sm font-medium">{poc.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaPhoneAlt size={12} />
                    <span>{poc.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PocSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="poc" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            <div className="bbh-sans-bogle-regular special-font mb-10 mt-5 max-w-full text-center text-[40px] leading-[0.9] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px]">
              <BlurText
                text={"Meet Our "}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="inline text-white"
              />
              <BlurText
                text={"POCs"}
                delay={150}
                animateBy="words"
                direction="top"
                noWrap
                className="inline text-yellow-400"
              />
            </div>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <Card 
              key={event.id} 
              event={event} 
              isHovered={hoveredId === event.id}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PocSection;
/* eslint-disable no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Users, ExternalLink, Clock } from "lucide-react"
import NavBar from "./Navbar"
import Footer from "./Footer"
import BlurText from "./BlurText"
const EventTimeline = ({ events }) => {
  const [expandedId, setExpandedId] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="bg-black">
      <NavBar />
      <style>{`
        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, rgb(217, 119, 6), rgb(34, 211, 238), rgb(217, 119, 6));
          opacity: 0.3;
        }

        .timeline-line-mobile {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, rgb(217, 119, 6), rgb(34, 211, 238), rgb(217, 119, 6));
          opacity: 0.3;
        }

        .event-card {
          background: linear-gradient(to bottom right, rgb(25, 25, 25), rgb(15, 15, 15));
          border: 2px solid rgb(80, 80, 80);
          border-radius: 8px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s duration;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        }

        .event-card:hover {
          border-color: rgba(217, 119, 6, 0.8);
          box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.3);
          background: linear-gradient(to bottom right, rgb(35, 35, 35), rgb(20, 20, 20));
        }

        .register-btn {
          background: linear-gradient(to right, rgb(217, 119, 6), rgb(180, 83, 9));
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s duration;
          text-decoration: none;
        }

        .register-btn:hover {
          background: linear-gradient(to right, rgb(180, 83, 9), rgb(146, 64, 14));
          box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.5);
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 pt-32 text-center"
      >
                 <div className="bbh-sans-bogle-regular special-font mt-5 max-w-full text-center text-[40px] leading-[0.9] sm:text-[56px] md:text-[80px] lg:text-[110px] xl:text-[140px]">
                 <BlurText
                         text={"Event "}
                         delay={150}
                         animateBy="words"
                         direction="top"
                         noWrap
                         className="inline text-white"
                       />
                       <BlurText
                         text={"Timeline"}
                         delay={150}
                         animateBy="words"
                         direction="top"
                         noWrap
                         className="inline text-yellow-400"
                       />
                   {/* <TrueFocus sentence="Our Visionaries" manualMode={false} blurAmount={5} borderColor="#F59E0B" animationDuration={0.6} pauseBetweenAnimations={0.8} noTopMargin={true} /> */}
                 </div>
        <h2 className="mb lg text-2xl text-gray-300">Stay in sync with every stage of the event—because you won’t want to miss a single frame of the fun!</h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="mx-auto max-w-4xl">
        {/* Desktop Horizontal Timeline */}
        {!isMobile && (
          <div className="relative hidden md:block">
            <div className="timeline-line" />

            {/* Events Grid */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      whileHover={{ scale: 1.02 }}
                      onMouseEnter={() => setExpandedId(event.id)}
                      onMouseLeave={() => setExpandedId(null)}
                      className="event-card"
                    >
                      <h3 className="mb-2 text-xl font-bold text-white">{event.name}</h3>

                      {/* Event Details */}
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center gap-2 text-gray-200">
                          <Calendar className="size-4 text-amber-500" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200">
                          <Clock className="size-4 text-cyan-500" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200">
                          <MapPin className="size-4 text-cyan-500" />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-200">
                          <Users className="size-4 text-amber-500" />
                          <span className="text-sm">{event.guests}</span>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <motion.div
                        variants={expandVariants}
                        initial="hidden"
                        animate={expandedId === event.id ? "visible" : "hidden"}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-600 pt-4">
                          <p className="mb-4 text-sm text-gray-100">{event.description}</p>
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="register-btn"
                          >
                            Register Now
                            <ExternalLink className="size-4" />
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Mobile Vertical Timeline */}
        {isMobile && (
          <div className="relative md:hidden">
            <div className="timeline-line-mobile" />

            {/* Events Stack */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 pl-14 pr-4 sm:pl-20 sm:pr-0"
        >
              {events.map((event) => (
                <motion.div key={event.id} variants={itemVariants} className="relative">
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setExpandedId(event.id)}
                    onMouseLeave={() => setExpandedId(null)}
                    onTouchStart={() => setExpandedId(expandedId === event.id ? null : event.id)}
                    className="event-card w-full max-w-[90vw] sm:max-w-[80vw]"
                  >
                    <h3 className="mb-2 text-lg font-bold text-white">{event.name}</h3>

                    {/* Event Details */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-gray-200">
                        <Calendar className="size-4 text-amber-500" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-200">
                        <Clock className="size-4 text-cyan-500" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-200">
                        <MapPin className="size-4 text-cyan-500" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-200">
                        <Users className="size-4 text-amber-500" />
                        <span className="text-sm">{event.guests}</span>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate={expandedId === event.id ? "visible" : "hidden"}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-600 pt-4">
                        <p className="mb-4 text-sm text-gray-100">{event.description}</p>
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="register-btn"
                        >
                          Register Now
                          <ExternalLink className="size-4" />
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
      <div className="mt-20"><Footer /></div>
    </div>
  )
}

export default EventTimeline
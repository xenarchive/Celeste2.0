/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useRef, useState } from "react";
// Update the path below to your actual image location if needed


const TributeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        // Set visibility based on intersection state
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: "50px" // Add some margin to trigger slightly before the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen px-4 py-10 pb-0 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image Side */}
          <div className={`transition-all delay-200 duration-1000${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="bg-primary/10 absolute -inset-4 rotate-3 rounded-lg"></div>
              <img 
                src="/img/about.jpeg" 
                alt="Tribute to Satyajit Ray" 
                className="relative w-full rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 right-0 size-24 translate-x-4 translate-y-4 border-4 border-yellow-400"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`-mt-16 transition-all delay-500 duration-1000${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <p className="font-body text-foreground/80 mb-6 text-lg leading-relaxed">
              Celeste celebrates the timeless artistry of Satyajit Ray, a visionary who transformed 
              cinema into poetry. His mastery of storytelling, visual composition, and human emotion 
              continues to inspire generations of filmmakers and photographers.
            </p>
            <p className="font-body text-foreground/80 mb-6 text-lg leading-relaxed">
              Through this event, we honor his legacy by bringing together artists, photographers, 
              and filmmakers who share his passion for authentic storytelling and visual excellence.
            </p>
            <blockquote className="border-l-4 border-yellow-400 pl-6 text-2xl text-orange-400" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontStyle: 'italic' }}>
              &quot;The only solutions that are ever worth anything are the solutions that people find 
              themselves.&quot;
              <footer className="text-foreground/60 font-body mt-2 text-sm not-italic">— Satyajit Ray</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TributeSection;

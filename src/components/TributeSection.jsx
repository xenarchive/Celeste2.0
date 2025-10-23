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
    <section ref={sectionRef} className="min-h-screen py-10 pb-0 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-lg transform rotate-3"></div>
              <img 
                src="/img/about.jpeg" 
                alt="Tribute to Satyajit Ray" 
                className="relative rounded-lg shadow-2xl w-full"
              />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-4 border-yellow-400 transform translate-x-4 translate-y-4"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transform transition-all duration-1000 delay-500 -mt-16 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              Celeste celebrates the timeless artistry of Satyajit Ray, a visionary who transformed 
              cinema into poetry. His mastery of storytelling, visual composition, and human emotion 
              continues to inspire generations of filmmakers and photographers.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              Through this event, we honor his legacy by bringing together artists, photographers, 
              and filmmakers who share his passion for authentic storytelling and visual excellence.
            </p>
            <blockquote className="border-l-4 border-yellow-400 pl-6 text-orange-400 text-2xl" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontStyle: 'italic' }}>
              "The only solutions that are ever worth anything are the solutions that people find 
              themselves."
              <footer className="text-sm text-foreground/60 mt-2 not-italic font-body">— Satyajit Ray</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TributeSection;

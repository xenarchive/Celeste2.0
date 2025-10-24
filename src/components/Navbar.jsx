import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = ["Home", "Honours", "Administration", "Events", "Gallery", "Details", "POCs", "Team", "Timeline"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <a href="#hero">
            <img src="/img/logo.png" alt="logo" className="w-10 md:w-20" />
          </a>
          <div className="flex items-center gap-7">
            {/* Navigation Links and Audio Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => {
                  if (item === 'Team') {
                    return (
                      <Link key={index} to="/team" className="nav-hover-btn">
                        {item}
                      </Link>
                    );
                  }
                  if (item === 'Timeline') {
                    return (
                      <Link key={index} to="/timeline" className="nav-hover-btn">
                        {item}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={`${isMainPage ? '' : '/'}#${
                        item === 'Home'
                          ? 'hero'
                          : item === 'Honours'
                          ? 'about'
                          : item === 'Administration'
                          ? 'special-thanks'
                          : item === 'POCs'
                          ? 'poc'
                          : item.toLowerCase()
                      }`}
                      className="nav-hover-btn"
                    >{item}</a>
                  );
                })}
              </div>
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

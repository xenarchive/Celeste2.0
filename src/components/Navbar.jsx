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

    // Hamburger menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

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
              {/* Desktop Nav Links */}
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
              {/* Hamburger Icon for Mobile (fixed top-right on mobile) */}
              <button
                className={clsx(
                  "md:hidden flex flex-col justify-center items-center w-10 h-10",
                  // position at top-right for mobile only
                  "fixed top-4 right-4 z-60",
                  // small offset on larger screens (becomes relative/hidden by md)
                )}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((s) => !s)}
              >
                {/* Transform into X when open */}
                <span
                  className={clsx(
                    "block w-7 h-0.5 mb-1 rounded transition-all duration-300",
                    {
                      // closed: three parallel yellow bars; open: top bar rotates
                      "bg-amber-300 translate-y-0 rotate-0": !isMenuOpen,
                      "bg-amber-300 rotate-45 translate-y-1.5": isMenuOpen,
                    }
                  )}
                />
                <span
                  className={clsx(
                    "block w-7 h-0.5 mb-1 rounded transition-all duration-300",
                    {
                      "bg-amber-300": !isMenuOpen,
                      "bg-transparent scale-0": isMenuOpen,
                    }
                  )}
                />
                <span
                  className={clsx(
                    "block w-7 h-0.5 rounded transition-all duration-300",
                    {
                      "bg-amber-300": !isMenuOpen,
                      "bg-amber-300 -rotate-45 -translate-y-1.5": isMenuOpen,
                    }
                  )}
                />
              </button>
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
        {/* Mobile Slide Menu */}
        <div
          ref={menuRef}
          className={clsx(
            "fixed top-0 right-0 h-screen w-64 shadow-lg z-[999] transition-transform duration-300 md:hidden",
            {
              // slide from right
              'translate-x-0': isMenuOpen,
              'translate-x-full': !isMenuOpen,
            }
          )}
          style={{ willChange: 'transform' }}
        >
          {/* Menu background is black per spec */}
          <div className="absolute inset-0 bg-black" />
          <div className="flex justify-end p-4 relative z-10">
              <button
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-amber-300 rotate-45 absolute" style={{ top: '50%' }} />
              <span className="block w-6 h-0.5 bg-amber-300 -rotate-45 absolute" style={{ top: '50%' }} />
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 gap-6 relative z-10">
            {navItems.map((item, index) => {
              const common = "text-amber-300 text-lg transition-colors duration-200 hover:text-orange-400";
              if (item === 'Team') {
                return (
                  <Link key={index} to="/team" className={common} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </Link>
                );
              }
              if (item === 'Timeline') {
                return (
                  <Link key={index} to="/timeline" className={common} onClick={() => setIsMenuOpen(false)}>
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
                  className={common}
                  onClick={() => setIsMenuOpen(false)}
                >{item}</a>
              );
            })}
          </div>
        </div>
        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-[998] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </div>
  );
};

export default NavBar;

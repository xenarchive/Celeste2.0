import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  "Home",
  "Honours",
  "Administration",
  "Events",
  "Gallery",
  "Details",
  "POCs",
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const location = useLocation();
  const isMainPage = location.pathname === "/";

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
                  if (item === "Team") {
                    return (
                      <Link key={index} to="/team" className="nav-hover-btn">
                        {item}
                      </Link>
                    );
                  }
                  if (item === "Timeline") {
                    return (
                      <Link
                        key={index}
                        to="/timeline"
                        className="nav-hover-btn"
                      >
                        {item}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={index}
                      href={`${isMainPage ? "" : "/"}#${
                        item === "Home"
                          ? "hero"
                          : item === "Honours"
                            ? "about"
                            : item === "Administration"
                              ? "special-thanks"
                              : item === "POCs"
                                ? "poc"
                                : item.toLowerCase()
                      }`}
                      className="nav-hover-btn"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="flex items-center md:hidden">
                {/* Hamburger Icon for Mobile (fixed top-right on mobile) */}
                <button
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={clsx(
                    "flex size-10 flex-col items-center justify-center",
                    // position at top-right for mobile only
                    "z-60 fixed right-20 top-4"
                    // small offset on larger screens (becomes relative/hidden by md)
                  )}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setIsMenuOpen((s) => !s)}
                >
                  {/* Transform into X when open */}
                  <span
                    className={clsx(
                      "mb-1 block h-0.5 w-7 rounded transition-all duration-300",
                      {
                        // closed: three parallel yellow bars; open: top bar rotates
                        "bg-amber-300 translate-y-0 rotate-0": !isMenuOpen,
                        "bg-amber-300 rotate-45 translate-y-1.5": isMenuOpen,
                      }
                    )}
                  />
                  <span
                    className={clsx(
                      "mb-1 block h-0.5 w-7 rounded transition-all duration-300",
                      {
                        "bg-amber-300": !isMenuOpen,
                        "bg-transparent scale-0": isMenuOpen,
                      }
                    )}
                  />
                  <span
                    className={clsx(
                      "block h-0.5 w-7 rounded transition-all duration-300",
                      {
                        "bg-amber-300": !isMenuOpen,
                        "bg-amber-300 -rotate-45 -translate-y-1.5": isMenuOpen,
                      }
                    )}
                  />
                </button>
              </div>
              <button
                onClick={toggleAudioIndicator}
                className="ml-4 flex items-center space-x-0.5 md:ml-10"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
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
            "fixed right-0 top-0 z-[999] h-screen w-64 shadow-lg transition-transform duration-300 md:hidden",
            {
              // slide from right
              "translate-x-0": isMenuOpen,
              "translate-x-full": !isMenuOpen,
            }
          )}
          style={{ willChange: "transform" }}
        >
          {/* Menu background is black per spec */}
          <div className="absolute inset-0 bg-black" />
          <div className="relative z-10 flex justify-end p-4">
            <button
              aria-label="Close menu"
              // eslint-disable-next-line tailwindcss/enforces-shorthand
              className="relative flex h-8 w-8 items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span
                className="absolute block h-0.5 w-6 rotate-45 bg-amber-300"
                style={{ top: "50%" }}
              />
              <span
                className="absolute block h-0.5 w-6 -rotate-45 bg-amber-300"
                style={{ top: "50%" }}
              />
            </button>
          </div>
          <div className="relative z-10 mt-10 flex flex-col items-center gap-6">
            {navItems.map((item, index) => {
              const common =
                "relative text-white text-lg transition-colors duration-200 hover:text-orange-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-400 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100";
              if (item === "Team") {
                return (
                  <Link
                    key={index}
                    to="/team"
                    className={common}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "Timeline") {
                return (
                  <Link
                    key={index}
                    to="/timeline"
                    className={common}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <a
                  key={index}
                  href={`${isMainPage ? "" : "/"}#${
                    item === "Home"
                      ? "hero"
                      : item === "Honours"
                        ? "about"
                        : item === "Administration"
                          ? "special-thanks"
                          : item === "POCs"
                            ? "poc"
                            : item.toLowerCase()
                  }`}
                  className={common}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="fixed inset-0 z-[998] bg-black bg-opacity-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </div>
  );
};

export default NavBar;

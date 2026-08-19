import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "histoire", label: "Histoire" },
  { id: "soutenir", label: "Soutenir" },
];

interface Props {
  onContactOpen: () => void;
}

function Header({ onContactOpen }: Props) {
  const barRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = barRef.current?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const handleNavClick = (id: string) => {
    if (mobileOpen) {
      // Laisse l'animation de fermeture du menu se terminer avant de
      // scroller : sinon le changement de layout annule le smooth scroll.
      setMobileOpen(false);
      setTimeout(() => scrollToSection(id), 320);
    } else {
      scrollToSection(id);
    }
  };

  const linkStyle = (id: string) => ({
    fontFamily: "'Cinzel', serif",
    fontSize: "0.68rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: active === id ? "#f5c842" : "rgba(255,255,255,0.6)",
  });

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 3.4 }}
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(245,200,66,0.15)"
          : "1px solid transparent",
      }}
    >
      <div
        ref={barRef}
        className="relative max-w-5xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-center"
      >
        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden absolute left-6 flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Ouvrir le menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="w-6 h-px bg-white/80 origin-center"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="w-6 h-px bg-white/80"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="w-6 h-px bg-white/80 origin-center"
          />
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="relative py-2 cursor-pointer transition-colors duration-300"
              style={linkStyle(link.id)}
            >
              {link.label}
              {active === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-yellow-500"
                />
              )}
            </button>
          ))}
          <button
            type="button"
            onClick={onContactOpen}
            className="px-5 py-2 border border-yellow-600/50 text-yellow-500/90 hover:bg-yellow-600/10 hover:border-yellow-500/80 hover:text-yellow-400 transition-all duration-300 cursor-pointer"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-yellow-600/15"
          >
            <div className="flex flex-col items-center gap-7 py-10">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color:
                      active === link.id ? "#f5c842" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onContactOpen();
                }}
                className="mt-2 px-6 py-2.5 border border-yellow-600/50 text-yellow-500/90"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;

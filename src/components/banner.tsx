import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import bg from "../assets/img/bg.png";
import hat from "../assets/img/logo-chapeau.png";
import cowrie from "../assets/img/cowrie.png";
import brand from "../assets/img/brand.png";
import windSrc from "../assets/sound/wind.mp3";

function Banner() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().catch(() => {});

    let vol = 0;
    const volInterval = setInterval(() => {
      vol = Math.min(vol + 0.01, 0.35);
      audio.volume = vol;
      if (vol >= 0.35) clearInterval(volInterval);
    }, 100);

    // Auto-scroll après la fin des animations (~6.5s)
    let rafId: number;
    let active = true;

    const stopScroll = () => {
      active = false;
      cancelAnimationFrame(rafId);
    };

    const scroll = () => {
      if (!active) return;
      window.scrollBy(0, 0.9); // ~54px/s à 60fps
      rafId = requestAnimationFrame(scroll);
    };

    const startTimeout = setTimeout(() => {
      rafId = requestAnimationFrame(scroll);
    }, 6500);

    window.addEventListener("wheel", stopScroll, { passive: true });
    window.addEventListener("touchstart", stopScroll, { passive: true });
    window.addEventListener("keydown", stopScroll);

    return () => {
      clearInterval(volInterval);
      clearTimeout(startTimeout);
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", stopScroll);
      window.removeEventListener("touchstart", stopScroll);
      window.removeEventListener("keydown", stopScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <audio ref={audioRef} src={windSrc} />

      {/* BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1.03 }}
        transition={{ duration: 12, ease: "linear" }}
        className="absolute inset-0 h-screen w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Overlay dramatique */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* CHAPEAU */}
        <motion.img
          src={hat}
          alt="Logo du spectacle Toussaint Louverture - chapeau révolutionnaire"
          initial={{ opacity: 0, scale: 0.6, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 1 }}
          className="
            w-[55vw] sm:w-[40vw] md:w-[30vw] max-w-[280px]
            mb-4 sm:mb-6
            cursor-pointer
            transform
            transition-all duration-500 ease-out
            hover:scale-105
            drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]
          "
        />
        {/* BRAND */}
        <motion.img
          src={brand}
          alt="Toussaint Louverture - titre du spectacle musical"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2.2 }}
          className="w-[85vw] sm:w-[65vw] md:w-[50vw] max-w-[650px] mb-4 sm:mb-6 drop-shadow-[0_0_35px_rgba(255,190,0,0.6)] cursor-pointer
            transform
            transition-all duration-500 ease-out
            hover:scale-105"
        />

        {/* COWRIE */}
        <motion.img
          src={cowrie}
          alt="Coquillage cowrie - symbole de richesse et de dignité"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 3.8,
            type: "spring",
            stiffness: 70,
          }}
          className="w-[18vw] sm:w-[12vw] md:w-[8vw] max-w-[90px] drop-shadow-[0_0_20px_rgba(255,200,0,0.6)]"
        />
      </div>
    </div>
  );
}

export default Banner;

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bg from "../assets/img/bg.png";

const SECTION_ONE =
  "Le destin retrouvé d'un prince esclave est une comédie musicale moderne. Un hommage vivant. Une histoire qui résonne. À la croisée de l'art et de l'Histoire, ce spectacle puissant donne vie à un destin hors du commun à travers une création contemporaine mêlant musique, émotion et narration. Une expérience immersive qui touche, éclaire et inspire, un moment de scène où la mémoire devient énergie, et où le passé dialogue avec notre présent.";

function Description() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="histoire"
      ref={ref}
      className="relative bg-black overflow-hidden scroll-mt-(--header-h) h-[calc(100dvh-var(--header-h))] flex items-center"
    >
      {/* ── Contenu ── */}
      <div className="relative z-20 w-full">
        {/* Titre isolé pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center pb-1 px-4"
        >
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.85rem, min(3.6vw, 4vh), 1.7rem)",
              fontWeight: 600,
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.4,
              overflowWrap: "break-word",
            }}
          >
            « Quand l'histoire refuse l'oubli,<br className="sm:hidden" /> elle se chante. »
          </h1>
        </motion.div>

        {/* Séparateur entre H1 et paragraphes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 px-[22vw] py-8 sm:py-10"
        >
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-yellow-600/40" />
          <span className="text-yellow-600/50 text-sm tracking-widest">
            ✦ ✦ ✦
          </span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-yellow-600/40" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 pb-2 text-center">
          {/* Paragraphe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-8 sm:mb-10 text-justify"
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.95rem, min(1.7vw, 2.4vh), 1.25rem)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {SECTION_ONE}
            </p>
          </motion.div>

          {/* Séparateur ✦ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-8 sm:mb-10"
          >
            <div className="flex-1 h-px bg-linear-to-r from-transparent to-yellow-600/40" />
            <span className="text-yellow-600/50 text-sm tracking-widest">
              ✦ ✦ ✦
            </span>
            <div className="flex-1 h-px bg-linear-to-l from-transparent to-yellow-600/40" />
          </motion.div>

          {/* Ornement bas */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px w-20 mx-auto bg-linear-to-r from-transparent via-yellow-600/40 to-transparent"
          />
        </div>
      </div>

      {/* ── Halo doré ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-yellow-900/10 blur-[100px]" />
      </div>

      {/* ── Image de fond en bas, miroir de la transition haute ── */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <motion.div
          style={{ y: bgY, top: "-15%", bottom: "-15%" }}
          className="absolute inset-x-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.95) 80%, #000 100%)",
          }}
        />
      </div>
    </section>
  );
}

export default Description;

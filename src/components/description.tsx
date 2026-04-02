import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import bg from "../assets/img/bg.png";

const SECTION_ONE = [
  "Le destin retrouvé d'un prince esclave est une comédie musicale moderne. Un hommage vivant. Une histoire qui résonne.",
  "À la croisée de l'art et de l'Histoire, ce spectacle puissant donne vie à un destin hors du commun à travers une création contemporaine mêlant musique, émotion et narration.",
  "Une expérience immersive qui touche, éclaire et inspire, un moment de scène où la mémoire devient énergie, et où le passé dialogue avec notre présent.",
];

function Description() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      {/* ── Contenu ── */}
      <div className="relative z-20">
        {/* Titre isolé pleine largeur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center pt-16 pb-1 px-4"
        >
          <h1
            className="text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.1rem, 2.2vw, 1.9rem)",
              fontWeight: 600,
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
            }}
          >
            « Quand l'histoire refuse l'oubli, elle se chante. »
          </h1>
        </motion.div>

        {/* Séparateur entre H1 et paragraphes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 px-[22vw] py-8"
        >
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-yellow-600/40" />
          <span className="text-yellow-600/50 text-sm tracking-widest">
            ✦ ✦ ✦
          </span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-yellow-600/40" />
        </motion.div>

        <div className="max-w-2xl mx-auto px-12 sm:px-20 md:px-28 pb-20 sm:pb-32 text-center">
          {/* Ornement */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px w-20 mx-auto mb-14 bg-linear-to-rfrom-transparent via-yellow-600/50 to-transparent"
          />

          {/* Paragraphes */}
          <div className="space-y-7 mb-12">
            {SECTION_ONE.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                    lineHeight: "1.95",
                    fontWeight: 300,
                  }}
                >
                  {para}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Séparateur ✦ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 mb-12"
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

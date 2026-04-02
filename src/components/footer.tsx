import { useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "dBEpXXIbKYI";
const HELLOASSO_URL =
  "https://www.helloasso.com/associations/dsibels/collectes/toussaint-louverture-showcase";

function Footer() {
  const [playing, setPlaying] = useState(false);

  return (
    <footer style={{ background: "linear-gradient(to bottom, #000 0%, #0d0a07 100%)" }} className="relative overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto px-8 sm:px-16 pt-24 pb-16 flex flex-col items-center gap-16">
        {/* ── Vidéo ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full"
        >
          <div
            className="relative w-full overflow-hidden rounded-sm"
            style={{ aspectRatio: "16/9" }}
          >
            {!playing ? (
              /* Vignette cliquable */
              <div
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setPlaying(true)}
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Aperçu vidéo"
                  className="w-full h-full object-cover"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                {/* bouton play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center bg-black/40 group-hover:bg-black/20 group-hover:scale-110 transition-all duration-300">
                    <div
                      className="w-0 h-0 ml-1"
                      style={{
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "18px solid rgba(255,255,255,0.9)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Lecteur intégré */
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Toussaint Louverture"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* ── Séparateur ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600/40 to-transparent"
        />

        {/* ── Financement participatif ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <p
            className="text-yellow-600/60 uppercase tracking-[0.35em]"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.55rem, 1vw, 0.72rem)",
            }}
          >
            Soutenir le projet
          </p>
          <p
            className="text-white/70 max-w-md"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              lineHeight: "1.8",
              fontWeight: 300,
            }}
          >
            Participez à la création de ce spectacle vivant en soutenant notre campagne de financement participatif.
          </p>
          <a
            href={HELLOASSO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 border border-yellow-600/50 text-yellow-500/80 hover:bg-yellow-600/10 hover:border-yellow-500/80 hover:text-yellow-400 transition-all duration-300"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.6rem, 1.1vw, 0.78rem)",
              letterSpacing: "0.25em",
            }}
          >
            Contribuer sur HelloAsso
          </a>
        </motion.div>

        {/* ── Bas de page ── */}
        <div className="w-full flex flex-col items-center gap-3 pt-4 border-t border-white/5">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent" />
          <p
            className="text-white/20 text-xs tracking-widest"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            © {new Date().getFullYear()} Toussaint Louverture
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

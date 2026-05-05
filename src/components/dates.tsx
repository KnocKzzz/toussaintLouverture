import { motion } from "framer-motion";

const DATES = [
  {
    date: "10 mai",
    event: "Commémoration de l'abolition de l'esclavage",
    location: "Toulouse",
  },
  {
    date: "20 mai",
    event: "Présentation à l'Ambassade d'Haïti",
    location: "Paris",
  },
  {
    date: "22 mai",
    event: "UNESCO - Journée mondiale de la culture",
    location: "Paris",
  },
];

function Dates() {
  return (
    <section className="relative bg-black overflow-hidden py-20 sm:py-32">
      <div className="relative z-20">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center px-4 mb-16"
        >
          <h2
            className="text-white"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Prochaines Représentations
          </h2>
        </motion.div>

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 px-[22vw] mb-16"
        >
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-yellow-600/40" />
          <span className="text-yellow-600/50 text-sm tracking-widest">
            ✦ ✦ ✦
          </span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-yellow-600/40" />
        </motion.div>

        {/* Liste des dates */}
        <div className="max-w-3xl mx-auto px-6 sm:px-12 space-y-8">
          {DATES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-l-2 border-yellow-600/40 pl-8"
            >
              <div
                className="text-yellow-600"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  marginBottom: "0.5rem",
                }}
              >
                {item.date}
              </div>
              <div
                className="text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 500,
                  lineHeight: "1.6",
                }}
              >
                {item.event}
              </div>
              <div
                className="text-yellow-600/60 mt-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                  fontStyle: "italic",
                }}
              >
                {item.location}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Séparateur bas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 px-[22vw] mt-16"
        >
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-yellow-600/40" />
          <span className="text-yellow-600/50 text-sm tracking-widest">
            ✦ ✦ ✦
          </span>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-yellow-600/40" />
        </motion.div>
      </div>

      {/* Halo doré */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-yellow-900/10 blur-[100px]" />
      </div>
    </section>
  );
}

export default Dates;

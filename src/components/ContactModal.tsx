import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface Props {
  onClose: () => void;
}

function ContactModal({ onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(245,200,66,0.25)",
    color: "#fff",
    padding: "0.6em 0.9em",
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Cinzel', serif",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(245,200,66,0.7)",
    display: "block",
    marginBottom: "0.4rem",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0d0a07",
            border: "1px solid rgba(245,200,66,0.2)",
            width: "100%",
            maxWidth: "480px",
            padding: "2.5rem 2rem",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1rem",
                letterSpacing: "0.15em",
                color: "#fff8e7",
              }}
            >
              NOUS CONTACTER
            </h2>
            <button
              onClick={onClose}
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "1.2rem",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {status === "success" ? (
            <div className="text-center py-8">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  color: "rgba(245,200,66,0.9)",
                }}
              >
                Message envoyé. Merci pour votre intérêt.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <label style={labelStyle}>Prénom</label>
                  <input name="prenom" required style={inputStyle} />
                </div>
                <div className="flex-1">
                  <label style={labelStyle}>Nom</label>
                  <input name="nom" required style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" required style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Téléphone</label>
                <input name="telephone" type="tel" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#c0392b",
                    fontSize: "0.9rem",
                  }}
                >
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(245,200,66,0.5)",
                  color: "rgba(245,200,66,0.85)",
                  padding: "0.75em 2em",
                  background: "transparent",
                  cursor: status === "sending" ? "wait" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  marginTop: "0.5rem",
                }}
              >
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContactModal;

import { useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Description from "./components/description";
import Footer from "./components/footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <Banner />
      <div className="bg-black text-center py-6 px-6">
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.72rem, 1.3vw, 1rem)",
            letterSpacing: "clamp(0.08em, 1vw, 0.2em)",
            textTransform: "uppercase",
            color: "#fff8e7",
            border: "1px solid rgba(245,200,66,0.4)",
            padding: "0.5em 1.4em",
            display: "inline-block",
            lineHeight: 1.8,
          }}
        >
          ✦ Spectacle en cours<br className="sm:hidden" /> de création ✦
        </span>
      </div>
      <Description />
      <Footer onContactOpen={() => setContactOpen(true)} />
    </>
  );
}

export default App;

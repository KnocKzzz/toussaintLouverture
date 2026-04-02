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
      <div className="bg-black text-center py-6">
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.8rem, 1.3vw, 1.1rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#fff8e7",
            border: "1px solid rgba(245,200,66,0.4)",
            padding: "0.35em 1.2em",
          }}
        >
          ✦ Spectacle en cours de création ✦
        </span>
      </div>
      <Description />
      <Footer onContactOpen={() => setContactOpen(true)} />
    </>
  );
}

export default App;

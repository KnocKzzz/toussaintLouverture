import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Description from "./components/description";
import Footer from "./components/footer";
import ContactModal from "./components/ContactModal";

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      <Header onContactOpen={() => setContactOpen(true)} />
      <Banner />
      <Description />
      <Footer onContactOpen={() => setContactOpen(true)} />
    </>
  );
}

export default App;

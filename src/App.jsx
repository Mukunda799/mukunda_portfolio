import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { ExperienceSection } from "./components/sections/Experience";
import Footer from "./components/footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Education />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

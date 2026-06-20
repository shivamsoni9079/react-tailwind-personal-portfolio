import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { LearningJourney } from "./sections/LearningJourney";
import {Achievements} from "./sections/Achievements"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements/>
        <LearningJourney/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

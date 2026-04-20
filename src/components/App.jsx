// ─────────────────────────────────────────────
//  App.jsx  —  Root component
// ─────────────────────────────────────────────
import { GLOBAL_CSS, S } from "../styles/styles";
import Navbar             from "./Navbar";
import Hero               from "./Hero";
import Projects           from "./Projects";
import Skills             from "./Skills";
import Experience         from "./Experience";
import Education          from "./Education";
import Contact            from "./Contact";
import Footer             from "./Footer";

export default function App() {
  return (
    <div style={S.root}>
      <style>{GLOBAL_CSS}</style>
      <Navbar     />
      <Hero       />
      <Projects   />
      <Skills     />
      <Experience />
      <Education  />
      <Contact    />
      <Footer     />
    </div>
  );
}

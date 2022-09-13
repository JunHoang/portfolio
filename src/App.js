import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Particles from "react-particles-js";
import { ParticlesParams } from "./ParticlesParams";

function App() {
  return (
    <>
      <Navbar />
      <Particles className="particles-canvas" params={ParticlesParams} />
      <Header />

      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

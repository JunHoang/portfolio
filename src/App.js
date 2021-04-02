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
      <Particles
        className="particles-canvas"
        params={ParticlesParams}
        // params={{
        //   particles: {
        //     number: {
        //       value: 30,
        //       density: {
        //         enable: true,
        //         value_area: 900,
        //       },
        //     },
        //     shape: {
        //       type: "star",
        //       stroke: {
        //         width: 6,
        //         color: "#f9ab00",
        //       },
        //     },
        //   },
        // }}
      />
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

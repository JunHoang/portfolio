import React, {useCallback} from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Header() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div id="home" className="dark-overlay">
      <div className="header-wraper">
      <Particles
            className="particles-canvas"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 900,
                    },
                  },
                  color: {
                    value: "#ffffff",
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 0,
                      color: "#000000",
                    },
                    polygon: {
                      nb_sides: 5,
                    },
                    image: {
                      src: "img/github.svg",
                      width: 100,
                      height: 100,
                    },
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 20,
                      size_min: 0.1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200,
                    },
                  },
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                    onclick: {
                      enable: true,
                      mode: "push",
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 10,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
                detectRetina: true,
            }}
        />
        <div className="main-info">
          <h1>Hi, I'm Dung Hoang!</h1>
          <Typed
            className="typed-text"
            strings={[
              "An enthusiastic web developer",
              "who loves clean code, ",
              "and creates beautiful websites.",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />

          <button className="btn btn-outline-danger text-uppercase text-white mt-3 font-weight-bold">
            <Link
              smooth={true}
              to="contacts"
              offset={-80}
              className="nav-link text-white"
              href="contacts"
            >
              contact me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

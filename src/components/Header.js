import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="home" className="dark-overlay">
      <div className="header-wraper">
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

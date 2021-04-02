import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div id="home" className="dark-overlay">
      <div className="header-wraper">
        <div className="main-info">
          <h1>web development and website promotions</h1>
          <Typed
            className="typed-text"
            strings={["Hi!", "I'm Dung Hoang", "I'm a Front-end Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <button className="btn btn-outline-danger text-uppercase text-white mt-3 font-weight-bold mt-5">
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

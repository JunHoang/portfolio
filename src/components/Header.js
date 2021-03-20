import React from "react";
import Typed from "react-typed";

export default function Header() {
  return (
    <div className="dark-overlay">
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
          {/* <a href="#" className="btn-main-offer">
          Contact me
        </a> */}
          <button className="btn btn-outline-danger text-uppercase text-white mt-3 font-weight-bold">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
}

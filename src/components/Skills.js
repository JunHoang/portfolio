import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="py-5">my skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Web Design</h3>
              <p>
                I approach each project individually and always focus on the
                result.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-6 col-md-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Web Development</h3>
              <p>Your website will be build with a new proven technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

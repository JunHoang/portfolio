import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018 - Now</h3>
            <h2>SOUTH-EASTERN FINLAND UNIVERSITY OF APPLIED SCIENCE - XAMK</h2>
            <p>Bachelor of Engineering, Information Technology</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Novermber 2020</h3>
            <h2>KUBERNETES CHALLENGES XAMK</h2>
            <p>
              This DevOps challenge is a hackathon-like experience and perfect
              opportunity to explore and learn modern DevOps technologies with
              Azure, Kubernetes, and other devops tools, methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

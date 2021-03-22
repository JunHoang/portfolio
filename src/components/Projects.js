import React from "react";
import hungryReact from "../images/hungry-react-restaurant.jpeg";
import photoGallery from "../images/photo-gallery.jpeg";
import portfolio from "../images/portfolio.jpeg";

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="projects-image-box">
            <img
              className="projects-image"
              src={portfolio}
              alt="Portfolio Project..."
            ></img>
          </div>
          {/* - */}
          <div className="projects-image-box">
            <img
              className="projects-image"
              src={hungryReact}
              alt="Hungry React Project..."
            ></img>
          </div>
          {/* - */}
          <div className="projects-image-box">
            <img
              className="projects-image"
              src={photoGallery}
              alt="Photo Gallery Project..."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

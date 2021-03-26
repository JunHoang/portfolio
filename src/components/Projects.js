import React from "react";
import hungryReact from "../images/hungry-react-restaurant.jpeg";
import photoGallery from "../images/photo-gallery.jpeg";
import portfolio from "../images/portfolio.jpeg";
//Import Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Projects() {
  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={portfolio}
          alt="Portfolio Projects..."
        />
        <p className="pl-2 pt-3">
          Portfolio Project is the project introducing clearly about me and it
          is also the website you are accessing. Thanks for visiting.
        </p>
        <b className="pl-2">Website Link: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://dunghoang-portfolio.netlify.app/")
          }
        >
          https://dunghoang-portfolio.netlify.app/
        </a>
        <br />
        <b className="pl-2">Source code: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/JunHoang/portfolio")}
        >
          https://github.com/JunHoang/portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: { enable: true, text: "Portfolio Project" },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //HungryReact
  const openPopupboxHungryReact = () => {
    const content = (
      <div width="960px">
        <img
          className="project-image-popupbox"
          src={hungryReact}
          alt="Hungry React Restaurant Projects..."
        />
        <p className="pl-2 pt-3">
          Hungry-React is a website of the restaurant which will show the
          dishes, details of dishes and all the information of the restaurant.
          <br />
          This website helps users can login, see all dishes, and write comments
          on dishes easily.
        </p>
        <b className="pl-2">Website Link: </b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://hungry-react.netlify.app/")}
        >
          https://hungry-react.netlify.app/
        </a>
        <br />
        <b className="pl-2">Source code: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/JunHoang/Hungry-React")
          }
        >
          https://github.com/JunHoang/Hungry-React
        </a>
      </div>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigHungryReact = {
    titleBar: { enable: true, text: "Hungry React Restaurant App Project" },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  //Gallery
  const openPopupboxGallery = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
          src={photoGallery}
          alt="Photo Gallery Projects..."
        />
        <p className="pl-2 pt-3">
          Unsplash-Photo-Gallery website shows the images and predicts what is
          in that picture by using a machine learning platform called
          Tensorflow. <br />
          Additionally, Firebase is also used in the website for registering and
          authentication.
        </p>
        <b className="pl-2">Website Link: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://unsplash-photo-gallery-react.netlify.app/")
          }
        >
          https://unsplash-photo-gallery-react.netlify.app/
        </a>
        <br />
        <b className="pl-2">Source code: </b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/JunHoang/Unsplash-Photo-Gallery")
          }
        >
          https://github.com/JunHoang/Unsplash-Photo-Gallery
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigGallery = {
    titleBar: { enable: true, text: "Unsplash Photo Gallery Project" },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="projects-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="projects-image"
              src={portfolio}
              alt="Portfolio Project..."
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxHungryReact}>
            <img
              className="projects-image"
              src={hungryReact}
              alt="Hungry React Project..."
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxGallery}>
            <img
              className="projects-image"
              src={photoGallery}
              alt="Photo Gallery Project..."
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="projects-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigHungryReact} />
      <PopupboxContainer {...popupboxConfigGallery} />
    </div>
  );
}

export default Projects;

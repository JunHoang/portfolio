import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-12 justify-content-center">
            <div className="d-flex">
              <p>Espoo, 02600, Finland</p>
            </div>
            <div className="d-flex">
              <a href="tel:0465712157">+358 449 836 498</a>
            </div>
            <div className="d-flex">
              <a href="mailto:dunghoang.lhp@gmail.com">
                dunghoang.lhp@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="d-flex py-3">
              <p>Contact via my Social Media Network!</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 align-items-center">
            <div className="d-flex justify-content-center">
              <a
                className="pr-2"
                href="https://www.linkedin.com/in/dunghoang9498/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  className="icon-footer"
                  icon={faLinkedinIn}
                  size="3x"
                />
              </a>
              <a
                className="px-2"
                href="https://github.com/JunHoang"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  className="icon-footer"
                  icon={faGithub}
                  size="3x"
                />
              </a>
              <a
                className="px-2"
                href="https://www.facebook.com/JunHoang.9498/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  className="icon-footer"
                  icon={faFacebookF}
                  size="3x"
                />
              </a>
              <a
                className="px-2"
                href="https://www.instagram.com/hnmd98/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon
                  className="icon-footer"
                  icon={faInstagram}
                  size="3x"
                />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;{new Date().getFullYear()}&nbsp;- Dung Hoang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

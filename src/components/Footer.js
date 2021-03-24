import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Martinlaksoo, 01620, Vantaa</p>
            </div>
            <div className="d-flex">
              <a href="tel:0465712157">+358 465 712 157</a>
            </div>
            <div className="d-flex">
              <a href="mailto:kathymaidung@gmail.com">kathymaidung@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Service</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Projects</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

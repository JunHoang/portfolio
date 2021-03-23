import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Have a question or want to work together? Fill in this form, I will
          respond as soon as possible!
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {/* NAME INPUT */}

            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <div className="line"></div>

            {/* PHONE INPUT */}

            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
            />
            <div className="line"></div>

            {/* EMAIL INPUT */}

            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />
            <div className="line"></div>

            {/* SUBJECT INPUT */}

            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
            <div className="line"></div>
          </div>
          <div className="col-md-6 col-sm-12">
            {/* MESSAGE */}

            <textarea
              type="text"
              className="form-control"
              placeholder="Message"
              name="message"
            />
            <div className="line"></div>

            <button className="btn btn-outline-warning btn-block" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Particles from "react-particles-js";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_portfolio";
  const templateID = "template_portfolio";
  const userID = "user_1apRmUWty7waRjs3a9vqE";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Thank you! I will get back to you as soon as possible!"
        );
      })
      .catch((err) => console.err(`Something went wrong ${err}`));
  };

  if (successMessage) {
    return (
      <div id="contacts" className="success-message">
        <h1>{successMessage}</h1>
      </div>
    );
  } else {
    return (
      <div id="contacts" className="contacts">
        <div className="text-center">
          <h1>contact me</h1>
          <p>
            Have a question or want to work together? Fill in this form, I will
            respond as soon as possible!
          </p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                {/* NAME INPUT */}
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    ref={register({
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message:
                          "Please enter a name with fewer than 20 characters",
                      },
                    })}
                  />
                  <div className="line"></div>
                </div>
                <div className="error-message">
                  {errors.name && errors.name.message}
                </div>

                {/* PHONE INPUT */}
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    ref={register({
                      required: "Please enter your phone number",
                    })}
                  />
                  <div className="line"></div>
                </div>
                <div className="error-message">
                  {errors.phone && errors.phone.message}
                </div>

                {/* EMAIL INPUT */}
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: "Please provide your email",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                        message: "invalid Email",
                      },
                    })}
                  />
                  <div className="line"></div>
                </div>
                <div className="error-message">
                  {errors.email && errors.email.message}
                </div>

                {/* SUBJECT INPUT */}
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    ref={register({
                      required: "OOPS, you forget to add the subject.",
                    })}
                  />
                  <div className="line"></div>
                </div>
                <div className="error-message">
                  {errors.subject && errors.subject.message}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                {/* MESSAGE */}
                <div>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    ref={register({
                      required: "Please describe shortly the message...",
                    })}
                  />
                  <div className="line"></div>
                </div>
                <div className="error-message">
                  {errors.message && errors.message.message}
                </div>

                <button
                  className="btn btn-outline-warning btn-block"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Contacts;

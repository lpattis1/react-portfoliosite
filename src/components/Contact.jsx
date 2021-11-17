import React, { useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gb5nof4",
        "template_ssv4tne",
        e.target,
        "user_guNgAcFbWzg0F47HMj4Fo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section id="contact">
        <div className="container contact-container d-flex flex-column justify-content-center align-items-center">
          <div className="contact-text-top d-flex flex-column justify-content-center align-items-center">
            <h5 className="left-txt mb-5">Contact</h5>
          </div>
          <form
            className="contact-form row d-flex justify-content-center align-items-center"
            name="contact"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="col-12">
              <div className="name-input-div input-div">
                <label htmlFor="name" className="name-label input-label">
                  <span className="label-line"></span> Name
                </label>
                <input
                  type="text"
                  className="name-input form-control form-control-lg"
                  placeholder="Enter your name..."
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="email-input-div input-div">
                <label htmlFor="email" className="email-label input-label">
                  <span className="label-line"></span> Email
                </label>
                <input
                  type="email"
                  className="email-input form-control form-control-lg input-lg"
                  placeholder="Enter your email..."
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="message-input-div input-div">
                <label htmlFor="message" className="message-label input-label">
                  <span className="label-line"></span> Message
                </label>
                <textarea
                  className="form-control message-input form-control-lg input-lg"
                  id="message"
                  rows="3"
                  placeholder="Enter your message..."
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="button-input-div input-div text-center">
                <button type="submit" className="input-submit-btn w-100">
                  Submit
                </button>
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="success-message text-center">
                {success ? (
                  <p className="success-message-text">
                    Email successfully sent!
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;

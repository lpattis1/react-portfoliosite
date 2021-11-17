import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section id="contact">
        <div className="container contact-container d-flex flex-column justify-content-center align-items-center">
          <div className="contact-text-top d-flex flex-column justify-content-center align-items-center">
            <h5 className="left-txt mb-5">Contact</h5>
          </div>
          <form
            data-netlify="true"
            className="contact-form row d-flex justify-content-center align-items-center"
            action="POST"
          >
            <div className="col-12">
              <div className="name-input-div input-div">
                <label htmlFor="name-input" className="name-label input-label">
                  <span className="label-line"></span> Name
                </label>
                <input
                  type="text"
                  className="name-input form-control form-control-lg"
                  placeholder="Enter your name..."
                />
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="email-input-div input-div">
                <label
                  htmlFor="email-input"
                  className="email-label input-label"
                >
                  <span className="label-line"></span> Email
                </label>
                <input
                  type="email"
                  className="email-input form-control form-control-lg input-lg"
                  placeholder="Enter your email..."
                />
              </div>
            </div>

            <div className="col-12 mt-5">
              <div className="message-input-div input-div">
                <label
                  htmlFor="message-input"
                  className="message-label input-label"
                >
                  <span className="label-line"></span> Message
                </label>
                <textarea
                  className="form-control message-input form-control-lg input-lg"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your message..."
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
          </form>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Contact;

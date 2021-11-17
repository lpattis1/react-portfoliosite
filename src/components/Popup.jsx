import React, { useState, useEffect } from "react";

const Popup = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const int = setTimeout(() => {
      setShowModal(true);
    }, 7000);

    return () => clearTimeout(int);
  }, []);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <section
      className={
        showModal
          ? "socials-modal socials-modal--visible"
          : "socials-modal socials-modal--hidden"
      }
    >
      <div className="socials-modal-close d-flex justify-content-end">
        <i onClick={hideModal} className="fas fa-times-circle" />
      </div>
      <div className="container modal-popup">
        <div className="row socials-container">
          <div className="socials-text col col-12 col-lg-6">
            <div className="socials-logo">
              <img src="/img/3d-cube.svg" alt="" className="l-img img-fluid" />
              <h3 className="l-text">LP</h3>
            </div>
            <div className="socials-info">
              <h2>Follow me on social media!</h2>
              <p className="my-info">
                Want to see what I'm up to? Follow me on my social media pages.
                I am currently on Linkedin, Behance, Github, and Instagram. Feel
                free to reach out to me anytime or add me 😎
              </p>
              <div className="links">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/lpattison25/"
                  className="linkedin social-link"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/lpattis1"
                  className="github social-link"
                >
                  <i className="fab fa-github-square" />
                </a>
                <a
                  target="_blank"
                  href="https://www.behance.net/laurenpattison1"
                  className="behance social-link"
                >
                  <i className="fab fa-behance-square" />
                </a>
              </div>
              <div className="social-exit">
                <a onClick={hideModal} href="#" className="no-thanks">
                  No thanks, take me back to the site.
                </a>
              </div>
            </div>
          </div>
          <div className="socials-img col col-12 col-lg-6">
            <img
              src="/img/social-media-marketing.png"
              alt=""
              className="s-img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popup;

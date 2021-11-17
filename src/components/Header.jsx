import React from "react";
import Typerwriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <section id="home" className="page-section">
      <div className="container">
        <div
          className="
      home-content
      row
      d-flex
      justify-content-between
      align-items-center
      mx-auto
    "
        >
          <Fade delay={2800} duration={2000}>
            <div className="home-text-area col col-12 col-lg-6">
              <h1 className="h1 home-text--heading display-1">
                Hi, I'm Lauren.
              </h1>
              <h3 className="home-text--subheading h3">
                <Typerwriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("A Frontend Developer...")
                      .pauseFor(300)
                      .deleteChars(23)
                      .pauseFor(300)
                      .typeString("Merging design and development.")
                      .pauseFor(300)
                      .start();
                  }}
                />
              </h3>
              <p className="home-text--info lead">
                I'm an entry level frontend developer who excels at problem
                solving and analytical thinking. A team player who is both
                adaptive and determined to always deliver the best possible
                product or assignment. Constantly seeking to learn new things to
                improve both personally and professionally; very efficient at
                picking up new concepts and skills. Passionate about technology,
                advancement, design and combining the three through frontend
                development.
              </p>
            </div>
            <div className="home-img-area col col-12 col-lg-6">
              <img
                src="img/2_Thumbs up_2_06.png"
                alt=""
                className="img-fluid home-img--hand"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Header;

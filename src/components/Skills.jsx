import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mt-5">
        <div className="skills-title-contain d-flex flex-column justify-content-center align-items-center">
          <ScrollAnimation animateIn="fadeIn">
            <h3 className="skills-title">My Skills</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="skills-row row mt-3 mb-4 gy-5 gx-0">
              <div className="col col-xl-3 col-4">
                <div className="html d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/v6nVkRL.png"
                    alt=""
                    className="html-img img-fluid skills-img"
                  />
                  <p className="html-description text-center mt-2">HTML5</p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="css d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/jcIj5XK.png"
                    alt=""
                    className="css-img img-fluid skills-img"
                  />
                  <p className="css-description text-center mt-2">CSS3</p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="bootstrap d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/Z6UUuEq.png"
                    alt=""
                    className="bootstrap-img img-fluid skills-img"
                  />
                  <p className="bootstrap-description text-center mt-2">
                    Bootstrap
                  </p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="javascript d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/GuvY7Ll.png"
                    alt=""
                    className="javascript-img img-fluid skills-img"
                  />
                  <p className="javascript-description text-center mt-2">
                    Javascript
                  </p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="git d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/52KLMnc.png"
                    alt=""
                    className="git-img img-fluid skills-img"
                  />
                  <p className="git-description text-center mt-2">Git</p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="npm d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/Tzi2bsG.png"
                    alt=""
                    className="npm-img img-fluid skills-img"
                  />
                  <p className="npm-description text-center mt-2">Npm</p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="react d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/RaByGpu.png"
                    alt=""
                    className="react-img img-fluid skills-img"
                  />
                  <p className="react-description text-center mt-2">React</p>
                </div>
              </div>

              <div className="col col-xl-3 col-4">
                <div className="figma d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="https://i.imgur.com/Be9oOTo.png"
                    alt=""
                    className="figma-img img-fluid skills-img"
                  />
                  <p className="figma-description text-center mt-2">Figma</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;

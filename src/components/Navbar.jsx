import React, { useState } from "react";
import Slidingnav from "./Slidingnav";
import Slidelinks from "./Slidelinks";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [slidingNav, setSlidingNav] = useState("sliding-nav sliding-nav--hide");

  const showSlidingNav = () => {
    setSlidingNav("sliding-nav sliding-nav--show");
  };

  const closeSlidingNav = () => {
    setSlidingNav("sliding-nav sliding-nav--hide");
  };
  return (
    <>
      <nav class="navbar sticky-top p-4 portfolio-navbar ">
        <div class="container nav-container d-flex flex-row justify-content-between align-items-center">
          <Roll left delay={2400} duration={1500}>
            <div className="d-flex">
              <div class="navbar-brand d-flex align-items-center">
                <img class="logo-icon" src="/img/3d-cube.svg" alt="" />
                <h3 class="logo-txt">LP</h3>
              </div>
            </div>
          </Roll>

          <div
            class="
            right-nav-menu
            d-flex
            align-items-center
            justify-content-center
          "
          >
            <Roll right delay={2400} duration={1500}>
              <div>
                <div class="right-nav-btn btn d-none d-md-block">
                  <a href="#portfolio" class="portfolio-link">
                    Portfolio
                  </a>
                </div>
              </div>
            </Roll>
            <div className="mx-5 hamburger-contain">
              <Roll right delay={2400} duration={1500}>
                <div onClick={showSlidingNav} class="hamburger-menu">
                  <i class="fas fa-bars"></i>
                </div>
              </Roll>
            </div>
          </div>
        </div>
      </nav>
      <div className="sliding-nav-container">
        <Slidingnav slidingNavState={slidingNav}>
          <div className="sliding-nav-position d-flex align-items-center justify-content-between">
            <div className="sliding-nav-right mt-5">
              <div className="sliding-nav-logo d-flex align-items-center">
                <img
                  src="/img/3d-cube-menu.svg"
                  alt=""
                  className="sliding-nav-img"
                />
                <h3 className="sliding-nav-txt">LP</h3>
              </div>
            </div>

            <div className="sliding-nav-left mt-4">
              <div
                onClick={closeSlidingNav}
                className="sliding-nav-close d-flex align-items-center"
              >
                <span className="close-txt">Close</span>
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>

          <div className="sliding-list mt-5">
            <Slidelinks click={closeSlidingNav} linkName="home" />
            <Slidelinks click={closeSlidingNav} linkName="skills" />
            <Slidelinks
              click={closeSlidingNav}
              linkName="resume"
              open="_blank"
            />
            <Slidelinks click={closeSlidingNav} linkName="portfolio" />
            <Slidelinks click={closeSlidingNav} linkName="contact" />
          </div>
        </Slidingnav>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";

const Slidelinks = (props) => {
  const [mouseState, setMouseState] = useState("hover-state");

  const handleMouseEnter = (e) => {
    if (e.target) {
      setMouseState("hover-state--show");
    }
  };

  const handleMouseLeave = (e) => {
    setMouseState("hover-state");
  };
  return (
    <div className="list-item">
      <span className={mouseState}>
        <i className="fas fa-long-arrow-alt-right"></i>
      </span>
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={props.click}
        target={props.open}
        href={
          props.linkName === "resume"
            ? "https://docdro.id/RBBJFzp"
            : `#${props.linkName}`
        }
        className="list-link display-3"
      >
        {props.linkName}
      </a>
    </div>
  );
};

export default Slidelinks;

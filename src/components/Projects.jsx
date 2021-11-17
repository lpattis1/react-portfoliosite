import React, { createRef, useState } from "react";

const Projects = (props) => {
  const [showBg, setShowBg] = useState("project-bg");

  const bgVisible = () => {
    setShowBg("project-darken");
  };

  const bgHidden = () => {
    setShowBg("project-bg");
  };
  return (
    <div
      onMouseEnter={bgVisible}
      onMouseLeave={bgHidden}
      data-projectId={props.projectId}
      className={props.projectClasses}
    >
      <div className={showBg}>
        <div className="project-information">
          <h3 className="project-title">{props.projectNumber}</h3>
          <p className="project-description">{props.projectDescription}</p>
          <div className="project-icons">
            <button className="live-demo mb-2">
              <a
                target="_blank"
                href={props.projectPreview}
                className="project-link"
              >
                Live Preview
              </a>
            </button>
            <button className="github-code mb-2">
              <a target="_blank" href={props.gitHub} className="project-link">
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

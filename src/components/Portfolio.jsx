import React, { useState } from "react";
import Projects from "./Projects";
import Portfoliolinks from "./Portfoliolinks";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Portfolio = () => {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

  const FadeIn = styled.div`
    animation: ${fadeIn} 2s linear;
  `;

  const [projects, setProjects] = [
    {
      allProjects: [
        {
          projectId: "javascript html-css",
          projectClasses: "featured featured-one all javascript",
          projectNumber: "Project One",
          projectDescription:
            "An interactive, redesigned landing page. The tools I used for this project included: Figma, HTML, SASS, Bootstrap, and Vanilla Javascript.",
          projectLiveLink: "https://yomamas-05a233.netlify.app/",
          projectGithub: "https://github.com/lpattis1/restaurantsite-revised",
        },

        {
          projectId: "react",
          projectClasses: "featured featured-two all html-css",
          projectNumber: "Project Two",
          projectDescription:
            "A fullstack blog app. The tools I used for this project included: React, SASS, MySQL, Node, and Typescript.",
          projectLiveLink: "https://hidden-forest-27744.herokuapp.com/",
          projectGithub: "https://github.com/lpattis1/productionblog",
        },

        {
          projectId: "javascript html-css",
          projectClasses: "featured featured-three all javascript",
          projectNumber: "Project Three",
          projectDescription:
            "An multi-page site done for a painting company. The tools I used for this project included: Figma, HTML, Bootstrap, CSS, and Vanilla JS.",
          projectLiveLink: "https://morisset-painting-aeb290.netlify.app/",
          projectGithub: "https://github.com/lpattis1/paintingcompanysite",
        },

        {
          projectId: "react",
          projectClasses: "featured featured-four all react",
          projectNumber: "Project Four",
          projectDescription:
            "A conceptual photography portfolio site. The tools I used for this project included: React, Boostrap, Fancybox, and CSS.",
          projectLiveLink: "https://photography-site-578f40.netlify.app/",
          projectGithub: "https://github.com/lpattis1/react-photographysite",
        },

        {
          projectId: "react",
          projectClasses: "featured featured-five all react",
          projectNumber: "Project Five",
          projectDescription:
            "Personal portfolio site. The tools I used for this project included: React, Boostrap, Scroll Animation, and CSS.",
          projectLiveLink: "https://laurenpattison.com/",
          projectGithub: "https://github.com/lpattis1/react-portfoliosite",
        },

        {
          projectId: "react",
          projectClasses: "featured featured-six all react",
          projectNumber: "Project Six",
          projectDescription:
            "A collaborative full-stack project that allows users to login/register to find and favorite pets. As the frontend dev the tools I am using for this project include: React, Bootstrap, Material UI, and more.",
          projectLiveLink: "https://www.youtube.com/watch?v=YMo2B2enAIg",
          projectGithub: "https://github.com/Kaley925/FETCH",
        },
      ],
    },
  ];
  const [projectDisplay, setProjectDisplay] = useState("all");
  const [liState, setLiState] = useState({
    activeLink: null,
    links: [
      {
        category: "all",
        categoryClass: "all",
        id: 1,
      },
      {
        category: "html/css",
        categoryClass: "html-css",
        id: 2,
      },
      {
        category: "javascript",
        categoryClass: "javascript",
        id: 3,
      },
      {
        category: "react",
        categoryClass: "react",
        id: 4,
      },
    ],
  });

  const toggleActive = (index) => {
    setLiState({ ...liState, activeLink: liState.links[index] });
  };

  const filterAllProjects = projects.allProjects.map((project) => {
    return (
      <div className="col col-xl-4 col-12">
        <FadeIn>
          <Projects
            projectId={project.projectId}
            projectClasses={project.projectClasses}
            projectNumber={project.projectNumber}
            projectDescription={project.projectDescription}
            projectPreview={project.projectLiveLink}
            gitHub={project.projectGithub}
          />
        </FadeIn>
      </div>
    );
  });

  const filterJsProjects = projects.allProjects
    .filter((project) => project.projectId.includes("javascript"))
    .map((project) => {
      return (
        <div className="col col-xl-6 col-12">
          <FadeIn>
            <Projects
              projectId={project.projectId}
              projectClasses={project.projectClasses}
              projectNumber={project.projectNumber}
              projectDescription={project.projectDescription}
              projectPreview={project.projectLiveLink}
              gitHub={project.projectGithub}
            />
          </FadeIn>
        </div>
      );
    });

  const filterHtmlProjects = projects.allProjects
    .filter((project) => project.projectId.includes("html-css"))
    .map((project) => {
      return (
        <div className="col col-xl-6 col-12">
          <FadeIn>
            <Projects
              projectId={project.projectId}
              projectClasses={project.projectClasses}
              projectNumber={project.projectNumber}
              projectDescription={project.projectDescription}
              projectPreview={project.projectLiveLink}
              gitHub={project.projectGithub}
            />
          </FadeIn>
        </div>
      );
    });

  const filterReactProjects = projects.allProjects
    .filter((project) => project.projectId.includes("react"))
    .map((project) => {
      return (
        <div className="col col-xl-6 col-12">
          <FadeIn>
            <Projects
              projectId={project.projectId}
              projectClasses={project.projectClasses}
              projectNumber={project.projectNumber}
              projectDescription={project.projectDescription}
              projectPreview={project.projectLiveLink}
              gitHub={project.projectGithub}
            />
          </FadeIn>
        </div>
      );
    });

  const sortProjects = (e) => {
    if (e.target.dataset.category === "all") {
      setProjectDisplay("all");
    } else if (e.target.dataset.category === "javascript") {
      setProjectDisplay("javascript");
    } else if (e.target.dataset.category === "html-css") {
      setProjectDisplay("html-css");
    } else if (e.target.dataset.category === "react") {
      setProjectDisplay("react");
    }
  };

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section id="portfolio" className="page-section w-100">
        <div className="container portfolio-container">
          <div className="portfolio-top d-flex align-items-center justify-content-between">
            <div className="portfolio-top--left">
              <h5 className="right-txt">
                <span className="line" />
                Portfolio
              </h5>
            </div>

            <div className="portfolio-top--right">
              <ul
                className="
                filter-projects
                d-flex
                
              "
              >
                {liState.links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      data-category={link.categoryClass}
                      onClick={(e) => {
                        toggleActive(index);
                        sortProjects(e);
                      }}
                      className={
                        liState.activeLink === link
                          ? "project active-project"
                          : ""
                      }
                    >
                      {link.category}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="featured-text--top d-flex">
          <div className="container d-flex justify-content-start align-items-start">
            <h2 className="featured-text">Featured Projects</h2>
          </div>
        </div>
        {/* portfolio projects */}
        <div className="portfolio-projects justify-content-start align-items-start container px-4">
          <div className="row gy-3 gx-3 row-one">
            {projectDisplay === "all"
              ? filterAllProjects
              : projectDisplay === "javascript"
              ? filterJsProjects
              : projectDisplay === "html-css"
              ? filterHtmlProjects
              : projectDisplay === "react"
              ? filterReactProjects
              : ""}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Portfolio;

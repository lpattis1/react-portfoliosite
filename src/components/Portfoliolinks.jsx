import React, { useState } from "react";

const Portfoliolinks = (props) => {
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

  // const sortProjects = (e) => {
  //   console.log(e.target);
  // };

  return (
    <>
      {liState.links.map((link, index) => {
        return (
          <li
            key={index}
            data-category={link.categoryClass}
            onClick={(e) => {
              toggleActive(index);
              // sortProjects(e);
            }}
            className={liState.activeLink === link ? "active-project" : ""}
          >
            {link.category}
          </li>
        );
      })}
    </>
  );
};

export default Portfoliolinks;

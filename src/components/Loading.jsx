import React, { useEffect, useState } from "react";

const Loading = (props) => {
  const [loading, setLoading] = useState(true);
  const [loadbar, setLoadbar] = useState(0);
  const [loadOpacity, setLoadOpacity] = useState(1);
  const [hideLoading, setHideLoading] = useState("block");

  setTimeout(() => {
    const loadingPercent = props.done;
    setLoadbar(loadingPercent);
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
      if (loadbar >= props.done) {
        setLoading(false);
        setLoadOpacity(0);
      }
    }, 1000);
  });

  setTimeout(() => {
    setHideLoading("hidden");
  }, 3000);

  return (
    <div
      style={{ opacity: loadOpacity, transition: "0.4s ease-in-out" }}
      className={
        loading === true
          ? "loading-page loading-page--visible d-flex align-items-center justify-content-center"
          : `loading-page ${hideLoading} d-flex align-items-center justify-content-center`
      }
    >
      <div className="container">
        <img
          src="https://i.gifer.com/4hso.gif"
          alt=""
          className="loading-gif img-fluid"
        />
        <h2 className="loading-text display-3 text-center">Loading...</h2>
        <div className="loading-bar w-50">
          <div
            style={{
              width: `${loadbar}%`,
              transition: "0.8s linear width",
              opacity: loadOpacity,
            }}
            className="load loading-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

import React, { useState } from "react";
import Slidelinks from "./Slidelinks";

const Slidingnav = (props) => {
  return (
    <>
      <div className={props.slidingNavState}>
        <div className="container sliding-contain">{props.children}</div>
      </div>
    </>
  );
};

export default Slidingnav;

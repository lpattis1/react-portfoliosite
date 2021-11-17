import React, { useState } from "react";
import Slidelinks from "./Slidelinks";

const Slidingnav = (props) => {
  return (
    <>
      <div className={props.slidingNavState}>{props.children}</div>
    </>
  );
};

export default Slidingnav;

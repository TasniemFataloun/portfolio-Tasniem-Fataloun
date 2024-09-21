import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <div className={style.book}>
        <div className={style.cover}>
          <h1>Architecture Book</h1>
        </div>
        <div className={style.pages}></div>
      </div>
    </div>
  );
};

export default Landing;

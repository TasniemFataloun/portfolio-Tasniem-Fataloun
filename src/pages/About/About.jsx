import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <section>
      <div class="photo-container">
        <img src="public/man.png" alt="" className={style.photo} />
      </div>
    </section>
  );
};

export default About;

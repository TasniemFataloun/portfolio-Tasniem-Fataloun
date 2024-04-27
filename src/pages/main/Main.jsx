import React, { useEffect, useRef } from "react";
import style from "./Main.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Main = () => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".study",
        {
          x: -180, // initial position along the x-axis
        },
        {
          x: 180, // final position along the x-axis
          duration: 2, // animation duration
          repeat: -1, // repeat indefinitely
          yoyo: true, // reverse the animation
          ease: "power1.inOut", // easing function
        }
      );
    },
    { scope: container }
  );

  return (
    <main ref={container}>
      <h1 className={style.typingAnimation}>HEY, I’m Tasniem Fataloun</h1>
      <div className="study">
        <img src="./assets/magistrate.png" alt="study" />
        <h2>Graphic and digital media - New media development</h2>
      </div>

      <div>
        <h3>
          <a href="project.html">&rarr; see my projects </a>
        </h3>
      </div>
      <br />

      <div>
        <h3>
          <a href="aboutMe.html">&rarr; About me </a>
        </h3>
      </div>
    </main>
  );
};

export default Main;

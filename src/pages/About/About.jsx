import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const photoContainerRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    gsap.from(photoContainerRef.current, {
      duration: 1,
      opacity: 0,
      x: -50,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: photoContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // gsap.to animations
    gsap.to(photoContainerRef.current, {
      duration: 1,
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: photoContainerRef.current,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });
  }, []);

  return (
    <section className={style.aboutSection} id="About">
      <h1>About me</h1>
      <div className={style.photoContainer} ref={photoContainerRef}>
        <img
          className={style.photo}
          ref={photoRef}
          src="aboutPhoto.png"
          alt="Tasniem Fataloun"
        />
        <p>
          I'm Tasniem Fataloun, a student developer with a passion for building
          dynamic web experiences. I enjoy creating intuitive user interfaces
          with React and TypeScript, while also diving into backend development
          using Laravel and PHP. <br /> <br />
          In addition to web development, I have a growing interest in 3D
          modeling using Blender, where I experiment with creating detailed
          models and animations. <br />
          <br /> I love combining my skills to build both functional and
          visually engaging projects. When I'm not coding or designing, I'm
          learning new techniques to push my creativity further. Always curious,
          always evolving.
        </p>
      </div>
    </section>
  );
};

export default About;

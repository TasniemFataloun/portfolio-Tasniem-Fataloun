import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "3D Isometric Room",
    image: "/isoRoom.png",
    description:
      "The project involves creating a 3D isometric room based on personal design preferences. The model is rendered using Three.js, with a focus on both efficiency and visual appeal. Techniques learned in class are applied to develop an interactive 3D room.",
    link: "https://3-d-isometric-room.vercel.app/",
  },
  {
    title: "Clairify",
    image: "/clairify2.png",
    description:
      "Developed a full-stack web application using React (Vite) and Node.js (Express), with TypeScript and MongoDB. Features include registration, login, manual form validation, and secure authentication.",
    link: "https://webshop-clairify-tasniemfataloun-app.onrender.com/",
  },
  {
    title: "Travel Planner",
    image: "/travelPlanner.png",
    description:
      "Created a Single Page Application (SPA) for managing travel plans. Includes user account management, trip management, and expense tracking. Built with Node.js, Express, TypeScript, and MongoDB, with optional map integration.",
    link: "https://mobdev-1-opdracht2-tasniem-fataloun-app.onrender.com/login",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const animateImage = (direction) => {
    gsap.fromTo(
      imageRef.current,
      { y: direction === "next" ? "40%" : "-40%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.9, ease: "power2.out" }
    );
  };

  const animateText = (direction) => {
    gsap.fromTo(
      textRef.current,
      { y: direction === "next" ? "-40%" : "40%", opacity: 0},
      { y: "0%", opacity: 1, duration: 0.9, ease: "power2.out" }
    );
  };

  const changeProject = (direction) => {
    const indexChange = direction === "next" ? 1 : -1;
    const newIndex =
      (currentIndex + indexChange + projects.length) % projects.length;
    setCurrentIndex(newIndex);
    animateImage(direction);
    animateText(direction);
  };

  useEffect(() => {
    
    gsap.fromTo(
      imageRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
    
    gsap.fromTo(
      textRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className={style.project}>
      <h1>Discover my work</h1>
      <div className={style.imageContainer}>
        <img
          ref={imageRef}
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          className={style.projectImage}
        />
        <div ref={textRef} className={style.imageText}>
          <h2>{projects[currentIndex].title}</h2>
          <p className={style.description}>
            {projects[currentIndex].description}
          </p>
          <a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className={style.projectLink}
          >
            View Project
          </a>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <li onClick={() => changeProject("prev")} className={style.button}>
          Prev
        </li>
        <li onClick={() => changeProject("next")} className={style.button}>
          Next
        </li>
      </div>
    </div>
  );
};

export default Project;

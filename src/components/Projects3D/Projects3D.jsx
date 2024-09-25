import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import style from "./Projects3D.module.css";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import DemoComputer from "../DemoComputer/DemoComputer";

const Projects3D = () => {
  const projects = [
    {
      title: "Isometric Room",
      description:
        "The project involves creating a 3D isometric room based on personal design preferences. The model is rendered using Three.js, with a focus on both efficiency and visual appeal. Techniques learned in class are applied to develop an interactive 3D room.",
      image: "/models/texture/isometricRoom.png",
      tags: ["Threejs", "Blender"],
      link: "https://3-d-isometric-room.vercel.app/",
    },
    {
      title: "Clairify",
      description:
        "Developed a full-stack web application using React (Vite) and Node.js (Express), with TypeScript and MongoDB. Features include registration, login, manual form validation, and secure authentication.",
      image: "/models/texture/clairify.png",
      tags: ["Reactjs", "Typescript", "MongoDB"],
      link: "https://webshop-clairify-tasniemfataloun-app.onrender.com/",
    },
    {
      title: "Travel Planner",
      description:
        "Created a Single Page Application (SPA) for managing travel plans. Includes user account management, trip management, and expense tracking. Built with Node.js, Express, TypeScript, and MongoDB, with optional map integration.",
      image: "/models/texture/travelPlanner.png",
      tags: ["Typescript", "MongoDB"],
      link: "https://mobdev-1-opdracht2-tasniem-fataloun-app.onrender.com/login",
    },
    {
      title: "OFFF Festival",
      description:
        "In this project, I attended the OFFF Festival in Barcelona, where I drew inspiration from the talks to create two 3D models using Blender. These models were integrated into a promotional webpage for one of the speakers, designed as if it were part of the official OFFF website. The project included attention to lighting, composition, and a small GSAP animation.",
      image: "OFFF.jpg",
      tags: ["Blender", "Threejs", "GSAP"],
      link: "https://3-d-offf-ehdc1eihf-tasniems-projects.vercel.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectDetailsRef = useRef();
  const rotationRef = useRef();

  const handleNavigation = (direction) => {
    const rotationAmount = direction === "next" ? Math.PI / 3 : -Math.PI / 3;

    // Animate rotation to the right or left
    gsap.to(rotationRef.current.rotation, {
      y: rotationAmount,
      duration: 0.5,
      onComplete: () => {
        // Change project index after rotation
        setCurrentIndex((prevIndex) => {
          const newIndex =
            direction === "next"
              ? (prevIndex + 1) % projects.length
              : (prevIndex - 1 + projects.length) % projects.length;
          return newIndex;
        });

        // Animate back to original position
        gsap.to(rotationRef.current.rotation, {
          y: -Math.PI / 12,
          duration: 0.5,
        });

        // Animate project details back in
        gsap.to(projectDetailsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });
      },
    });

    // Animate project details opacity out
    gsap.to(projectDetailsRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
    });
  };

  const currentProject = projects[currentIndex];

  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
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
      imageRef.current,
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
    <section className={style.projectsSection} id="Projects">
      <div className={style.containerProject}>
        <div className={style.infoProject} ref={textRef}>
          <h1>Discover my work</h1>
          <div ref={projectDetailsRef} className={style.projectDetails}>
            <h2>{currentProject.title}</h2>
            <br />
            <p>{currentProject.description}</p>
            <br />
            <i>
              <a href={currentProject.link} className={style.link}>
                View project
              </a>
            </i>
            <br />
            <br />
            <ul className={style.tagsList}>
              {currentProject.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <br />
            <br />
            <div className={style.navigation}>
              <p
                className={style.arrow}
                onClick={() => handleNavigation("previous")}
              >
                &larr;
              </p>
              <p
                className={style.arrow}
                onClick={() => handleNavigation("next")}
              >
                &rarr;
              </p>
            </div>
          </div>
        </div>

        <div className={style.containerCanvas} ref={imageRef}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={6} />
            <Center>
              <group
                ref={rotationRef}
                scale={0.87}
                position={[5, 5, 2.8]}
                rotation={[0, -Math.PI / 12, 0]}
              >
                <DemoComputer texture={currentProject.image} />
              </group>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects3D;

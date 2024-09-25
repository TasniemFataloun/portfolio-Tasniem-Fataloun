import React, { useState, useEffect, useRef } from "react";
import style from "./IdeeTwee.module.css";
import { Typewriter } from "react-simple-typewriter";
import Nav from "../../components/Sidebar/Nav";
import gsap from "gsap";

const IdeeTwee = () => {
  const descriptionRef = useRef(null);
  const typewriterTimerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const typewriterGsapTimer = setTimeout(() => {
      gsap.fromTo(
        typewriterTimerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.inOut" }
      );
    }, 2000);


    const gsapTimer = setTimeout(() => {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.inOut" }
      );
    }, 1000);


    return () => {
      clearTimeout(revealTimer);
      clearTimeout(gsapTimer);
      clearTimeout(typewriterGsapTimer);
    };
  }, []);

  return (
    <main className={style.mainContainer}>
      <Nav />
      <section className={style.firstSection}>
        <div className={style.flex}>
          <div className={`${style.text} ${isVisible ? "" : style.hidden}`}>
            <h1>Hi! I'm Tasniem Fataloun</h1>
            <br /> <br />
            <h2 className={style.typewriter} ref={typewriterTimerRef}>
              <Typewriter
                words={[
                  "Front-end developer",
                  "Backend developer",
                  "Full stack developer",
                  "UX/UI designer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={4000}
              />
             
            </h2>
            <br />
            <br />
            <h3 ref={descriptionRef} className={style.description}>
              An enthusiastic developer constantly seeking to stay updated on
              the latest technologies.
            </h3>
            <br />
            <br />
            <a className={style.cv} href="/cv/cvTasniem.pdf" download>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IdeeTwee;

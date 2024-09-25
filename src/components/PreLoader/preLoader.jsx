import { useEffect } from "react";
import gsap from "gsap";
import styles from './Preloader.module.css'; // Import the CSS module

const Preloader = ({ onLoadingComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("body", { overflow: "hidden" })
      .to(`.${styles.textContainer}`, { duration: 0, opacity: 1, ease: "Power3.easeOut" })
      .from(`.${styles.textContainer} h1`, {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut"
      })
      .to(`.${styles.textContainer} h1`, {
        duration: 1.2,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut"
      })
      .to(".preloader", {
        duration: 1.5,
        scale: 1.1, // Slightly expand the preloader
        ease: "Power3.easeOut"
      })
      .to(".preloader", {
        duration: 1.5,
        height: "0vh", // Shrink the height
        ease: "Power3.easeOut"
      })
      .to("body", { overflow: "auto" }, "-=2")
      .to(".preloader", { display: "none", onComplete: onLoadingComplete });

    return () => {
      tl.kill(); // Cleanup the timeline on unmount
    };
  }, [onLoadingComplete]);

  return (
    <div className={styles.preloader}>
      <div className={styles.textContainer}>
        <h1>GSAP</h1>
        <h1>Preloader</h1>
        <h1>Animation</h1>
      </div>
    </div>
  );
};

export default Preloader;

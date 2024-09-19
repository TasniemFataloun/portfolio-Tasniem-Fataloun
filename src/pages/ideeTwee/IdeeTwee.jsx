import React from "react";
import style from "./IdeeTwee.module.css";
import { Typewriter } from "react-simple-typewriter";
import Nav from "../../components/Sidebar/Nav";

const IdeeTwee = () => {
  return (
    <main className={style.mainContainer}>
    
      <Nav />

      <section className={style.firstSection}>
        <div className={style.flex}>
          <div className={style.text}>
            <h1>Hi! I'm Tasniem Fataloun</h1>
            <h1 className={style.typewriter}>
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
                delaySpeed={1000}
              />
            </h1>
            <p>
              An enthusiastic developer constantly seeking to stay updated on
              the latest technologies.
            </p>
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

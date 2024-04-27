import React from "react";
import style from "./IdeeTwee.module.css";

const IdeeTwee = () => {
  return (
    <main>
      <section className={style.firstSection}>
        <div className={style.flex}>
          <div className={style.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum, odio ac tincidunt feugiat, nunc ipsum fermentum est,
              nec aliquet nunc nunc in metus. Nulla facilisi. Sed eget nunc
              vitae nunc tincidunt feugiat. Nunc in metus. Nulla facilisi. Sed
              eget nunc vitae nunc tincidunt feugiat.
            </p>
          </div>

          <div className={style.image}></div>
        </div>
      </section>
    </main>
  );
};

export default IdeeTwee;

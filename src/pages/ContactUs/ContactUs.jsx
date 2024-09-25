import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactUs.module.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t51bajf", "template_u8x22ih", form.current, {
        publicKey: "50ucH5pROPvCdmD3F",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    //clear input fields after submit
    e.target.reset();
  };

  return (
      <section className={style.contactContainer} id="Contact">
        <div className={style.containerTitleForm}>
          <div className={style.titleContact}>
            <img src="/email.png" alt="email" className={style.emailIcon} />
            <h1>Get in touch!</h1>
          </div>
          <form ref={form} onSubmit={sendEmail} className={style.formContainer}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input
              type="submit"
              value="Send message"
              className={style.button}
            />
          </form>
        </div>

        <div className={style.extraInfo}>
          <a href="https://github.com/TasniemFataloun">
            <div className={style.info}>
              <img
                src="github.png"
                alt="github"
                className={style.iconContact}
              />
              <p>TasniemFataloun</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tasniem-fataloun-913389247/">
            <div className={style.info}>
              <img src="email.png" alt="email" className={style.iconContact} />
              <p>tasniemfa98@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tasniem-fataloun-913389247/">
            <div className={style.info}>
              <img
                src="linkedIn.png"
                alt="linkedIn"
                className={style.iconContact}
              />
              <p>Tasniem Fataloun</p>
            </div>
          </a>
        </div>
      </section>

  );
};

export default ContactUs;

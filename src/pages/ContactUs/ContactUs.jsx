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
    <div className={style.contactContainer} id="Contact">
      <h1>Contact me!</h1>
    <div className={style.formContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
    </div>
  );
};

export default ContactUs;

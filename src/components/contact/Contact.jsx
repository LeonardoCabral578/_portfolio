import React from "react";
import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yiqwv8h",
        "template_287bllo",
        form.current,
        "SgINCuHL32YnG0s8A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Consíguelo en un click</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leo.cabral1016@gmail.com</h5>
            <a href="mailto:leo.cabral1016@gmail.com" target="_blank">
              Envía un mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Leonardo Cabral</h5>
            <a
              href="https://m.me/profile.php?id=100057384406723"
              target="_blank"
            >
              Envía un mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+54-3624-755169</h5>
            <a href="https://wa.me/+543624755169" target="_blank">
              Envía un mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre Completo"
            required
          />
          <input type="email" name="email" placeholder="Tu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

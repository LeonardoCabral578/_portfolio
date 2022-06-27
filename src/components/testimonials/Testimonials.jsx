import React from "react";
import "./testimonials.scss";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reseñas de clientes</h5>
      <h2>Testimonios</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae at laboriosam odio, mollitia amet blanditiis autem quos
            cum nemo dolores architecto, quisquam accusantium ipsa perspiciatis
            cupiditate. Eos, exercitationem iste. Fugiat!
          </small>
        </article>
      </div>
    </section>
  );
};

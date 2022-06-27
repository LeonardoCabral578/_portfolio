import React from "react";
import "./services.scss";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué ofrezco?</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño UX/UI</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño del sitio 100% a tu gusto.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Plantillas ya diseñadas, o 100% personalizadas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Estilos modernos y únicos.</p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Uso de las tecnologías más confiables del mercado.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollo de páginas totalmente escalables.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Producto final completo y prolijo.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Mantenimiento</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hosting del sitio estable (Hostinger).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Seguimiento continuo del proyecto, atento a cualquier fallo.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Modificaciones del sitio moderadas a tu gusto, a cualquier hora.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

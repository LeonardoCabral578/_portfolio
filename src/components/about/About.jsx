import React from "react";
import "./about.scss";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Conóceme</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>2+ Años de Desarrollo</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Cursos</h5>
              <small>20+ Cursos realizados</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>+15 Completados</small>
            </article>
          </div>

          <p>
            Estoy buscando oportunidades para poder desempeñarme como
            desarrollador web en posiciones de front end o de back end. Me
            encuentro muy motivado en seguir aprendiendo todos los días, por lo
            que me mantengo haciendo cursos, capacitaciones, bootcamps y
            proyectos personales.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className="footer__logo">
          Leonardo
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="about">Sobre mi</a>
          </li>
          <li>
            <a href="experience">Experiencia</a>
          </li>
          <li>
            <a href="services">Servicios</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contacto</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/leonardo-mart%C3%ADn-cabral-7784301b3/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/LeonardoCabral578"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100057384406723"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Leonardo Cabral. Todos los derechos reservados</small>
        </div>
      </footer>
    </div>
  );
};

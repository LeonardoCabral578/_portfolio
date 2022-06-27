import React from "react";
import "./header.scss";
import { CTA } from "./CTA";
import ME from "../../assets/me.jpg";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola yo soy</h5>
        <h1>Leonardo Cabral</h1>
        <h5 className="text-light">Desarrollador Fullstack</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

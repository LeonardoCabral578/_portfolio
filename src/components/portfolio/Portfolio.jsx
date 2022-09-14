import React from "react";
import "./portfolio.scss";

const data = [
  {
    image: "https://i.gyazo.com/e337122afb4ee954a2fce4f1cd296464.png",
    title: "e-Commerce - Tu Gusto Gourmet (Versión de prueba) (React, Express)",
    github: "https://github.com/LeonardoCabral578/tugustogourmet",
    demo: "http://tugustogourmet.com.ar/",
  },
  {
    image: "https://i.gyazo.com/292ad7f12e82badcee50fdddcace62cd.jpg",
    title: "EЯR∅N34~MƎNTĘ (React)",
    github: "",
    demo: "http://erroneamente.com.ar/",
  },
  {
    image: "https://i.gyazo.com/f6899ffc7b8461eee5226dc1ea52e3ad.png",
    title: "MERN Tasks (Stack MERN)",
    github: "https://github.com/LeonardoCabral578/mern-tasks",
    demo: "",
  },
  {
    image: "https://i.gyazo.com/056f4c6b00776e151ab978019a7018a7.png",
    title: "Larafoto (Laravel)",
    github: "https://github.com/LeonardoCabral578/larafoto-laravel.mysql",
    demo: "",
  },
  {
    image: "https://i.gyazo.com/c48d7addb9b51a31b8bf8952e3b92dc2.png",
    title: "Tienda de Camisetas (PHP)",
    github: "https://github.com/LeonardoCabral578/shop-php.mysql",
    demo: "",
  },
  {
    image: "https://i.gyazo.com/676685e9da220aa26b73e73edd098f04.png",
    title: "Blog (HTML, CSS y PHP)",
    github: "https://github.com/LeonardoCabral578/blog-php.mysql",
    demo: "",
  },
  {
    image: "https://i.gyazo.com/f18b3945c94b98ced03e582e3ee07af6.png",
    title: "Formulario de encuesta (HTML Y CSS)",
    github: "https://codepen.io/leonardocabral578/full/BaQqqdV",
    demo: "https://codepen.io/leonardocabral578/full/BaQqqdV",
  },
  {
    image: "https://i.gyazo.com/98202d619b2b52c62ef6b319d2fcf72b.png",
    title: "Aterrizaje de producto (HTML Y CSS)",
    github: "https://codepen.io/leonardocabral578/full/dyOQOrz",
    demo: "https://codepen.io/leonardocabral578/full/dyOQOrz",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github != "" ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : (
                  ""
                )}

                {demo != "" ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

import React from "react";
import imgOne from "../../imgs/nublada.png";
import imgtwo from "../../imgs/panelfb.png";

const Content = () => {
  return (
    <div>
      <div className="Content-first">
        <section className="Content-about">
          <img src={imgOne} alt="image one" />
          <div className="video-wrapper">
            <h3>sobre gift solar</h3>
            <div className="video-container">
              <p>
                En Gift Solar hemos trabajado duro para construir una cultura
                solidaria basada en el equipo que inspire a nuestros empleados a
                apoyar el crecimiento a corto y largo plazo de nuestros socios y
                distribuidores. La energía solar cambia constantemente y estamos
                comprometidos a evolucionar con la industria. Motivamos a
                nuestros empleados a no solo sobresalir en sus departamentos en
                la empresa, sino a buscar nuevas formas de avanzar en su rama.
              </p>
              <a href="#">leer mas</a>
            </div>
          </div>
        </section>
      </div>
      <div className="Content-second">
        <section className="Content-why">
          <div className="description-wrapper">
            <h3>porque solar panel</h3>
            <div className="whyus-container">
              <p>
                Gift Solar se asocia con empresas y distribuidores de energía
                solar con ideas afines para ofrecer una instalación de calidad
                con los más altos estándares en la industria de la mejor
                tecnología solar. Gift Solar como subcontratista, puede estar
                seguro de que estamos igualmente comprometidos a garantizar que
                cada uno de los clientes esté entusiasmado con su decisión de
                adoptar la energía solar. También estamos buscando formas únicas
                de ayudar en nuestras comunidades y marcar una diferencia.
                {/**
                        ¿TIENES SUMINISTROS PARA DONAR? Visite GetUsPPE.org para
                encontrar sitios locales de donaciones en 41 estados, o visite
                el sitio web de su departamento local de salud para averiguar
                qué se necesita y cómo puede ayudar.
               */}
              </p>
              <a href="#">leer mas</a>
            </div>
          </div>

          <img src={imgtwo} alt="image one" />
        </section>
      </div>
    </div>
  );
};

export default Content;

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
      <div className="Content-third">
        <section className="Content-us">
          <div className="package-us">
            <h3>compromiso de gift solar</h3>
            <p>
              <span>Nuestra mision: </span> facilitar el cambio de nuestro medio
              ambiente por medio de la energia renovable,{" "}
              <span>Nuestra vision: </span>
              desarrollar una empresa a nivel nacional, que facilite el
              desarrollo de la industria de la energia renovable.{" "}
              <span>Nuestro compromiso:</span> brindarle un producto y servicio
              de calidad de la misma forma ayudarle a ahorrar dinero y mantener
              habitable nuestro planeta tierra. <span>Nuestros valores: </span>
              Honestidad es nuestro compromiso asi como actuar con la verdad
              para generar un entorno mas favorable interno y externo para
              desarrollar el trabajo y cumplir los objetivos de la empresa.
            </p>
          </div>
        </section>
      </div>
      <div className="Content-forth">
        <section className="Content-packages">
          <h3>paquetes</h3>
          <div className="Content-inner-wrapper">
            <div className="premium share">
              <h3>premium</h3>
              <p className="subtitle">Mi salud es lo primero</p>
              <ol>
                <li>Sistema de paneles solares</li>
                <li>
                  Sistema purificadora de agua para toda la casa y un sistema de
                  agua alkalina instalado debajo del sink de su cocina
                </li>
                <li>Primeros 12 mensualidades pagadas por adelantado</li>
                <li>Y si calificas obtendrás un préstamo personal </li>
                <li>Mas el incentivo empresarial </li>
              </ol>
            </div>
            <div className="plus share">
              <h3>plus</h3>
              <p className="subtitle">Mi ayuda justo a tiempo</p>

              <ol>
                <li>Sistema de paneles solares</li>
                <li>Primeros 12 mensualidades pagadas por adelantado</li>
                <li>Y si calificas obtendrás un préstamo personal </li>
                <li>Mas el incentivo empresarial </li>
              </ol>
            </div>
            <div className="basic share">
              <h3>basico</h3>
              <p className="subtitle">Mis incentivos en camino</p>
              <ol>
                <li>Sistema de paneles solares</li>
                <li>Y si calificas obtendrás un préstamo personal </li>
                <li>Mas el incentivo empresarial </li>
              </ol>
            </div>
          </div>
          <div className="terminos">
            <p className="title">los terminos de planes son los siguientes</p>
            <p>10 anos, 12 anos, 20 anos, 25 anos empezando al 2.99 APR</p>
            <button>click aqui para generar mi propuesta</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;

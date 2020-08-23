import React from "react";
import imgAbout from "../../../imgs/buscard.png";

const AboutContent = () => {
  return (
    <div className="AboutContent">
      <div className="AboutContent-first">
        <section className="AboutContent-about">
          <div className="img-wrapper">
            <img src={imgAbout} alt="image one" />
          </div>

          <div className="video-wrapper">
            <h3>mensage</h3>
            <div className="video-container">
              <span>Diana Montoya, CEO</span>
              <p>
                “En Gift Solar se tomaron muchas medidas, después de trabajar
                para varias compañías que simplemente hicieron las cosas mal. Si
                algo no funciona, se debe intentar una vez más con
                responsabilidad y compromiso una vez más. Entonces aprendimos de
                nuestros errores y no permitimos que nos impidieran hacer algo
                diferente, algo real con honestidad y viable para nuestra
                comunidad. Gift Solar no se trata de reuniones de negocios en la
                sala de juntas, pensamos en resultados excelentes en la
                transición a la energía solar que necesitamos lograr, y luego
                descubrimos cómo equipo que podemos lograrlo. En Gift Solar se
                trata de motivar a nuestros empleados a convertirse en líderes.
                Los impulsamos a luchar por un mayor rendimiento, tanto dentro
                como fuera de la oficina. Ya sea una meta personal o una meta
                grupal. Mis guías y yo queremos asegurarnos de que cada miembro
                de la familia Gift Solar tenga el poder de obtener resultados
                satisfactorios en crecer a la familia Gift Solar juntamente con
                nuestros clientes".
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="AboutContent-second">
        <section className="AboutContent-why">
          <div className="description-wrapper">
            <h3>PROGRAMA DE AYUDA FINANCIERA</h3>
            <div className="whyus-container">
              <p>
                Estamos enfocados en la transición energética para que se logre
                lo más rápido posible y sin riesgos de salud para nuestra
                comunidad. Gift Solar a creado un INCENTIVO EMPRESARIAL para
                todo aquel que le es requerido cambiarse a energía renovable,
                sin tener que depender de un vendedor
                {/**
                        ¿TIENES SUMINISTROS PARA DONAR? Visite GetUsPPE.org para
                encontrar sitios locales de donaciones en 41 estados, o visite
                el sitio web de su departamento local de salud para averiguar
                qué se necesita y cómo puede ayudar.
               */}
              </p>
            </div>
          </div>
          <div className="finance-help">
            <p>
              En estos tiempos todo cuidado es poco, pero estamos comprometidos
              a darle batalla al cambio climático mundial, así que es nuestro
              compromiso no cerrar nuestras puertas para hacer cumplir el
              proyecto de ley en USA, en la transición de las energías
              renovables y no perder los grandes beneficios de los incentivos
              federales que todo propietario tiene el derecho de obtener. Por lo
              tanto, hemos creado un excelente y muy a favor de nuestra
              comunidad, un programa de ayuda financiera, Hemos creado “EL
              INCENTIVO EMPRESARIAL” por la situación en la que nos encontramos
              a causa del COVID-19 y por tiempo indefinido, nuestro equipo de
              ventas no saldrá a tocar puertas o prospectar en lugares públicos,
              para una seguridad mutua, solo estarán atendiendo ventas por
              internet o teléfono, porque su salud en estos momentos es nuestra
              prioridad.{" "}
            </p>
          </div>
        </section>
      </div>
      <div className="Content-third">
        <section className="Content-us">
          <div className="package-us">
            <h3>COMO ME VOY A BENEFICIAR DEL INCENTIVO EMPRESARIAL?</h3>
            <p>
              Dependiendo del tamaño de tu sistema de paneles solares será tu
              incentivo empresarial, por ejemplo: Si el tamaño de tu sistema es
              de 5.8, tu incentivo será de $2,900. ¿En base a que se saca la
              cantidad de tu incentivo? Multiplica el tamaño de tu sistema por
              $500 5.8 X $500= $2,900 Lógicamente entre más grande el sistema el
              incentivo será mayor.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;

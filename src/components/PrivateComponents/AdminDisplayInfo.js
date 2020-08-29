import React from "react";
import example from "../../imgs/header1.jpg";

const AdminDisplayInfo = () => {
  return (
    <section className="AdminDisplayInfo">
      <h2>resultados</h2>
      <div className="inner-wrapper">
        <div className="user-info">
          <h3>informacion de los propietarios</h3>
          <p className="package-type">
            Typo de paquete: <span>premium</span>
          </p>
          <div className="personNumOne">
            <p>
              1. Nombre: <span>nombre 1</span>
            </p>
            <p>
              Tel: <span>434 4343 434</span>
            </p>
            <p>
              Declara impuestos: <span>si</span>
            </p>
            <p>
              Correo electronico <span>example@gmail.com</span>
            </p>
          </div>
          <div className="personNumTwo">
            <p>
              2. Nombre: <span>nombre 2</span>
            </p>
            <p>
              Tel: <span>434 4343 434</span>
            </p>
            <p>
              Declara impuestos: <span>si</span>
            </p>
            <p>
              Correo electronico <span>example@gmail.com</span>
            </p>
          </div>

          <div className="address">
            <p>
              Direccion: <span>example de direction</span>
            </p>
            <p>
              Estado: <span>las vegas</span>
            </p>
            <p>
              Codigo postal: <span>93832</span>
            </p>
          </div>
        </div>
        <div className="property-info">
          <h3>informacion de la propiedad</h3>
          <p>
            Año construida: <span>2022</span>
          </p>
          <p>
            Pies cuadrados: <span>345</span>
          </p>
          <p>
            Cuantos pisos: <span>3</span>
          </p>

          <p>
            Tipo de construccion: <span>condominio</span>
          </p>
          <p>
            Tipo de techo: <span>teja</span>
          </p>
          <p>
            Condicion del techo: <span>exelente</span>
          </p>
          <p>
            Sombreado del techo: <span>Nada</span>
          </p>
          <p>
            Tiene alberca: <span>no</span>
          </p>
          <p>
            GATE: Contraseña de entrada <span>3435</span>
          </p>
          <p>
            HOA: <span>no</span>
          </p>
          <p>
            HOA info: <span>this is an example of this</span>
          </p>
          <p>
            HOA tel: <span>834 4839 3453</span>
          </p>
        </div>

        <div className="power-infor-equipment">
          <p>
            El panel electrico esta cerrado: <span>no</span>
          </p>
          <p>
            En caso que el panel eléctrico este cercado, en breves palabras
            explique en que parte de la casa esta ubicado:{" "}
            <span>this is the anwer for this question</span>
          </p>
          <p>
            Tamaño del panel eléctrico: <span>3cm</span>
          </p>
        </div>
        <div className="ac-info">
          <p>
            Cuantos aires acondicionados: <span>1</span>
          </p>
          <p>
            Cuantos calentones: <span>1</span>
          </p>
          <p>
            Tipo de calentador de agua: <span>gas</span>
          </p>
          <p>
            Tiene sistema solar existente para calentar el agua: <span>si</span>
          </p>
        </div>
        <div className="power-acc">
          <p>
            Numero de cuenta de NV Energy <span>35534534534535354535435</span>
          </p>
        </div>
        <div className="anual-power-info">
          <h3>Consumo anual de kilowatts y el costo de mes tras mes</h3>
          <div className="months">
            <p>Enero:</p>
            <p>
              Kilowatts: <span>3435</span>
            </p>
            <p>
              Costo: <span>345</span>
            </p>
          </div>
          <div className="months">
            <p>Febrero:</p>
            <p>
              Kilowatts: <span>3435</span>
            </p>
            <p>
              Costo: <span>345</span>
            </p>
          </div>
        </div>

        <div className="imgs">
          <img src={example} alt="imagenes de informacion de luz" />
        </div>

        <div className="pdf">
          <a href="#">pdf</a>
        </div>
      </div>
    </section>
  );
};

export default AdminDisplayInfo;

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ModalForm">
      <button className="button" onClick={() => setOpen(true)}>
        click aqui para generar mi propuesta
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className="form">
          <h3 className="form-title">quiero applicar para el paquete:</h3>
          <div className="types">
            <label htmlFor="premium">
              premium
              <input type="checkbox" name="premium" id="premium" />
            </label>
            <label htmlFor="plus">
              plus
              <input type="checkbox" name="plus" id="plus" />
            </label>{" "}
            <label htmlFor="basico">
              basico
              <input type="checkbox" name="basico" id="basico" />
            </label>
          </div>

          <div className="subtitle">
            <h3>evaluacion recidencial</h3>
            <p>Favor de responder todas las preguntas sin omitir ninguna</p>
            <div className="user-info">
              <h3>informacion de los propietarios</h3>
              {/***************** START OF USER FIELDS *********************/}
              {/** first user */}
              <label htmlFor="first-name" className="nombre">
                1. Nombre:
                <input type="text" id="first-name" name="first-name" />
              </label>
              <div className="phone-info">
                <label htmlFor="first-phone" className="phone">
                  Tel:
                  <input type="number" name="first-phone" id="first-phone" />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="first-yes">
                    <input type="checkbox" name="first-yes" id="first-yes" />
                    Si
                  </label>
                  <label htmlFor="first-no">
                    <input type="checkbox" name="first-no" id="first-no" />
                    No
                  </label>
                </div>
              </div>
              {/** email */}
              <label htmlFor="first-email" className="email">
                Correo electronico:
                <input type="email" name="first-email" id="first-email" />
              </label>
              {/** second user */}

              <label htmlFor="second-name" className="nombre">
                1. Nombre:
                <input type="text" id="second-name" name="second-name" />
              </label>
              <div className="phone-info">
                <label htmlFor="second-phone" className="phone">
                  Tel:
                  <input type="number" name="second-phone" id="second-phone" />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="second-yes">
                    <input type="checkbox" name="second-yes" id="second-yes" />
                    Si
                  </label>
                  <label htmlFor="second-no">
                    <input type="checkbox" name="second-no" id="second-no" />
                    No
                  </label>
                </div>
              </div>
              <label htmlFor="second-email" className="email">
                Correo electronico:
                <input type="email" name="second-email" id="second-email" />
              </label>
              {/** end of second user */}
              <label htmlFor="address" className="address1">
                Direccion:
                <input type="text" name="address" id="address" />
              </label>
              <div className="address">
                <label htmlFor="city" className="city">
                  Ciudad:
                  <input type="text" name="city" id="city" />
                </label>
                <label htmlFor="state" className="state">
                  Estado:
                  <input type="text" name="state" id="state" />
                </label>
                <label htmlFor="zipcode" className="zipcode">
                  Codigo Postal:
                  <input type="text" name="zipcode" id="zipcode" />
                </label>
              </div>
            </div>
          </div>
          {/***************** END OF USER FIELDS *********************/}
          {/***************** START OF PROPERTY INORMATION *********************/}
          <div className="property-info">
            <h3>informacion de la propiedad</h3>
            {/********* year, sqr foot and total floors *********/}
            <div className="house">
              <label htmlFor="year">
                Ano construida:
                <input type="text" name="year" id="year" />
              </label>
              <label htmlFor="sqrFoot">
                Pies cuadrados:
                <input type="text" name="sqrFoot" id="sqrFoot" />
              </label>{" "}
              <label htmlFor="totalFloors">
                Cuantos pisos:
                <input type="text" name="totalFloors" id="totalFloors" />
              </label>
            </div>
            {/********* end of year, sqr foot and total floors *********/}
            <div className="construction-type">
              <div className="year-built">
                <span>Tipo de construccion:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="residence">
                    <input type="checkbox" name="residence" id="residence" />
                    Residencia familiar
                  </label>
                  <label htmlFor="town-house">
                    <input type="checkbox" name="town-house" id="town-house" />
                    Town house
                  </label>{" "}
                  <label htmlFor="condominio">
                    <input type="checkbox" name="condominio" id="condominio" />
                    Condominio
                  </label>
                  <label htmlFor="mobile-home">
                    <input
                      type="checkbox"
                      name="mobile-home"
                      id="mobile-home"
                    />
                    Mobile house
                  </label>
                </div>
              </div>
            </div>
            {/********* end of construction type *********/}
            <div className="ceiling-type">
              <div className="year-built">
                <span>Tipo de techo:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="shingle">
                    <input type="checkbox" name="shingle" id="shingle" />
                    Shingle
                  </label>
                  <label htmlFor="teja">
                    <input type="checkbox" name="teja" id="teja" />
                    Teja
                  </label>{" "}
                  <label htmlFor="barro">
                    <input type="checkbox" name="barro" id="barro" />
                    Barro
                  </label>
                  <label htmlFor="madera">
                    <input type="checkbox" name="madera" id="madera" />
                    Madera
                  </label>
                  <label htmlFor="plano">
                    <input type="checkbox" name="plano" id="plano" />
                    Plano
                  </label>
                </div>
              </div>
            </div>
            {/********* end of ceiling type *********/}
            <div className="ceiling-condition">
              <div className="year-built">
                <span>Condicion del techo:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="exelente">
                    <input type="checkbox" name="exelente" id="exelente" />
                    Exelente
                  </label>
                  <label htmlFor="bueno">
                    <input type="checkbox" name="bueno" id="bueno" />
                    Bueno
                  </label>{" "}
                  <label htmlFor="pasable">
                    <input type="checkbox" name="pasable" id="pasable" />
                    Pasable
                  </label>
                  <label htmlFor="viejo">
                    <input type="checkbox" name="viejo" id="viejo" />
                    Viejo
                  </label>
                </div>
              </div>
            </div>
            {/********* end of condition type *********/}
            <div className="sombreado-techo">
              <div className="year-built">
                <span>Sombreado de techo:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="nada">
                    <input type="checkbox" name="nada" id="nada" />
                    Nada
                  </label>
                  <label htmlFor="poco">
                    <input type="checkbox" name="poco" id="poco" />
                    Poco
                  </label>{" "}
                  <label htmlFor="mucho">
                    <input type="checkbox" name="mucho" id="mucho" />
                    Mucho
                  </label>
                </div>
              </div>
            </div>
            {/********* end of sombreado de techo *********/}
            <div className="pool">
              <div className="year-built">
                <span>Tiene alberca?:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="withPool">
                    <input type="checkbox" name="withPool" id="withPool" />
                    Si
                  </label>
                  <label htmlFor="noPool">
                    <input type="checkbox" name="noPool" id="noPool" />
                    No
                  </label>
                </div>
              </div>
            </div>
            {/********* end of contains pool? *********/}
            <div className="gate">
              <span>Gate: contrasena entrada</span>
              <label htmlFor="gate-number">
                <input type="text" id="gate-number" name="gate-number" />
                (se require para hacer el site-survey)
              </label>
            </div>
            {/********* end of gate *********/}
            <div className="HOA">
              <span>HOA:</span>
              <label htmlFor="yes-hoa" className="yes-hoa">
                <input type="checkbox" name="yes-hoa" id="yes-hoa" />
                Si
              </label>
              <label htmlFor="no-hoa" className="yes-hoa">
                <input type="checkbox" name="no-hoa" id="no-hoa" />
                No
              </label>
              <label htmlFor="hoa-info" className="important hoa-info">
                HOA INFO:
                <input type="text" name="hoa-info" id="hoa-info" />
              </label>
              <label htmlFor="hoa-phone" className="important">
                Tel:
                <input type="number" name="hoa-phone" id="hoa-phone" />
              </label>
            </div>
          </div>
          {/********* end of HOA *********/}

          <div className="update-file">
            <label htmlFor="pdf">
              <input type="file" name="pdf" id="pdf" />
            </label>
          </div>
          <button>enviar</button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;

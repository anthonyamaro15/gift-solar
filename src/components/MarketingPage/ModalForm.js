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
              <label htmlFor="name" className="nombre">
                1. Nombre:
                <input type="text" id="name" name="name" />
              </label>
              <div className="phone-info">
                <label htmlFor="phone" className="phone">
                  Tel:
                  <input type="number" name="phone" id="phone" />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="yes">
                    <input type="checkbox" name="yes" id="yes" />
                    Si
                  </label>
                  <label htmlFor="no">
                    <input type="checkbox" name="no" id="no" />
                    No
                  </label>
                </div>
              </div>
              {/** email */}
              <label htmlFor="email" className="email">
                Correo electronico:
                <input type="email" name="email" id="email" />
              </label>
              {/** second user */}

              <label htmlFor="name" className="nombre">
                1. Nombre:
                <input type="text" id="name" name="name" />
              </label>
              <div className="phone-info">
                <label htmlFor="phone" className="phone">
                  Tel:
                  <input type="number" name="phone" id="phone" />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="yes">
                    <input type="checkbox" name="yes" id="yes" />
                    Si
                  </label>
                  <label htmlFor="no">
                    <input type="checkbox" name="no" id="no" />
                    No
                  </label>
                </div>
              </div>
              <label htmlFor="email" className="email">
                Correo electronico:
                <input type="email" name="email" id="email" />
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
          <button>enviar</button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;

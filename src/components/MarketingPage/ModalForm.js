import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log("values here ", values);
    reset();
  };
  return (
    <div className="ModalForm">
      <button className="button" onClick={() => setOpen(true)}>
        click aqui para generar mi propuesta
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">quiero applicar para el paquete:</h3>
          <div className="types">
            <label htmlFor="premium">
              premium
              <input
                type="checkbox"
                name="package-premium"
                id="premium"
                ref={register}
              />
            </label>
            <label htmlFor="plus">
              plus
              <input
                type="checkbox"
                name="package-plus"
                id="plus"
                ref={register}
              />
            </label>{" "}
            <label htmlFor="basico">
              basico
              <input
                type="checkbox"
                name="package-basico"
                id="basico"
                ref={register}
              />
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
                <input
                  type="text"
                  id="first-name"
                  name="first-person-name"
                  ref={register}
                />
              </label>
              <div className="phone-info">
                <label htmlFor="first-phone" className="phone">
                  Tel:
                  <input
                    type="number"
                    name="first-person-number"
                    id="first-phone"
                    ref={register}
                  />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="first-yes">
                    <input
                      type="checkbox"
                      name="first-person-do-taxes"
                      id="first-yes"
                      ref={register}
                    />
                    Si
                  </label>
                  <label htmlFor="first-no">
                    <input
                      type="checkbox"
                      name="first-person-dont-do-taxes"
                      id="first-no"
                      ref={register}
                    />
                    No
                  </label>
                </div>
              </div>
              {/** email */}
              <label htmlFor="first-email" className="email">
                Correo electronico:
                <input
                  type="email"
                  name="first-person-email"
                  id="first-email"
                  ref={register}
                />
              </label>
              {/** second user */}

              <label htmlFor="second-name" className="nombre">
                1. Nombre:
                <input
                  type="text"
                  id="second-person-name"
                  name="second-name"
                  ref={register}
                />
              </label>
              <div className="phone-info">
                <label htmlFor="second-phone" className="phone">
                  Tel:
                  <input
                    type="number"
                    name="second-person-number"
                    id="second-phone"
                    ref={register}
                  />
                </label>
                <div className="taxes">
                  <span>Declara Impuestos?</span>
                  <label htmlFor="second-yes">
                    <input
                      type="checkbox"
                      name="second-person-do-taxes"
                      id="second-yes"
                      ref={register}
                    />
                    Si
                  </label>
                  <label htmlFor="second-no">
                    <input
                      type="checkbox"
                      name="second-person-dont-do-taxes"
                      id="second-no"
                      ref={register}
                    />
                    No
                  </label>
                </div>
              </div>
              <label htmlFor="second-email" className="email">
                Correo electronico:
                <input
                  type="email"
                  name="second-person-email"
                  id="second-email"
                  ref={register}
                />
              </label>
              {/** end of second user */}
              <label htmlFor="address" className="address1">
                Direccion:
                <input type="text" name="address" id="address" ref={register} />
              </label>
              <div className="address">
                <label htmlFor="city" className="city">
                  Ciudad:
                  <input type="text" name="city" id="city" ref={register} />
                </label>
                <label htmlFor="state" className="state">
                  Estado:
                  <input type="text" name="state" id="state" ref={register} />
                </label>
                <label htmlFor="zipcode" className="zipcode">
                  Codigo Postal:
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    ref={register}
                  />
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
                <input
                  type="text"
                  name="house-year-built"
                  id="year"
                  ref={register}
                />
              </label>
              <label htmlFor="sqrFoot">
                Pies cuadrados:
                <input
                  type="text"
                  name="house-sqrFoot"
                  id="sqrFoot"
                  ref={register}
                />
              </label>{" "}
              <label htmlFor="totalFloors">
                Cuantos pisos:
                <input
                  type="text"
                  name="house-total-floors"
                  id="totalFloors"
                  ref={register}
                />
              </label>
            </div>
            {/********* end of year, sqr foot and total floors *********/}
            <div className="construction-type">
              <div className="year-built">
                <span>Tipo de construccion:</span>
                <div className="checkbox-wrapper">
                  <label htmlFor="residence">
                    <input
                      type="checkbox"
                      name="family-residence"
                      id="residence"
                      ref={register}
                    />
                    Residencia familiar
                  </label>
                  <label htmlFor="town-house">
                    <input
                      type="checkbox"
                      name="town-house"
                      id="town-house"
                      ref={register}
                    />
                    Town house
                  </label>{" "}
                  <label htmlFor="condominio">
                    <input
                      type="checkbox"
                      name="condominio"
                      id="condominio"
                      ref={register}
                    />
                    Condominio
                  </label>
                  <label htmlFor="mobile-home">
                    <input
                      type="checkbox"
                      name="mobile-home"
                      id="mobile-home"
                      ref={register}
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
                    <input
                      type="checkbox"
                      name="shingle-ceiling-type"
                      id="shingle"
                      ref={register}
                    />
                    Shingle
                  </label>
                  <label htmlFor="teja">
                    <input
                      type="checkbox"
                      name="teja-ceiling-type"
                      id="teja"
                      ref={register}
                    />
                    Teja
                  </label>{" "}
                  <label htmlFor="barro">
                    <input
                      type="checkbox"
                      name="barro-ceiling-type"
                      id="barro"
                      ref={register}
                    />
                    Barro
                  </label>
                  <label htmlFor="madera">
                    <input
                      type="checkbox"
                      name="madera-ceiling-type"
                      id="madera"
                      ref={register}
                    />
                    Madera
                  </label>
                  <label htmlFor="plano">
                    <input
                      type="checkbox"
                      name="plano-ceiling-type"
                      id="plano"
                      ref={register}
                    />
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
                    <input
                      type="checkbox"
                      name="ceiling-condition-exelent"
                      id="exelente"
                      ref={register}
                    />
                    Exelente
                  </label>
                  <label htmlFor="bueno">
                    <input
                      type="checkbox"
                      name="ceiling-condition-good"
                      id="bueno"
                      ref={register}
                    />
                    Bueno
                  </label>{" "}
                  <label htmlFor="pasable">
                    <input
                      type="checkbox"
                      name="ceiling-condition-pasable"
                      id="pasable"
                      ref={register}
                    />
                    Pasable
                  </label>
                  <label htmlFor="viejo">
                    <input
                      type="checkbox"
                      name="ceiling-condition-old"
                      id="viejo"
                      ref={register}
                    />
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
                    <input
                      type="checkbox"
                      name="sombreado-nada"
                      id="nada"
                      ref={register}
                    />
                    Nada
                  </label>
                  <label htmlFor="poco">
                    <input
                      type="checkbox"
                      name="sombreado-poco"
                      id="poco"
                      ref={register}
                    />
                    Poco
                  </label>{" "}
                  <label htmlFor="mucho">
                    <input
                      type="checkbox"
                      name="sombreado-mucho"
                      id="mucho"
                      ref={register}
                    />
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
                    <input
                      type="checkbox"
                      name="house-with-pool"
                      id="withPool"
                      ref={register}
                    />
                    Si
                  </label>
                  <label htmlFor="noPool">
                    <input
                      type="checkbox"
                      name="house-with-no-pool"
                      id="noPool"
                      ref={register}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
            {/********* end of contains pool? *********/}
            <div className="gate">
              <span>Gate: contrasena entrada</span>
              <label htmlFor="gate-number">
                <input
                  type="text"
                  id="gate-number"
                  name="gate-number"
                  ref={register}
                />
                (se require para hacer el site-survey)
              </label>
            </div>
            {/********* end of gate *********/}
            <div className="HOA">
              <span>HOA:</span>
              <label htmlFor="yes-hoa" className="yes-hoa">
                <input
                  type="checkbox"
                  name="hoa-exist"
                  id="yes-hoa"
                  ref={register}
                />
                Si
              </label>
              <label htmlFor="no-hoa" className="yes-hoa">
                <input
                  type="checkbox"
                  name="hoa-no-exist"
                  id="no-hoa"
                  ref={register}
                />
                No
              </label>
              <label htmlFor="hoa-info" className="important hoa-info">
                HOA INFO:
                <input
                  type="text"
                  name="hoa-information"
                  id="hoa-info"
                  ref={register}
                />
              </label>
              <label htmlFor="hoa-phone" className="important">
                Tel:
                <input
                  type="number"
                  name="hoa-phone"
                  id="hoa-phone"
                  ref={register}
                />
              </label>
            </div>
          </div>
          {/********* end of HOA *********/}

          {/**
                   <div className="update-file">
            <label htmlFor="pdf">
              <input type="file" name="pdf" id="pdf" />
            </label>
          </div>
         */}

          {/********* SECOND FORM INFORMATION *********/}
          <div className="power-info">
            <h3>informacion del equipo electrico</h3>
            <div className="if-panel-close">
              <span>El panel electrico sta cercado?</span>
              <label htmlFor="is-panel-close">
                <input
                  type="checkbox"
                  name="is-power-panel-close"
                  id="is-panel-close"
                  ref={register}
                />
                Si
              </label>
              <label htmlFor="is-panel-open">
                <input
                  type="checkbox"
                  name="is-power-panel-open"
                  id="is-panel-open"
                  ref={register}
                />
                No
              </label>
            </div>
            <div className="description-if-panel-close">
              <span>
                En caso que el panel eléctrico este cercado, en breves palabras
                explique en que parte de la casa esta ubicado{" "}
              </span>
              <label htmlFor="desc-fo-panel-close">
                <input
                  type="text"
                  name="desc-for-panel-close"
                  id="desc-fo-panel-close"
                  ref={register}
                />
              </label>
            </div>
            <div className="electric-panel-size">
              <span>Tamaño del panel eléctrico</span>
              <label htmlFor="panel-size">
                <input
                  type="text"
                  name="power-panel-size"
                  id="panel-size"
                  ref={register}
                />
                Amperes (sta informacion esta ubicada en el corta-corriente
                principal de la propiedad y es una numeracion entre 100 a 200)
              </label>
            </div>
          </div>
          {/*********  END OF POWER SYSTEM INFORMATION  *********/}

          <div className="ac-information">
            <h3>a/c calentadores de agua</h3>
            <div className="how-many-acs-wrapper">
              <label htmlFor="acs">
                Cuantos aires acondicinados?
                <input type="text" name="ac-count" id="acs" ref={register} />
              </label>
              <label htmlFor="heaters">
                Cuantos calentadores de agua?
                <input
                  type="text"
                  name="heater-count"
                  id="heaters"
                  ref={register}
                />
              </label>
            </div>
            <div className="type-of-header">
              <span>Tipo de calentador de agua:</span>
              <label htmlFor="gas">
                <input
                  type="checkbox"
                  name="heater-gas"
                  id="gas"
                  ref={register}
                />
                Gas
              </label>
              <label htmlFor="electric">
                <input
                  type="checkbox"
                  name="heater-electric"
                  id="electric"
                  ref={register}
                />
                Electrico
              </label>{" "}
              <label htmlFor="heater-solar">
                <input type="checkbox" name="solar" id="solar" ref={register} />
                Solar
              </label>
            </div>
            <div className="have-solar-panels">
              <span>Tiene sistema solar existente para calentar el agua?</span>
              <label htmlFor="have-solar-panel">
                <input
                  type="checkbox"
                  name="have-solar-panel"
                  id="have-solar-panel"
                  ref={register}
                />
                Si
              </label>
              <label htmlFor="dont-have-solar-panel">
                <input
                  type="checkbox"
                  name="dont-have-solar-panel"
                  id="dont-have-solar-panel"
                  ref={register}
                />
                No
              </label>
            </div>
          </div>
          {/*********  END OF AC INFORMATION *********/}
          <div className="power-bill-info">
            <h3>informacion de la cuenta de energia electrica</h3>
            <label htmlFor="acc-num">
              Numero de cuenta de NV Energy
              <input
                type="number"
                id="acc-num"
                name="power-bill-acc-num"
                ref={register}
              />
            </label>
          </div>
          {/*********  END OF POWER BILL INFO *********/}

          <div className="update-file">
            <label htmlFor="pdf">
              <input type="file" name="pdf-file" id="pdf" ref={register} />
            </label>
          </div>
          <button>enviar</button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;

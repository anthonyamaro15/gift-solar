import React from "react";

const PropertyInfoComponent = ({ register, errors }) => {
  return (
    <div className="property-info">
      <h3>informacion de la propiedad</h3>
      {/********* year, sqr foot and total floors *********/}
      <div className="house">
        <label htmlFor="year">
          Ano construida:
          <input
            type="text"
            name="houseYearBuilt"
            id="year"
            ref={register({ required: true })}
            className={errors.houseYearBuilt ? "not-empty-values" : ""}
          />
        </label>
        <label htmlFor="sqrFoot">
          Pies cuadrados:
          <input
            type="text"
            name="houseSqrFoot"
            id="sqrFoot"
            ref={register({ required: true })}
            className={errors.houseSqrFoot ? "not-empty-values" : ""}
          />
        </label>{" "}
        <label htmlFor="totalFloors">
          Cuantos pisos:
          <input
            type="text"
            name="houseTotalFloors"
            id="totalFloors"
            ref={register({ required: true })}
            className={errors.houseTotalFloors ? "not-empty-values" : ""}
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
          <input type="checkbox" name="hoa-exist" id="yes-hoa" ref={register} />
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
          <input type="number" name="hoa-phone" id="hoa-phone" ref={register} />
        </label>
      </div>
    </div>
  );
};

export default PropertyInfoComponent;

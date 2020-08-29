import React from "react";

const ACComponent = ({ register, errors }) => {
  return (
    <div className="ac-information">
      <h3>a/c calentadores de agua</h3>
      <div className="how-many-acs-wrapper">
        <label htmlFor="acs">
          Cuantos aires acondicinados?
          <input
            type="text"
            name="acCount"
            id="acs"
            ref={register({ required: true })}
            className={errors.acCount ? "not-empty-values" : ""}
          />
        </label>
        <label htmlFor="heaters">
          Cuantos calentadores de agua?
          <input
            type="text"
            name="heaterCount"
            id="heaters"
            ref={register({ required: true })}
            className={errors.heaterCount ? "not-empty-values" : ""}
          />
        </label>
      </div>
      <div className="type-of-header">
        <span>Tipo de calentador de agua:</span>
        <label htmlFor="gas">
          <input
            type="checkbox"
            name="heaterGas"
            id="gas"
            ref={register({ required: true })}
            className={errors.heaterGas ? "not-empty-values" : ""}
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
  );
};

export default ACComponent;

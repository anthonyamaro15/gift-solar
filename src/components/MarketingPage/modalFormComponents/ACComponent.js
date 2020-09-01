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
            name="ac_count"
            id="acs"
            ref={register({ required: true })}
            className={errors.ac_count ? "not-empty-values" : ""}
          />
        </label>
        <label htmlFor="heaters">
          Cuantos calentadores de agua?
          <input
            type="text"
            name="heater_count"
            id="heaters"
            ref={register({ required: true })}
            className={errors.heater_count ? "not-empty-values" : ""}
          />
        </label>
      </div>
      <div className="type-of-header">
        <span>Tipo de calentador de agua:</span>
        <label htmlFor="gas">
          <input
            type="checkbox"
            name="heater_gas"
            id="gas"
            ref={register({ required: true })}
            className={errors.heater_gas ? "not-empty-values" : ""}
          />
          Gas
        </label>
        <label htmlFor="electric">
          <input
            type="checkbox"
            name="heater_electric"
            id="electric"
            ref={register}
          />
          Electrico
        </label>{" "}
        <label htmlFor="heater_solar">
          <input
            type="checkbox"
            name="heater_solar"
            id="solar"
            ref={register}
          />
          Solar
        </label>
      </div>
      <div className="have-solar-panels">
        <span>Tiene sistema solar existente para calentar el agua?</span>
        <label htmlFor="have-solar-panel">
          <input
            type="checkbox"
            name="have_solar_panel"
            id="have-solar-panel"
            ref={register}
          />
          Si
        </label>
        <label htmlFor="dont-have-solar-panel">
          <input
            type="checkbox"
            name="dont_have_solar_panel"
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

import React from "react";

const PowerInfoComponent = ({ register }) => {
  return (
    <div className="power-info">
      <h3>informacion del equipo electrico</h3>
      <div className="if-panel-close">
        <span>El panel electrico sta cercado?</span>
        <label htmlFor="is-panel-close">
          <input
            type="checkbox"
            name="is_power_panel_close"
            id="is-panel-close"
            ref={register}
          />
          Si
        </label>
        <label htmlFor="is-panel-open">
          <input
            type="checkbox"
            name="is_power_panel_open"
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
            name="desc_for_panel_close"
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
            name="power_panel_size"
            id="panel-size"
            ref={register}
          />
          Amperes (sta informacion esta ubicada en el corta-corriente principal
          de la propiedad y es una numeracion entre 100 a 200)
        </label>
      </div>
    </div>
  );
};

export default PowerInfoComponent;

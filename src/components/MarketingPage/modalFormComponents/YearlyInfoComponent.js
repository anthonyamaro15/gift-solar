import React from "react";

const YearlyInfoComponent = ({ register }) => {
  return (
    <div className="yearly-information">
      <div className="month-cost">
        <span>Mes</span>
        <span>Kilowatts</span>
        <span>$Costo</span>
      </div>
      <div className="month-and-values">
        <div className="months-container">
          <span>Enero</span>
          <label htmlFor="enero">
            <input
              type="text"
              name="enero-kilowatts"
              id="enero"
              ref={register}
            />
          </label>
          <label htmlFor="enero-cost">
            <input
              type="text"
              name="enero-cost"
              id="enero-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>
        <div className="months-container">
          <span>Febrero</span>
          <label htmlFor="febrero">
            <input
              type="text"
              name="febrero-kilowatts"
              id="febrero"
              ref={register}
            />
          </label>
          <label htmlFor="febrero-cost">
            <input
              type="text"
              name="febrero-cost"
              id="febrero-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>
        <div className="months-container">
          <span>Marzo</span>
          <label htmlFor="marzo">
            <input
              type="text"
              name="marzo-kilowatts"
              id="marzo"
              ref={register}
            />
          </label>
          <label htmlFor="marzo-cost">
            <input
              type="text"
              name="marzo-cost"
              id="marzo-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Abril</span>
          <label htmlFor="abril">
            <input
              type="text"
              name="abril-kilowatts"
              id="abril"
              ref={register}
            />
          </label>
          <label htmlFor="abril-cost">
            <input
              type="text"
              name="abril-cost"
              id="abril-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Mayo</span>
          <label htmlFor="mayo">
            <input type="text" name="mayo-kilowatts" id="mayo" ref={register} />
          </label>
          <label htmlFor="mayo-cost">
            <input
              type="text"
              name="mayo-cost"
              id="mayo-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Junio</span>
          <label htmlFor="junio">
            <input
              type="text"
              name="junio-kilowatts"
              id="junio"
              ref={register}
            />
          </label>
          <label htmlFor="junio-cost">
            <input
              type="text"
              name="junio-cost"
              id="junio-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Julio</span>
          <label htmlFor="julio">
            <input
              type="text"
              name="julio-kilowatts"
              id="julio"
              ref={register}
            />
          </label>
          <label htmlFor="julio-cost">
            <input
              type="text"
              name="julio-cost"
              id="julio-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Agosto</span>
          <label htmlFor="agosto">
            <input
              type="text"
              name="agosto-kilowatts"
              id="agosto"
              ref={register}
            />
          </label>
          <label htmlFor="agosto-cost">
            <input
              type="text"
              name="agosto-cost"
              id="agosto-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Septiembre</span>
          <label htmlFor="septiembre">
            <input
              type="text"
              name="septiembre-kilowatts"
              id="septiembre"
              ref={register}
            />
          </label>
          <label htmlFor="septiembre-cost">
            <input
              type="text"
              name="septiembre-cost"
              id="septiembre-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Octubre</span>
          <label htmlFor="octubre">
            <input
              type="text"
              name="octubre-kilowatts"
              id="octubre"
              ref={register}
            />
          </label>
          <label htmlFor="octubre-cost">
            <input
              type="text"
              name="octubre-cost"
              id="octubre-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span>Noviembre</span>
          <label htmlFor="noviembre">
            <input
              type="text"
              name="noviembre-kilowatts"
              id="noviembre"
              ref={register}
            />
          </label>
          <label htmlFor="noviembre-cost">
            <input
              type="text"
              name="noviembre-cost"
              id="noviembre-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>
        <div className="months-container">
          <span className="diciembre">Diciembre</span>
          <label htmlFor="diciembre">
            <input
              type="text"
              name="diciembre-kilowatts"
              id="diciembre"
              ref={register}
            />
          </label>
          <label htmlFor="diciembre-cost">
            <input
              type="text"
              name="diciembre-cost"
              id="diciembre-cost"
              className="border"
              ref={register}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default YearlyInfoComponent;

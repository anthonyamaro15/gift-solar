import React from "react";

const YearlyInfoComponent = ({ register, errors }) => {
  return (
    <div className="yearly-information">
      <div className="month-cost">
        <span>Mes</span>
        <span>Kilowatts</span>
        <span>$Costo</span>
      </div>
      <div className="month-and-values">
        <div className="months-container">
          <span className={errors.enero_kilowatts ? "not-empty-values" : ""}>
            Enero
          </span>
          <label htmlFor="enero">
            <input
              type="number"
              name="enero_kilowatts"
              id="enero"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="enero-cost">
            <input
              type="number"
              name="enero_cost"
              id="enero-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span className={errors.febrero_kilowatts ? "not-empty-values" : ""}>
            Febrero
          </span>
          <label htmlFor="febrero">
            <input
              type="number"
              name="febrero_kilowatts"
              id="febrero"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="febrero-cost">
            <input
              type="number"
              name="febrero_cost"
              id="febrero-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span className={errors.marzo_kilowatts ? "not-empty-values" : ""}>
            Marzo
          </span>
          <label htmlFor="marzo">
            <input
              type="number"
              name="marzo_kilowatts"
              id="marzo"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="marzo-cost">
            <input
              type="number"
              name="marzo_cost"
              id="marzoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.abril_kilowatts ? "not-empty-values" : ""}>
            Abril
          </span>
          <label htmlFor="abril">
            <input
              type="number"
              name="abril_kilowatts"
              id="abril"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="abril-cost">
            <input
              type="number"
              name="abril_cost"
              id="abrilCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.mayo_kilowatts ? "not-empty-values" : ""}>
            Mayo
          </span>
          <label htmlFor="mayo">
            <input
              type="number"
              name="mayo_kilowatts"
              id="mayo"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="mayo-cost">
            <input
              type="number"
              name="mayo_cost"
              id="mayoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.junio_kilowatts ? "not-empty-values" : ""}>
            Junio
          </span>
          <label htmlFor="junio">
            <input
              type="number"
              name="junio_kilowatts"
              id="junio"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="junio-cost">
            <input
              type="number"
              name="junio_cost"
              id="junioCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.julio_kilowatts ? "not-empty-values" : ""}>
            Julio
          </span>
          <label htmlFor="julio">
            <input
              type="number"
              name="julio_kilowatts"
              id="julio"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="julio-cost">
            <input
              type="number"
              name="julio_cost"
              id="julioCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.agosto_kilowatts ? "not-empty-values" : ""}>
            Agosto
          </span>
          <label htmlFor="agosto">
            <input
              type="number"
              name="agosto_kilowatts"
              id="agosto"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="agosto-cost">
            <input
              type="number"
              name="agosto_cost"
              id="agostoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span
            className={errors.septiembre_kilowatts ? "not-empty-values" : ""}
          >
            Septiembre
          </span>
          <label htmlFor="septiembre">
            <input
              type="number"
              name="septiembre_kilowatts"
              id="septiembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="septiembre-cost">
            <input
              type="number"
              name="septiembre_cost"
              id="septiembreCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.octubre_kilowatts ? "not-empty-values" : ""}>
            {" "}
            Octubre
          </span>
          <label htmlFor="octubre">
            <input
              type="number"
              name="octubre_kilowatts"
              id="octubre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="octubre-cost">
            <input
              type="number"
              name="octubre_cost"
              id="octubre-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span
            className={errors.noviembre_kilowatts ? "not-empty-values" : ""}
          >
            Noviembre
          </span>
          <label htmlFor="noviembre">
            <input
              type="number"
              name="noviembre_kilowatts"
              id="noviembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="noviembre-cost">
            <input
              type="number"
              name="noviembre_cost"
              id="noviembreCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span
            className={
              errors.diciembre_kilowatts
                ? "not-empty-values diciembre"
                : "diciembre"
            }
          >
            Diciembre
          </span>
          <label htmlFor="diciembre">
            <input
              type="number"
              name="diciembre_kilowatts"
              id="diciembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="diciembre-cost">
            <input
              type="number"
              name="diciembre_cost"
              id="diciembre-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default YearlyInfoComponent;

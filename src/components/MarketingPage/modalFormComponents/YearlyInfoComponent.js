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
          <span className={errors.eneroKilowatts ? "not-empty-values" : ""}>
            Enero
          </span>
          <label htmlFor="enero">
            <input
              type="text"
              name="eneroKilowatts"
              id="enero"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="enero-cost">
            <input
              type="text"
              name="eneroCost"
              id="enero-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span className={errors.febreroKilowatts ? "not-empty-values" : ""}>
            Febrero
          </span>
          <label htmlFor="febrero">
            <input
              type="text"
              name="febreroKilowatts"
              id="febrero"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="febrero-cost">
            <input
              type="text"
              name="febreroCost"
              id="febrero-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span className={errors.marzoKilowatts ? "not-empty-values" : ""}>
            Marzo
          </span>
          <label htmlFor="marzo">
            <input
              type="text"
              name="marzoKilowatts"
              id="marzo"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="marzo-cost">
            <input
              type="text"
              name="marzo-cost"
              id="marzoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.abrilKilowatts ? "not-empty-values" : ""}>
            Abril
          </span>
          <label htmlFor="abril">
            <input
              type="text"
              name="abrilKilowatts"
              id="abril"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="abril-cost">
            <input
              type="text"
              name="abril-cost"
              id="abrilCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.mayoKilowatts ? "not-empty-values" : ""}>
            Mayo
          </span>
          <label htmlFor="mayo">
            <input
              type="text"
              name="mayoKilowatts"
              id="mayo"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="mayo-cost">
            <input
              type="text"
              name="mayo-cost"
              id="mayoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.junioKilowatts ? "not-empty-values" : ""}>
            Junio
          </span>
          <label htmlFor="junio">
            <input
              type="text"
              name="junioKilowatts"
              id="junio"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="junio-cost">
            <input
              type="text"
              name="junio-cost"
              id="junioCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.julioKilowatts ? "not-empty-values" : ""}>
            Julio
          </span>
          <label htmlFor="julio">
            <input
              type="text"
              name="julioKilowatts"
              id="julio"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="julio-cost">
            <input
              type="text"
              name="julio-cost"
              id="julioCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.agostoKilowatts ? "not-empty-values" : ""}>
            Agosto
          </span>
          <label htmlFor="agosto">
            <input
              type="text"
              name="agostoKilowatts"
              id="agosto"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="agosto-cost">
            <input
              type="text"
              name="agosto-cost"
              id="agostoCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span
            className={errors.septiembreKilowatts ? "not-empty-values" : ""}
          >
            Septiembre
          </span>
          <label htmlFor="septiembre">
            <input
              type="text"
              name="septiembreKilowatts"
              id="septiembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="septiembre-cost">
            <input
              type="text"
              name="septiembre-cost"
              id="septiembreCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.octubreKilowatts ? "not-empty-values" : ""}>
            {" "}
            Octubre
          </span>
          <label htmlFor="octubre">
            <input
              type="text"
              name="octubreKilowatts"
              id="octubre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="octubre-cost">
            <input
              type="text"
              name="octubreCost"
              id="octubre-cost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>{" "}
        <div className="months-container">
          <span className={errors.noviembreKilowatts ? "not-empty-values" : ""}>
            Noviembre
          </span>
          <label htmlFor="noviembre">
            <input
              type="text"
              name="noviembreKilowatts"
              id="noviembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="noviembre-cost">
            <input
              type="text"
              name="noviembre-cost"
              id="noviembreCost"
              className="border"
              ref={register({ required: true })}
            />
          </label>
        </div>
        <div className="months-container">
          <span
            className={
              errors.diciembreKilowatts
                ? "not-empty-values diciembre"
                : "diciembre"
            }
          >
            Diciembre
          </span>
          <label htmlFor="diciembre">
            <input
              type="text"
              name="diciembreKilowatts"
              id="diciembre"
              ref={register({ required: true })}
            />
          </label>
          <label htmlFor="diciembre-cost">
            <input
              type="text"
              name="diciembreCost"
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

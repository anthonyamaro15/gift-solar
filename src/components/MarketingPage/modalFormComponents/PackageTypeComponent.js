import React from "react";

const PackageTypeComponent = ({ register }) => {
  return (
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
        <input type="checkbox" name="package-plus" id="plus" ref={register} />
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
  );
};

export default PackageTypeComponent;

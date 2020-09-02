import React from "react";

const DisplayYearlyInfo = ({ months }) => {
  const { month, cost, kilowatts } = months;

  return (
    <div className="months">
      <p className="month">{month}:</p>
      <p>
        Kilowatts: <span>{kilowatts}</span>
      </p>
      <p>
        Costo: <span>{cost}</span>
      </p>
    </div>
  );
};

export default DisplayYearlyInfo;

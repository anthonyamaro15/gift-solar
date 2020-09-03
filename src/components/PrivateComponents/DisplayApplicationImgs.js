import React from "react";

const DisplayApplicationImgs = ({ img }) => {
  return (
    <div className="imgs">
      <img src={img.imgs} alt="imagenes de informacion de luz" />
    </div>
  );
};

export default DisplayApplicationImgs;

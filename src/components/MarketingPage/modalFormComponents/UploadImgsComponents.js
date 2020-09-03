import React from "react";

const UploadImgsComponent = ({
  uploadImg1,
  uploadImg2,
  uploadImg3,
  uploadImg4,
  uploadImg5,
  uploadImg6,
}) => {
  return (
    <div>
      <p className="desc-about-imgs">
        Porfavor mandar fotos sobre la ubication de la caja y del sticker caja,
        y foto del PDF file de la luz.
      </p>

      <div className="upload-imgs-container">
        <label htmlFor="img1" className="btn-wrapper">
          <span>Choose File</span>
          <input id="img1" type="file" name="img1" onChange={uploadImg1} />
        </label>

        <label htmlFor="img2" className="btn-wrapper">
          <span>Choose File</span>

          <input id="img2" type="file" name="img2" onChange={uploadImg2} />
        </label>

        <label htmlFor="img3" className="btn-wrapper">
          <span>Choose File</span>

          <input id="img3" type="file" name="img3" onChange={uploadImg3} />
        </label>

        <label htmlFor="img4" className="btn-wrapper">
          <span>Choose File</span>

          <input id="img4" type="file" name="img4" onChange={uploadImg4} />
        </label>

        <label htmlFor="img5" className="btn-wrapper">
          <span>Choose File</span>

          <input id="img5" type="file" name="img5" onChange={uploadImg5} />
        </label>

        <label htmlFor="img6" className="btn-wrapper">
          <span>Choose File</span>

          <input id="img6" type="file" name="img6" onChange={uploadImg6} />
        </label>
      </div>
    </div>
  );
};

export default UploadImgsComponent;

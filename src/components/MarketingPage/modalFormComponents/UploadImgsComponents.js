import React from "react";
import Button from "@material-ui/core/Button";

const UploadImgsComponent = ({
  uploadImg1,
  uploadImg2,
  uploadImg3,
  uploadImg4,
  uploadImg5,
  uploadImg6,
  classes,
}) => {
  return (
    <div className="upload-imgs-container">
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img1"
          type="file"
          name="img1"
          onChange={uploadImg1}
        />
        <label htmlFor="img1" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 1
          </Button>
        </label>
      </div>
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img2"
          type="file"
          name="img2"
          onChange={uploadImg2}
        />
        <label htmlFor="img2" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 2
          </Button>
        </label>
      </div>{" "}
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img3"
          type="file"
          name="img3"
          onChange={uploadImg3}
        />
        <label htmlFor="img3" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 3
          </Button>
        </label>
      </div>{" "}
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img4"
          type="file"
          name="img4"
          onChange={uploadImg4}
        />
        <label htmlFor="img4" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 4
          </Button>
        </label>
      </div>{" "}
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img5"
          type="file"
          name="img5"
          onChange={uploadImg5}
        />
        <label htmlFor="img5" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 5
          </Button>
        </label>
      </div>{" "}
      <div className={classes.root} id="upload-img-btn">
        <input
          className={classes.input}
          id="img6"
          type="file"
          name="img6"
          onChange={uploadImg6}
        />
        <label htmlFor="img6" className="btn-wrapper">
          <Button variant="contained" component="span">
            Img 6
          </Button>
        </label>
      </div>
    </div>
  );
};

export default UploadImgsComponent;

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PackageTypeComponent from "./modalFormComponents/PackageTypeComponent";
import UserFilesComponent from "./modalFormComponents/UserFilesComponent";
import PropertyInfoComponent from "./modalFormComponents/PropertyInfoComponent";
import PowerInfoComponent from "./modalFormComponents/PowerInfoComponent";
import ACComponent from "./modalFormComponents/ACComponent";
import YearlyInfoComponent from "./modalFormComponents/YearlyInfoComponent";
import UploadImgsComponent from "./modalFormComponents/UploadImgsComponents";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    fontSize: "0.7rem",
  },
}));

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const { register, reset, errors, handleSubmit } = useForm();
  const classes = useStyles();
  const [powerFile, setPowerFile] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [imgContainer, setImgContainer] = useState([]);

  const onSubmit = (values) => {
    const newData = {
      ...values,
      pdf_file: powerFile,
      pdf_name: pdfName,
      images: imgContainer,
    };
    console.log("what is this data?? ", newData);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/application/add`, newData)
      .then((res) => {
        console.log("what is this? ", res.data);
      })
      .catch((err) => {
        console.log("what is this error ? ", err.response.data.errorMessage);
      });
  };
  console.log("here ", pdfName);
  const uploadPdf = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();
    setPdfName(file.name);

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPowerFile(e.target.result);
    };
    //  const formData = new FormData();
    //  formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    //  formData.append("file", file);

    //  axios
    //    .post(
    //      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
    //      formData
    //    )
    //    .then((res) => {
    //      console.log(res.data);
    //      //   setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
    //      setPowerFile(res.data.secure_url);
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
  };

  const uploadImg1 = (e) => {
    let files = e.target.files[0];
    const formData = new FormData();

    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImg2 = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => [console.log(err)]);
  };
  const uploadImg3 = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => [console.log(err)]);
  };
  const uploadImg4 = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => [console.log(err)]);
  };
  const uploadImg5 = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => [console.log(err)]);
  };
  const uploadImg6 = (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_API_SECRET);
    formData.append("file", files);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_API_KEY}/image/upload`,
        formData
      )
      .then((res) => {
        setImgContainer([...imgContainer, { imgs: res.data.secure_url }]);
      })
      .catch((err) => [console.log(err)]);
  };
  return (
    <div className="ModalForm">
      <button className="button" onClick={() => setOpen(true)}>
        click aqui para generar mi propuesta
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-title">quiero applicar para el paquete:</h3>
          <PackageTypeComponent register={register} />

          <UserFilesComponent register={register} errors={errors} />
          {/***************** END OF USER FIELDS *********************/}
          {/***************** START OF PROPERTY INORMATION *********************/}
          <PropertyInfoComponent register={register} errors={errors} />
          {/********* end of HOA *********/}

          {/********* SECOND FORM INFORMATION *********/}
          <PowerInfoComponent register={register} />
          {/*********  END OF POWER SYSTEM INFORMATION  *********/}
          <ACComponent register={register} errors={errors} />
          {/*********  END OF AC INFORMATION *********/}
          <div className="power-bill-info">
            <h3>informacion de la cuenta de energia electrica</h3>
            <label htmlFor="acc-num">
              Numero de cuenta de NV Energy:
              <input
                type="number"
                id="accNumber"
                name="power_bill_acc_number"
                ref={register({ required: true })}
                className={
                  errors.power_bill_acc_number ? "not-empty-values" : ""
                }
              />
            </label>
          </div>
          {/*********  END OF POWER BILL INFO *********/}

          <YearlyInfoComponent register={register} errors={errors} />
          {/************************ END OF YEARLY INFORMATION BILL ***********************/}

          <UploadImgsComponent
            classes={classes}
            uploadImg1={uploadImg1}
            uploadImg2={uploadImg2}
            uploadImg3={uploadImg3}
            uploadImg4={uploadImg4}
            uploadImg5={uploadImg5}
            uploadImg6={uploadImg6}
          />
          {/************************ END OF INPUT IMGS CONTAINER ***********************/}
          <div className={classes.root} id="upload-img-btn">
            <input
              className={classes.input}
              id="contained-button-file"
              type="file"
              name="pdf-file"
              onChange={uploadPdf}
            />
            <label htmlFor="contained-button-file" className="btn-wrapper">
              <Button variant="contained" component="span">
                Choose PDF
              </Button>
            </label>
          </div>

          {/************************ END OF YEARLY UPDATE-FILES ***********************/}
          <button type="submit" className="submit-form">
            enviar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;

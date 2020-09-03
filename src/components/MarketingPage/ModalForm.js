import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

import PackageTypeComponent from "./modalFormComponents/PackageTypeComponent";
import UserFilesComponent from "./modalFormComponents/UserFilesComponent";
import PropertyInfoComponent from "./modalFormComponents/PropertyInfoComponent";
import PowerInfoComponent from "./modalFormComponents/PowerInfoComponent";
import ACComponent from "./modalFormComponents/ACComponent";
import YearlyInfoComponent from "./modalFormComponents/YearlyInfoComponent";
import UploadImgsComponent from "./modalFormComponents/UploadImgsComponents";

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const { register, errors, handleSubmit } = useForm();
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

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/application/add`, newData)
      .then(() => {
        setOpen(false);
        setTimeout(() => {
          alert("Hemos recivido sus datos nos comunicaremos con usted pronto.");
        }, 1500);
      })
      .catch((err) => {
        console.log("what is this error ? ", err.response.data.errorMessage);
      });
  };
  const uploadPdf = (e) => {
    const file = e.target.files[0];

    let reader = new FileReader();
    setPdfName(file.name);

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setPowerFile(e.target.result);
    };
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
            uploadImg1={uploadImg1}
            uploadImg2={uploadImg2}
            uploadImg3={uploadImg3}
            uploadImg4={uploadImg4}
            uploadImg5={uploadImg5}
            uploadImg6={uploadImg6}
          />
          {/************************ END OF INPUT IMGS CONTAINER ***********************/}
          <div className="pdf-file-uploader-container">
            <label htmlFor="contained-button-file" className="btn-wrapper">
              <span className={errors.pdf_file ? "empty" : ""}>Choose Pdf</span>
              <input
                id="contained-button-file"
                type="file"
                name="pdf_file"
                onChange={uploadPdf}
                ref={register({ required: true })}
              />
            </label>
          </div>

          {/************************ END OF YEARLY UPDATE-FILES ***********************/}
          <button type="submit" className="submit-form">
            submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalForm;

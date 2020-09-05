import React, { useState } from "react";
import ContactGiftSolarForm from "./ContactGiftSolarForm";
import DateTimePicker from "react-datetime-picker";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactContent = () => {
  const [value, onChange] = useState("");
  const { register, reset, errors, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (value === "") {
      setError("Porfavor selecione fecha y hora");
    } else {
      let convertDate = String(value.toLocaleString());
      const newData = { ...data, appoinmentTime: convertDate };

      axios
        .post(`${process.env.REACT_APP_API_URL}/api/appoinment`, newData)
        .then((res) => {
          console.log("what is the response ", res.data);
          reset();
          onChange("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div className="ContactContent-wrapper">
        <div className="Contact-form">
          <h3>CONTACTA A GIFT SOLAR</h3>

          <ContactGiftSolarForm />
          <div className="phone-appoinment">
            <h3>AGENDAR UNA CITA POR TELEFONO</h3>
            <div className="flex-wrapper">
              <div className="placeholder"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="date-time" className="date-time"></label>
                <span className="time-picker">
                  <div id="picker">
                    <DateTimePicker onChange={onChange} value={value} />
                    <p className="error">{error && error}</p>
                  </div>
                </span>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    ref={register({ required: true })}
                  />
                  <p className="error">{errors.name && "Nombre requerido"}</p>
                </label>
                <label htmlFor="number">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Numero de telefono"
                    ref={register({ required: true })}
                  />
                  <p className="error">
                    {errors.number && "Numbero requerido"}
                  </p>
                </label>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

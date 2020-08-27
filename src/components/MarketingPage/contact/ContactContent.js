import React, { useState } from "react";
// import DateTimePickerComp from "./DateTimePicker";
import ContactGiftSolarForm from "./ContactGiftSolarForm";
import DateTimePicker from "react-datetime-picker";
import { useForm } from "react-hook-form";

const ContactContent = () => {
  const [value, onChange] = useState(new Date());
  const { register, reset, errors, handleSubmit } = useForm();
  //   console.log("values", value.toLocaleString());

  const onSubmit = (data) => {
    let convertDate = String(value.toLocaleString());
    const newData = { ...data, appoimentTime: convertDate };
    console.log("check this ", newData);
    reset();
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
                  </div>
                </span>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    ref={register({ required: true })}
                    className={errors.name ? "empty" : ""}
                  />
                </label>
                <label htmlFor="number">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Numero de telefono"
                    ref={register({ required: true })}
                    className={errors.number ? "empty" : ""}
                  />
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

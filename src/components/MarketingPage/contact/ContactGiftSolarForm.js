import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactGiftSolarForm = () => {
  const { register, reset, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/contact`, data)
      .then((res) => {
        console.log("what is this ", res.data);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Contact-inner">
      <div className="contact-info">
        <span>
          Tel:
          <a href="#phone">956-518-3132</a>
        </span>
        <span>
          email:
          <a href="#email">info@giftsolarpower.com</a>
        </span>
        <p>
          Locations: <span>Las Vegas NV, Palmview TX</span>
        </p>
        <p>
          Abiertos: <span>Lunes a Sábado de 9am-6pm</span>
        </p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="phone-number">
            <input
              type="number"
              name="phoneNumber"
              id="phone-number"
              placeholder="Numbero de telefono"
              ref={register({ required: true })}
            />
            <p className="error">{errors.phoneNumber && "Numero requerido"}</p>
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              ref={register({ required: true })}
            />
            <p className="error">{errors.email && "Email requerido"}</p>
          </label>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="5"
              placeholder="Tu mensage"
              ref={register({ required: true })}
            ></textarea>
            <p className="error-m">{errors.message && "Mensage requerido"}</p>
          </label>
          <button type="submit" className="contact-btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactGiftSolarForm;

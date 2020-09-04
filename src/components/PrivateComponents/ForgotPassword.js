import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ForgotPassword = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (serverError) {
      setTimeout(() => {
        setServerError("");
      }, 2000);
    }
  }, [serverError, setServerError]);

  const onSubmit = (values) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/api/auth/forgotpassword`, values)
      .then((res) => {
        reset();
        setTimeout(() => {
          alert(res.data.message);
        }, 500);
      })
      .catch((err) => {
        setServerError(err.response.data.errorMessage);
      });
  };

  return (
    <div className="ForgotPassword">
      <h3>Porfavor entre email</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          <p className="error">{errors.email && "Email requerido"}</p>
          <p className="error">{serverError && serverError}</p>
        </label>
        <button type="submit">reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

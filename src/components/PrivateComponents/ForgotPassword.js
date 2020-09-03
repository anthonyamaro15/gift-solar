import React from "react";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
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
        </label>
        <button type="submit">reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

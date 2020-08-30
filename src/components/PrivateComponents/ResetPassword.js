import React from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="ResetPassword">
      <h3>Porfavor entre nuevo password</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Nuevo Password"
            ref={register({ required: true })}
          />
          <p className="error">{errors.password && "Password requerido"}</p>
        </label>
        <label htmlFor="passwordTwo">
          <input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            placeholder="Vuelva a entrar password"
            ref={register({ required: true })}
          />
          <p className="error">{errors.passwordTwo && "Password requerido"}</p>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;

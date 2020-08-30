import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiShow, BiHide } from "react-icons/bi";

const ResetPassword = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const onSubmit = (values) => {
    console.log(values);
  };

  const togglePassword = () => {
    setShowOne(!showOne);
  };

  const toggleSecPassword = () => {
    setShowTwo(!showTwo);
  };
  return (
    <div className="ResetPassword">
      <h3>Porfavor entre nuevo password</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password">
          <input
            type={showOne ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Nuevo Password"
            ref={register({ required: true })}
          />
          <span className="eye" onClick={togglePassword}>
            {showOne ? <BiShow /> : <BiHide />}
          </span>
          <p className="error">{errors.password && "Password requerido"}</p>
        </label>
        <label htmlFor="passwordTwo">
          <input
            type={showTwo ? "text" : "password"}
            name="passwordTwo"
            id="passwordTwo"
            placeholder="Vuelva a entrar password"
            ref={register({ required: true })}
          />
          <span className="eye" onClick={toggleSecPassword}>
            {showTwo ? <BiShow /> : <BiHide />}
          </span>
          <p className="error">{errors.passwordTwo && "Password requerido"}</p>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;

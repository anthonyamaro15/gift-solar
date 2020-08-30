import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const [open, setOpen] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (values) => {
    console.log(values);
    history.push("/dashboard");
    //   window.location.reload(true);
  };

  const redirecTo = () => {
    setOpen(false);
    history.push("/forgotpassword");
    window.location.reload(true);
  };

  return (
    <div className="AdminLogin">
      <button onClick={() => setOpen(true)}>admin</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="inner-modal">
          <h2 className="h2">Admin Login</h2>
          <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                ref={register({ required: true })}
              />
              <p className="error">{errors.email && "Email requerido"}</p>
            </label>

            <label htmlFor="password">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                ref={register({ required: true })}
              />
              <p className="error">{errors.password && "Password requerido"}</p>
            </label>

            <span>
              Olvido la contrasenia?
              <button
                className="forgotpassword"
                onClick={redirecTo}
                to="/forgotpassword"
              >
                click aqui
              </button>
            </span>
            <button type="submit">login</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminLogin;

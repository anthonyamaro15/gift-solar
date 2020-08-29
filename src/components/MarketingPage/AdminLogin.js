import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminLogin = () => {
  const [open, setOpen] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="AdminLogin">
      <button onClick={() => setOpen(true)}>admin</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="inner-modal">
          <h2 className="h2">Admin Login</h2>
          <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <p>
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  ref={register({ required: true })}
                  className={errors.email ? "not-empty-values" : ""}
                />
              </label>
            </p>
            <p>
              <label htmlFor="password">
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="password"
                  ref={register({ required: true })}
                  className={errors.password ? "not-empty-values" : ""}
                />
              </label>
            </p>
            <span>
              Olvido la contrasenia?
              <Link to="/resetpassword">click aqui</Link>
            </span>
            <button type="submit">login</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminLogin;

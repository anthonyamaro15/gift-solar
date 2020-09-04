import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";

const ResetPassword = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const { token } = useParams();
  const [errorPassword, setErrorPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (errorPassword) {
      setTimeout(() => {
        setErrorPassword("");
      }, 2000);
    }
  }, [errorPassword, setErrorPassword]);

  const onSubmit = (values) => {
    const { password, passwordTwo } = values;
    let newpass = { password };
    if (password !== passwordTwo) {
      setErrorPassword("Passwords do not match.");
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/api/auth/resetpassword/${token}`,
          newpass
        )
        .then((res) => {
          reset();
          history.push("/");
          setTimeout(() => {
            alert(res.data.message);
          }, 700);
        })
        .catch((err) => {
          console.log(err.response.data.errorMessage);
        });
    }
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
          <p className="error">{errorPassword && errorPassword}</p>
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;

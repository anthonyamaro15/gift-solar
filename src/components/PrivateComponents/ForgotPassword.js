import React from "react";

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword">
      <h3>Porfavor entre email</h3>
      <form>
        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <button type="submit">reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

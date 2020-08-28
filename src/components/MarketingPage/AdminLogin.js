import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const AdminLogin = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="AdminLogin">
      <button onClick={() => setOpen(true)}>admin</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="inner-modal">
          <h2 className="h2">Admin Login</h2>
          <form className="form-login">
            <p>
              <label htmlFor="firstName">
                First name
                <input type="text" />
              </label>
            </p>
            <p>
              <label htmlFor="lastName">
                Last name
                <input type="text" />
              </label>
            </p>
            <button>test</button>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AdminLogin;

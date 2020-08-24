import React from "react";

const ContactContent = () => {
  return (
    <div>
      <div className="ContactContent-wrapper">
        <div className="Contact-form">
          <h3>CONTACTA A GIFT SOLAR</h3>
          <div className="Contact-inner">
            <div className="contact-info">
              <span>
                Tel:
                <a href="#">956-518-3132</a>
              </span>
              <span>
                email:
                <a href="#">info@giftsolarpower.com</a>
              </span>
              <p>
                Locations: <span>Las Vegas NV, Palmview TX</span>
              </p>
              <p>
                Abiertos: <span>Lunes a Sábado de 9am-6pm</span>
              </p>
            </div>

            <div className="form">
              <form>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                  />
                </label>
                <label htmlFor="phone-number">
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Numbero de telefono"
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </label>
                <label htmlFor="message">
                  <textarea
                    name="message"
                    id="message"
                    cols="10"
                    rows="5"
                    placeholder="Tu mensage"
                  ></textarea>
                </label>
                <button>submit</button>
              </form>
            </div>
          </div>

          <div className="phone-appoinment">
            <h3>agenda cita</h3>
            <div className="flex-wrapper">
              <div className="placeholder"></div>
              <form>
                <label htmlFor="name">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                  />
                </label>
                <label htmlFor="number">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Numero de telefono"
                  />
                </label>
                <button>submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

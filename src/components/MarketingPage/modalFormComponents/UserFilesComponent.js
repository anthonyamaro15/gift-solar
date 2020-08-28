import React from "react";

const UserFilesComponent = ({ register }) => {
  return (
    <div className="subtitle">
      <h3>evaluacion recidencial</h3>
      <p>Favor de responder todas las preguntas sin omitir ninguna</p>
      <div className="user-info">
        <h3>informacion de los propietarios</h3>
        {/***************** START OF USER FIELDS *********************/}
        {/** first user */}
        <label htmlFor="first-name" className="nombre">
          1. Nombre:
          <input
            type="text"
            id="first-name"
            name="first-person-name"
            ref={register}
          />
        </label>
        <div className="phone-info">
          <label htmlFor="first-phone" className="phone">
            Tel:
            <input
              type="number"
              name="first-person-number"
              id="first-phone"
              ref={register}
            />
          </label>
          <div className="taxes">
            <span>Declara Impuestos?</span>
            <label htmlFor="first-yes">
              <input
                type="checkbox"
                name="first-person-do-taxes"
                id="first-yes"
                ref={register}
              />
              Si
            </label>
            <label htmlFor="first-no">
              <input
                type="checkbox"
                name="first-person-dont-do-taxes"
                id="first-no"
                ref={register}
              />
              No
            </label>
          </div>
        </div>
        {/** email */}
        <label htmlFor="first-email" className="email">
          Correo electronico:
          <input
            type="email"
            name="first-person-email"
            id="first-email"
            ref={register}
          />
        </label>
        {/** second user */}

        <label htmlFor="second-name" className="nombre">
          1. Nombre:
          <input
            type="text"
            id="second-person-name"
            name="second-name"
            ref={register}
          />
        </label>
        <div className="phone-info">
          <label htmlFor="second-phone" className="phone">
            Tel:
            <input
              type="number"
              name="second-person-number"
              id="second-phone"
              ref={register}
            />
          </label>
          <div className="taxes">
            <span>Declara Impuestos?</span>
            <label htmlFor="second-yes">
              <input
                type="checkbox"
                name="second-person-do-taxes"
                id="second-yes"
                ref={register}
              />
              Si
            </label>
            <label htmlFor="second-no">
              <input
                type="checkbox"
                name="second-person-dont-do-taxes"
                id="second-no"
                ref={register}
              />
              No
            </label>
          </div>
        </div>
        <label htmlFor="second-email" className="email">
          Correo electronico:
          <input
            type="email"
            name="second-person-email"
            id="second-email"
            ref={register}
          />
        </label>
        {/** end of second user */}
        <label htmlFor="address" className="address1">
          Direccion:
          <input type="text" name="address" id="address" ref={register} />
        </label>
        <div className="address">
          <label htmlFor="city" className="city">
            Ciudad:
            <input type="text" name="city" id="city" ref={register} />
          </label>
          <label htmlFor="state" className="state">
            Estado:
            <input type="text" name="state" id="state" ref={register} />
          </label>
          <label htmlFor="zipcode" className="zipcode">
            Codigo Postal:
            <input type="text" name="zipcode" id="zipcode" ref={register} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserFilesComponent;

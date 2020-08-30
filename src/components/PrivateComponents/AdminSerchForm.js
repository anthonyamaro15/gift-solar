import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminSearchForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (value) => {
    console.log(value);
    //  reset();
  };

  return (
    <section className="AdminSearchForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Busca por Email o por Numbero de telefo.</p>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar"
            ref={register({ required: true })}
          />
          <p className="errors">
            {errors.search && "Porfavor introducir informacion requerida"}
          </p>
          <span className="error">{error && error}</span>
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default AdminSearchForm;

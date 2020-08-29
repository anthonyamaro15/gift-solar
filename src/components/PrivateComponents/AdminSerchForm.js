import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminSearchForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (value) => {
    console.log(value);
    reset();
  };
  return (
    <section className="AdminSearchForm">
      <p>Busca por Email o por Numbero de telefo.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar"
            ref={register({ required: true })}
            className={errors ? "not-empty-values" : ""}
          />
          <span className="error">{error && error}</span>
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default AdminSearchForm;

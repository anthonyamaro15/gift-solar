import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AdminSearchForm = ({ data, setFilteredResult }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [error, setError] = useState("");

  const onSubmit = ({ search }) => {
    const result = data.filter((user) => {
      if (
        user.first_person_email.includes(search) ||
        user.first_person_name.includes(search)
      ) {
        return user;
      }
      return false;
    });
    setFilteredResult(result);
    if (result.length) {
      reset();
    } else {
      setError(`No pudimos encontrar ninguna informacion sobre ${search}`);
    }
  };

  if (error) {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

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
          {/**
         
         */}
          <span className="error">{error && error}</span>
        </label>
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default AdminSearchForm;

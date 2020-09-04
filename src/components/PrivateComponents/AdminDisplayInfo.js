import React from "react";
import SingleResult from "./SingleResult";

const AdminDisplayInfo = ({ filteredResult }) => {
  return (
    <section className="AdminDisplayInfo">
      {filteredResult.length ? <h2>resultados</h2> : ""}

      {filteredResult.map((application) => (
        <SingleResult key={application.id} application={application} />
      ))}
    </section>
  );
};

export default AdminDisplayInfo;

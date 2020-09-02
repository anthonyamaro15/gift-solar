import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";
import AdminSearchForm from "./AdminSerchForm";
import AdminDisplayInfo from "./AdminDisplayInfo";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const AdminMain = () => {
  const [data, setData] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/application/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <AdminSearchForm data={data} setFilteredResult={setFilteredResult} />
      <AdminDisplayInfo filteredResult={filteredResult} />
    </div>
  );
};

export default AdminMain;

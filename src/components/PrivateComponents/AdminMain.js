import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";
import AdminSearchForm from "./AdminSerchForm";

const AdminMain = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <AdminSearchForm />
    </div>
  );
};

export default AdminMain;

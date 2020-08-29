import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminHeader from "./AdminHeader";
import AdminSearchForm from "./AdminSerchForm";
import AdminDisplayInfo from "./AdminDisplayInfo";

const AdminMain = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminHeader />
      <AdminSearchForm />
      <AdminDisplayInfo />
    </div>
  );
};

export default AdminMain;

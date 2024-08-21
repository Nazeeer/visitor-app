import React from "react";
import Sidebar from "../components/Sidebar";
import PrintedTableVisitors from "../components/PrintedTableVisitors";

const Admin = () => {
  return (
    <div>
      <PrintedTableVisitors />
      <Sidebar />
    </div>
  );
};

export default Admin;

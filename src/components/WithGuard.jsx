import { Outlet } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const WithGuard = ({ children }) => {
  //   const { isAuthenticated: auth } = useSelector((state) => state.auth);
  const auth = true;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};

export default WithGuard;

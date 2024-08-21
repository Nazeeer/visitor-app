import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Typography variant="h5" color="initial" textAlign="center" m={2}>
      هذة الصفحة غير موجوده..
      <Link to={"/login"}>عوده للصفحة الرئيسية</Link>
    </Typography>
  );
};

export default Error;

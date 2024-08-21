import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import Footer from "../../components/Footer";
import FoeLogoBlack from "../../assets/bro.svg";
import styles from "./login.module.css";
import MyInput from "../../components/MyInput";

const checkoutSchema = yup.object().shape({
  username: yup.string().required("اسم المستخدم مطلوب"),
  password: yup.string().required("كلمة المرور مطلوبة"),
});

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { isAuth, role } = useSelector((state) => state.auth);
  let mainPath = "";

  if (role === "ROLE_ADMIN") {
    mainPath = "/admin";
  } else if (role === "ROLE_USER") {
    mainPath = "/user";
  }

  const handleFormSubmit = (values) => {
    console.log(values);
    navigate(`${mainPath}/managevisitors`, { replace: true });
  };

  return (
    <Box
      className="Login-page"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maxWidth: "400px",
            borderRadius: "10px",
            paddingBottom: "30px",
            paddingInline: { xs: "10px", sm: "30px" },
            backgroundColor: "#fff",
          }}
        >
          <p
            style={{
              height: "50px",
              fontFamily: "Changa",
              fontWeight: "500",
              fontSize: "36px",
              color: "#000000",
              marginBottom: "40px",
              textAlign: "center",
              "@media print": {
                display: "none",
              },
            }}
            className={styles.textHeading}
          >
            Visitor Tracking
          </p>
          <img
            src={FoeLogoBlack}
            alt="logo"
            style={{
              objectFit: "contain",
              maxWidth: "180px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "40px",
            }}
          />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Stack
                component="form"
                margin={2}
                direction="column"
                sx={{
                  maxWidth: "500px",
                  gap: { xs: 1, sm: 2 },
                  width: "100%",
                  margin: "auto",
                }}
                onSubmit={handleSubmit}
              >
                <MyInput
                  id="visitor-name"
                  placeholder="اسم المستخدم"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="username"
                  error={touched.username && errors.username}
                />

                <MyInput
                  id="visitor-password"
                  placeholder="كلمة المرور"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                  type="password"
                  error={touched.password && errors.password}
                />

                <button
                  style={{
                    width: "173px",
                    backgroundColor: "#FFC100",
                    border: "none",
                    borderRadius: "15px",
                    padding: "10px",
                    margin: "30px auto 0px auto",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Cairo",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  تسجيل الدخول
                </button>
              </Stack>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;

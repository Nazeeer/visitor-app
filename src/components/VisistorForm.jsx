import React, { useState } from "react";
import {
  Stack,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

const phoneRegExp = /^01[1250][0-9]{8}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("اسم الزائر مطلوب"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "رقم الهاتف غير صحيح")
    .required("رقم الهاتف مطلوب"),
  building: yup.string().required("المبنى مطلوب"),
});

const initialValues = {
  name: "",
  phoneNumber: "",
  building: "",
};

const VisitorForm = ({ updateUser }) => {
  const [user, setUser] = useState(
    updateUser?.name ? updateUser : initialValues
  );
  const navigate = useNavigate();

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("تم اضافة الزائر بنجاح", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={user}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
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
            <ToastContainer />
            <MyInput
              id="visitor-name"
              placeholder="اسم الزائر"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={touched.name && errors.name}
            />
            {/* {touched.name && errors.name && (
              <FormHelperText error>{errors.name}</FormHelperText>
            )} */}

            <MyInput
              id="mobile-number"
              placeholder="رقم المحمول"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phoneNumber}
              name="phoneNumber"
              inputMode="numeric"
              error={touched.phoneNumber && errors.phoneNumber}
            />
            {/* {touched.phoneNumber && errors.phoneNumber && (
              <FormHelperText error>{errors.phoneNumber}</FormHelperText>
            )} */}

            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              error={touched.building && errors.building}
            >
              <Select
                value={values.building}
                onChange={(e) => setFieldValue("building", e.target.value)}
                onBlur={handleBlur}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                name="building"
              >
                <MenuItem value="">
                  <em>متوجه إلى مبنى</em>
                </MenuItem>
                <MenuItem value="النظم">النظم</MenuItem>
                <MenuItem value="الهندسه">الهندسه</MenuItem>
                <MenuItem value="الزراعيه">الزراعيه</MenuItem>
              </Select>
              {touched.building && errors.building && (
                <FormHelperText>{errors.building}</FormHelperText>
              )}
            </FormControl>

            <MyButton onClick={handleSubmit} type="submit">
              تاكيد
            </MyButton>
          </Stack>
        )}
      </Formik>
    </div>
  );
};

export default VisitorForm;

import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";

const RegistrationPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => console.log(values);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid Email Format"),
    mobile: Yup.string().required("Mobile Number is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "At least  6 characters are required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              marginTop: "100px",
              borderRadius: "10px",
            }}
          >
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                  values={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstname && formik.touched.firstname ? (
                  <span className="text-danger">{formik.errors.firstname}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                  values={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>{" "}
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  id=""
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                  values={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.mobile && formik.touched.mobile ? (
                  <span className="text-danger">{formik.errors.mobile}</span>
                ) : null}
              </div>{" "}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id=""
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control "
                  }
                  values={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                disabled={!formik.isValid}
                className="btn btn-primary btn-block"
              />

            </form>
            <br />
            <p className="text-center">
              Already have an account ? <a href="">Click here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegistrationPage;

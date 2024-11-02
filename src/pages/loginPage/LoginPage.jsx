import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
const [responseResult, setResponseResult] = useState({
  message : "",
  alertClass : "",
})


  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) =>{
    axios.post('https://api.escuelajs.co/api/v1/auth/login', values)
    .then((response)=>{
      // Success
      setResponseResult({
        message:'login Successful thank you',
        alertClass: 'alert alert-success',
      });
      console.log(response.data)
      localStorage.setItem('token', response.data.access_token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));
    }, 
  (error)=>{
    // failed
    setResponseResult({
      message:'login failed, please try again',
      alertClass: 'alert alert-danger',
    });
  })
  .catch((error)=>console.log(error) );
  };

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
          <div className={responseResult.alertClass} role="alert">
          {responseResult.message}
        </div>

            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>{" "}
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <Field
                      type="submit"
                      value="Login"
                      // disabled={!formik.isValid}
                      className="btn btn-primary btn-block"
                    />

                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              Don't have an account ? <a href="">Click here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;

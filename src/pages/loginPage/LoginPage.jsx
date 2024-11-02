import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'



const LoginPage = () => {

    const initialValues = {
        email: "",
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
          <h2>Login</h2>
          <hr />
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
           { (formik)=>{
                return(
                    <Form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        name="email"
                        id=""
                        className="form-control"
                      />
                        <ErrorMessage name='email'>
                            {
                                (errorMessage) =>(
                                    <small className="text-danger">{errorMessage}</small>
                                )
                            }
                        </ErrorMessage>
                    </div>{" "}
        
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id=""
                        className="form-control"
                      />
                      <ErrorMessage name='password'>
                      {
                          (errorMessage) =>(
                              <small className="text-danger">{errorMessage}</small>
                          )
                      }
                  </ErrorMessage>
                    </div>
                    <Field
                      type="submit"
                      value="submit"

                      className="btn btn-primary btn-block"
                    />
                    <br />
                    <p className="text-center">
                      Don't have an account ? <a href="">Click here</a>
                    </p>
                  </Form>
                )
            }
          }
          </Formik>

        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
  )
}

export default LoginPage
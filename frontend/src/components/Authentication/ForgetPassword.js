import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./ForgetPassword.css";

import HomeNav from "../HomeNav";
import Footer from "../Footer";
import TextError from "./TextError";

function ForgetPassword() {
  const style = {
    textDecoration: "none",
  };

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <HomeNav />
      <main className="bg-primary forget-password-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">
                    Password Recovery
                  </h3>
                </div>
                <div className="card-body">
                  <div className="small mb-3 text-muted">
                    Enter your email address and we will send you a link to
                    reset your password.
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="form-floating mb-3">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="name@example.com"
                              autoComplete="off"
                            />
                            <label htmlFor="email">Email address</label>
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div
                            className="
                          d-flex
                          align-items-center
                          justify-content-between
                          mt-4
                          mb-0
                        "
                          >
                            <Link to="/login" className="small" style={style}>
                              Return to login
                            </Link>
                            <button
                              className="btn btn-primary"
                              disabled={!formik.isValid}
                            >
                              Reset Password
                            </button>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ForgetPassword;

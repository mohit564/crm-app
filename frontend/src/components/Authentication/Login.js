import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

import HomeNav from "../HomeNav";
import Footer from "../Footer";
import TextError from "./TextError";

function LoginPage() {
  const style = {
    textDecoration: "none",
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <HomeNav />
      <main className="bg-primary login-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
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
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="name@example.com"
                              autoComplete="off"
                            />
                            <label htmlFor="email">Email address</label>
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="form-floating mb-3">
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              autoComplete="off"
                            />
                            <label htmlFor="password">Password</label>
                            <ErrorMessage
                              name="password"
                              component={TextError}
                            />
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inputRememberPassword"
                            >
                              Remember Password
                            </label>
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
                            <Link
                              to="/forget-password"
                              className="small"
                              style={style}
                            >
                              Forgot Password
                            </Link>
                            <button
                              className="btn btn-primary"
                              disabled={!formik.isValid}
                            >
                              Login
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

export default LoginPage;

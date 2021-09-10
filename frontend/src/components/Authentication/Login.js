import React from "react";

import "./Login.css";

function LoginPage() {
  return (
    <>
      <main className="bg-primary login-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                      />
                      <label htmlFor="inputPassword">Password</label>
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
                      <a className="small" href="password.html">
                        Forgot Password?
                      </a>
                      <a className="btn btn-primary" href="index.html">
                        Login
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer bg-dark text-white">
        <div className="container ">
          <p className="py-3 mb-0">
            &copy; Copyright {new Date().getFullYear()}, Created by Mohit Dhule
          </p>
        </div>
      </footer>
    </>
  );
}

export default LoginPage;

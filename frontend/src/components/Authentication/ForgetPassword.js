import React from "react";

import "./ForgetPassword.css";

function ForgetPassword() {
  return (
    <>
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
                    <div
                      className="
                          d-flex
                          align-items-center
                          justify-content-between
                          mt-4
                          mb-0
                        "
                    >
                      <a className="small" href="login.html">
                        Return to login
                      </a>
                      <a className="btn btn-primary" href="login.html">
                        Reset Password
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

export default ForgetPassword;

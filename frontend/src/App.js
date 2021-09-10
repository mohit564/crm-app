import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgetPassword from "./components/Authentication/ForgetPassword";

const App = () => {
  return (
    <>
      {/* <HomePage />
      <Login />
      <Register /> */}
      <ForgetPassword />
    </>
  );
};

export default App;

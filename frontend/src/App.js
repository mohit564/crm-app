﻿import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import Login from "./components/Authentication/Login";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Dashboard from "./components/Pages/Dashboard";
import Register from "./components/Authentication/Register";
import Users from "./components/Pages/Users";
import Leads from "./components/Pages/Leads";
import Contacts from "./components/Pages/Contacts";
import ServiceRequests from "./components/Pages/ServiceRequests";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/Pages/NotFound";

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forget-password" component={ForgetPassword} />

        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/users" component={Users} />
        <ProtectedRoute path="/leads" component={Leads} />
        <ProtectedRoute path="/contacts" component={Contacts} />
        <ProtectedRoute path="/service-requests" component={ServiceRequests} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

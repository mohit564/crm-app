import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import Login from "./components/Authentication/Login";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Dashboard from "./components/Pages/Dashboard";
import Register from "./components/Authentication/Register";
import Users from "./components/Users/Users";
import Leads from "./components/Leads/Leads";
import CreateLead from "./components/Leads/CreateLead";
import EditLead from "./components/Leads/EditLead";
import Contacts from "./components/Contacts/Contacts";
import CreateContact from "./components/Contacts/CreateContact";
import EditContact from "./components/Contacts/EditContact";
import ServiceRequests from "./components/ServiceRequests/ServiceRequests";
import CreateServiceRequest from "./components/ServiceRequests/CreateServiceRequest";
import EditServiceRequest from "./components/ServiceRequests/EditServiceRequest";
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

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/leads" component={Leads} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/service-requests" component={ServiceRequests} />

        {/* <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/users" component={Users} />
        <ProtectedRoute path="/leads" component={Leads} />
        <ProtectedRoute path="/contacts" component={Contacts} />
        <ProtectedRoute path="/service-requests" component={ServiceRequests} /> */}

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

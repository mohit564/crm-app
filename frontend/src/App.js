import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/HomePage";
import Login from "./components/Authentication/Login";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import Dashboard from "./components/Dashboard/Dashboard";
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
import NotFound from "./components/NotFound/NotFound";

const App = (props) => {
  let token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {token ? <Dashboard /> : <HomePage />}
        </Route>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/forget-password" component={ForgetPassword} exact />

        <ProtectedRoute path="/dashboard" component={Dashboard} exact />
        <ProtectedRoute path="/users" component={Users} exact />
        <ProtectedRoute path="/leads" component={Leads} exact />
        <ProtectedRoute path="/leads/create" component={CreateLead} exact />
        <ProtectedRoute path="/leads/edit/:id" component={EditLead} exact />
        <ProtectedRoute path="/contacts" component={Contacts} exact />
        <ProtectedRoute
          path="/contacts/create"
          component={CreateContact}
          exact
        />
        <ProtectedRoute
          path="/contacts/edit/:id"
          component={EditContact}
          exact
        />
        <ProtectedRoute
          path="/service-requests"
          component={ServiceRequests}
          exact
        />
        <ProtectedRoute
          path="/service-requests/create"
          component={CreateServiceRequest}
          exact
        />
        <ProtectedRoute
          path="/service-requests/edit/:id"
          component={EditServiceRequest}
          exact
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

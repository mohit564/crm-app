import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/dashboard" className="nav-link text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="nav-link text-white">
            Users
          </Link>
        </li>
        <li>
          <Link to="/leads" className="nav-link text-white">
            Leads
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="nav-link text-white">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/service-requests" className="nav-link text-white">
            Service Requests
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

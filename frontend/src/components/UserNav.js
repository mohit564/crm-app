import React from "react";

import "./UserNav.css";

function UserNav() {
  function openSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  return (
    <nav className="nav navbar-light d-flex justify-content-between align-items-center py-2">
      <button className="navbar-toggler btn btn-sm" onClick={openSidebar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="dropdown">
        <section
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {"Hello Mohit "}
        </section>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a href="#" className="dropdown-item">
              My Profile
            </a>
          </li>
          <li>
            <a href="#" className="dropdown-item">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default UserNav;

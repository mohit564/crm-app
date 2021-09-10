import React from "react";
import { Link } from "react-router-dom";

function HomeNav() {
  const style = {
    textDecoration: "none",
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark text-white">
        <div className="container">
          <Link style={style} to="/">
            <span className="navbar-brand mb-0">CRM App</span>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary px-4 m-2 my-sm-0">Login</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HomeNav;

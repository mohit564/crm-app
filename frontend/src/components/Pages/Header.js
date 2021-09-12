import React from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  function doLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark text-white">
        <div className="container">
          <Link to="/dashboard" className="navbar-brand mb-0">
            CRM App
          </Link>
          <button
            onClick={doLogout}
            className="btn btn-warning px-4 m-2 my-sm-0"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

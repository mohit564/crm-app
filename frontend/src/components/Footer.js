import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container ">
        <p className="py-3 mb-0">
          &copy; Copyright {new Date().getFullYear()}, Created by Mohit Dhule
        </p>
      </div>
    </footer>
  );
}

export default Footer;

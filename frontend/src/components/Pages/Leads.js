import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "../Footer";

function Leads() {
  return (
    <>
      <Header />
      <main className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <h1>Leads</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Leads;

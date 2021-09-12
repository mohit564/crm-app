import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "../Footer";

function ServiceRequests() {
  return (
    <>
      <Header />
      <main className="d-flex">
        <Sidebar />
        <div className="container-fluid">
          <h1>Service Requests</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ServiceRequests;

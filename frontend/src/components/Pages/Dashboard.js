import React from "react";

import Sidebar from "../Sidebar";
import UserNav from "../UserNav";

function Dashboard() {
  return (
    <main className="d-flex m-0">
      <Sidebar />
      <div className="container-fluid d-flex flex-column">
        <UserNav />
        <h1>Dashboard</h1>
      </div>
    </main>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar";
import UserNav from "../UserNav";

function Leads() {
  const [leads, setLeads] = useState([
    {
      companyName: "Amazon Inc.",
      location: " Seattle, Washington",
      date: "2015-10-20",
      status: "New",
    },
  ]);
  useEffect(() => {}, []);
  return (
    <main className="d-flex m-0">
      <Sidebar />
      <div className="container-fluid d-flex flex-column">
        <UserNav />
        <div className="card shadow mt-4">
          <div className="card-header py-3">
            <h6 className="m-0">Leads</h6>
          </div>
          <div className="card-body">
            <Link className="btn btn-secondary mb-4" to="/create-lead">
              Create Lead
            </Link>
            <div className="table-responsive">
              <table
                className="table table-bordered table-hover align-middle"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <caption>List of leads</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{lead.companyName}</td>
                        <td>{lead.location}</td>
                        <td>{lead.date}</td>
                        <td>{lead.status}</td>
                        <td className="d-flex gap-2">
                          <Link
                            to={`/edit-lead/${index + 1}`}
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {}}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Leads;

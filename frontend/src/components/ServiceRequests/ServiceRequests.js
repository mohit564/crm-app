import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar";
import UserNav from "../UserNav";

function ServiceRequests() {
  const [serviceRequests, setServiceRequests] = useState([
    {
      requestedBy: "Erwin E. Brown",
      subject: "A new rating has been received",
      assigned: "Debra J. Wilson",
      priority: "Medium",
      status: "Closed",
      createdAt: "2015-02-07",
      dueDate: "2015-02-09",
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
            <h6 className="m-0">Service Requests</h6>
          </div>
          <div className="card-body">
            <Link
              className="btn btn-secondary mb-4"
              to="/service-requests/create"
            >
              Create Service Request
            </Link>
            <div className="table-responsive">
              <table
                className="table table-bordered table-hover align-middle"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <caption>List of service requests</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Requested By</th>
                    <th>Subject</th>
                    <th>Assigned</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Due Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceRequests.map((sr, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{sr.requestedBy}</td>
                        <td>{sr.subject}</td>
                        <td>{sr.assigned}</td>
                        <td>{sr.priority}</td>
                        <td>{sr.status}</td>
                        <td>{sr.createdAt}</td>
                        <td>{sr.dueDate}</td>
                        <td className="d-flex gap-2">
                          <Link
                            to={`/service-requests/edit/${index + 1}`}
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

export default ServiceRequests;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar";
import UserNav from "../UserNav";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "Paul J. Friend",
      phone: "937-330-1634",
      email: "pauljfrnd@jourrapide.com",
      company: "Vine Corporation",
    },
  ]);
  return (
    <main className="d-flex m-0">
      <Sidebar />
      <div className="container-fluid d-flex flex-column">
        <UserNav />
        <div className="card shadow mt-4">
          <div className="card-header py-3">
            <h6 className="m-0">Contacts</h6>
          </div>
          <div className="card-body">
            <Link className="btn btn-secondary mb-4" to="/create-contact">
              Create Contact
            </Link>
            <div className="table-responsive">
              <table
                className="table table-bordered table-hover align-middle"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <caption>List of contacts</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone no</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>{contact.company}</td>
                        <td className="d-flex gap-2">
                          <Link
                            to={`/edit-contact/${index + 1}`}
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

export default Contacts;

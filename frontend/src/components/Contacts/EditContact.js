import React, { useState } from "react";

function EditContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <h3 className="h3 my-4 text-gray-800">Edit Contact</h3>
        <div className="row g-3">
          <div className="col-lg-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              placeholder="Enter Person Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter Phone Number"
              className="form-control"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-control"
              value={company}
              placeholder="Enter Company Name"
              onChange={(event) => {
                setCompany(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-3"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditContact;

import React, { useState } from "react";

function EditServiceRequest() {
  const [requestedBy, setRequestedBy] = useState("");
  const [subject, setSubject] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <h3 className="h3 my-4 text-gray-800">Edit Service Request</h3>
        <div className="row g-3">
          <div className="col-lg-6">
            <label htmlFor="name">Requested By</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={requestedBy}
              placeholder="Enter Name"
              onChange={(event) => {
                setRequestedBy(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              value={subject}
              placeholder="Enter Subject"
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="assignee">Assignee</label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              className="form-control"
              value={assignee}
              placeholder="Enter Assignee Name"
              onChange={(event) => {
                setAssignee(event.target.value);
              }}
              required
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              className="form-select"
              onChange={(event) => {
                setPriority(event.target.value);
              }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="form-select"
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <option value="Created">Created</option>
              <option value="Open">Open</option>
              <option value="In Process">In Process</option>
              <option value="Released">Released</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Confirmed">Confirmedd</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label htmlFor="date">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="form-control"
              value={dueDate}
              onChange={(event) => {
                setDueDate(event.target.value);
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

export default EditServiceRequest;

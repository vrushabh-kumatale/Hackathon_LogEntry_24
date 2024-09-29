import React, { useState } from 'react';
import './LogSubmit.css'; // Optional: Add custom styles

const LogSubmit = () => {
  const [logEntry, setLogEntry] = useState({
    date: '',
    fromTime: '',
    toTime: '',
    module: '',
  //  type: 'Lab', // Default log type
    status: 'submitted', // Default status
  });

  const handleChange = (e) => {
    setLogEntry({
      ...logEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Log entry submitted:', logEntry);
    // Here, you can add functionality to submit the log to the backend API
  };

  return (
    <div className="log-submit-container">
      <h2>Submit a New Log</h2>
      <form onSubmit={handleSubmit} className="log-form">
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={logEntry.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>From</label>
          <input
            type="time"
            name="fromTime"
            value={logEntry.fromTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>To</label>
          <input
            type="time"
            name="toTime"
            value={logEntry.toTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Module</label>
          <input
            type="text"
            name="module"
            placeholder="e.g., Web Programming Technologies"
            value={logEntry.module}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select
            name="type"
            value={logEntry.type}
            onChange={handleChange}
          >
            <option value="Lab">Lab</option>
            <option value="Lecture">Theory</option>
            <option value="Workshop">Course Management</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={logEntry.status}
            onChange={handleChange}
          >
            <option value="submitted">Submitted</option>
            <option value="verified">Verified</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">Add Log</button>
      </form>
    </div>
  );
};

export default LogSubmit;

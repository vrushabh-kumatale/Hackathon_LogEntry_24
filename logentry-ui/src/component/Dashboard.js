
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar section */}
      <aside className="sidebar">
        <div className="sidebar-header">
         
          <h1>SUNBEAM</h1>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Tasks</a></li>
            <li><a href="#">Timesheet</a></li>
            <li><a href="#">Question Bank</a></li>
            <li><a href="#">Feedback</a></li>
            <Link to="/modules" className="list-group-item list-group-item-action p-2 text-left">Modules</Link>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main content section */}
      <main className="main-content">
        <header className="header">
          <h2>Dashboard</h2>
          <div className="user-info">
            <span>Vrushabh Kumatale</span>
          </div>
        </header>

        {/* Statistics and progress sections */}
        

<section className="statistics">
  {/* First Row */}
  <div className="row">
  <Link to="/feedback" className="card">#Feedbacks </Link>

  <Link to="/Average-feedback" className="card">Average Feedback </Link>

  <Link to="/pending-tasks" className="card"># Pending Tasks </Link>

  <Link to="/QB-invitations" className="card"># QB Invitations </Link>

  <Link to="/messages" className="card"># Messages </Link>

  <Link to="/weekly-schedules" className="card">Weekly Schedules </Link>

  </div>
  </section>

  {/* Second Row for Logs Submitted and other data */}
  <div className="row">
    <Link to="/logs-submitted" className="card">Logs Submitted </Link>

    <Link to="/logs-verified" className="card">Logs Verified</Link>

    <Link to="/approved-logs" className="card">Approved Logs </Link>

    <Link to="/rejected-logs" className="card">Rejected Logs </Link>

    <Link to="/verification-waiting" className="card">Verification Waiting </Link>

    <Link to="/approval-waiting" className="card">Approval Waiting </Link>
  </div>

      </main>
    </div>
  );
};

export default Dashboard;

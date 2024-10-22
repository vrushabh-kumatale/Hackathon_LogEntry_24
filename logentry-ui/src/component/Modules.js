

// Modules.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have the same CSS for layout
import './form-control.css';
import './form-group.css';

const Modules = () => {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [product, setProduct] = useState({
    moduleName: "",
    course_id: "",
    theoryHrs: "",
    labHrs: ""
  });

  useEffect(() => {
    loadData();
    axios.get("http://localhost:8080/courses")
      .then(resp => {
        setCourse(resp.data);
      })
      .catch(err => {
        toast.error("Failed to fetch courses");
      });
  }, []);

  const loadData = () => {
    axios.get("http://localhost:8080/modules/findall")
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => {
        toast.error("Failed to load modules");
      });
  };

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    const result = window.confirm('Are you sure you want to delete this module?');
    if (result) {
      axios.delete(`http://localhost:8080/modules/${id}`)
        .then(resp => {
          toast.success(resp.data);
          loadData();
        })
        .catch(err => {
          toast.error("Failed to delete module");
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/modules', product)
      .then(resp => {
        toast.success("Module saved successfully");
        setProduct({
          moduleName: "",
          course_id: "",
          theoryHrs: "",
          labHrs: ""
        });
        loadData();
      })
      .catch(error => {
        toast.error("Failed to save module");
      });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar section */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>SUNBEAM</h1>
        </div>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/timesheet">Timesheet</Link></li>
          <li><Link to="/question-bank">Question Bank</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/modules">Modules</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </aside>

      {/* Main content section */}
      <main className="main-content">
        <header className="header">
          <h2>Modules Management</h2>
          <div className="user-info">
            <span>Vrushabh Kumatale</span>
          </div>
        </header>

        {/* Modules Table and Form */}
        <div className="container-fluid mt-4">
          <div className="row">
            {/* Modules List */}
            <div className="col-sm-12 col-md-8">
              <h5 className="p-2 mb-3 text-white bg-dark text-center" style={{ borderBottom: '2px solid green' }}>
                Available Course Modules
              </h5>
              <table className="table table-striped table-hover table-bordered table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Module ID</th>
                    <th>Module Name</th>
                    <th>Course Name</th>
                    <th>Theory Hours</th>
                    <th>Lab Hours</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x, index) => (
                    <tr key={x.id}>
                      <td>{index + 1}</td>
                      <td>{x.id}</td>
                      <td>{x.moduleName}</td>
                      <td>{x.course.courseName}</td>
                      <td>{x.theoryHrs}</td>
                      <td>{x.labHrs}</td>
                      <td>
                        <button 
                          onClick={() => handleDelete(x.id)} 
                          className="btn btn-danger btn-sm rounded">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Module Form */}
            <div className="col-sm-12 col-md-4">
              <h5 className="p-2 text-white bg-primary text-center rounded">Add Module</h5>
              <form onSubmit={handleSubmit} className="p-3 bg-light rounded">
                <div className="form-group">
                  <label>Module Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="moduleName"
                    value={product.moduleName}
                    onChange={handleInput}
                    required
                    className="form-control"
                    placeholder="Enter Module Name"
                  />
                </div>
                <div className="form-group">
                  <label>Theory Hours</label>
                  <input
                    type="number"
                    name="theoryHrs"
                    value={product.theoryHrs}
                    onChange={handleInput}
                    required
                    className="form-control"
                    placeholder="Enter Theory Hours"
                  />
                </div>
                <div className="form-group">
                  <label>Lab Hours</label>
                  <input
                    type="number"
                    name="labHrs"
                    value={product.labHrs}
                    onChange={handleInput}
                    required
                    className="form-control"
                    placeholder="Enter Lab Hours"
                  />
                </div>
                <div className="form-group">
                  <label>Course <span className="text-danger">*</span></label>
                  <select
                    name="course_id"
                    value={product.course_id}
                    onChange={handleInput}
                    required
                    className="form-control"
                  >
                    <option value="">Select Course</option>
                    {course.map((x) => (
                      <option key={x.id} value={x.id}>{x.courseName}</option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-success btn-lg btn-block mt-3">Save</button>
                <button 
                  type="button" 
                  className="btn btn-warning btn-lg btn-block mt-2" 
                  onClick={() => setProduct({
                    moduleName: "",
                    course_id: "",
                    theoryHrs: "",
                    labHrs: ""
                  })}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Modules;


import React, { useState, useEffect } from 'react';
import './LogSubmit.css'; // Optional: Add custom styles
import axios from 'axios';
import { toast } from 'react-toastify';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const LogSubmit = () => {
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [logEntry, setLogEntry] = useState({
    date: '',
    fromTime: '',
    toTime: '',
    moduleId: '',
    courseId: '',
    status: 'submitted',
    // type: 'Lab', // Uncomment if 'type' is required by LogEntryReqDTO
  });

  const navigate = useNavigate();

  useEffect(() => {
  
    // Fetch courses data
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        toast.error('Failed to fetch courses');
      }
    };

    // Fetch modules data
    const fetchModules = async () => {
      try {
        const response = await axios.get('http://localhost:8080/modules/findall');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
        toast.error('Failed to fetch modules');
      }
    };

    fetchCourses();
    fetchModules();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const { date, fromTime, toTime, moduleId, courseId } = logEntry;
    if (!date || !fromTime || !toTime || !moduleId || !courseId) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/logs/add',
        logEntry, // Send as JSON
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Log added successfully');
    
      // Reset form
      setLogEntry({
        date: '',
        fromTime: '',
        toTime: '',
        moduleId: '',
        courseId: '',
        status: 'submitted',
        // type: 'Lab', // Reset if 'type' is used
      });

      navigate('/logs');
    } catch (error) {
      console.error('Failed to add log:', error);
      toast.error('Failed to add log');
    }
  };

  

  return (
    <div className="log-submit-container">
      <h2>Submit a New Log</h2>
      <form onSubmit={handleSubmit} className="log-form">
        {/* Date Field */}
        <div className="form-group">
          <label htmlFor="date">Date<span className="required">*</span></label>
          <input
            type="date"
            id="date"
            name="date"
            value={logEntry.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* From Time Field */}
        <div className="form-group">
          <label htmlFor="fromTime">From<span className="required">*</span></label>
          <input
            type="time"
            id="fromTime"
            name="fromTime"
            value={logEntry.fromTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* To Time Field */}
        <div className="form-group">
          <label htmlFor="toTime">To<span className="required">*</span></label>
          <input
            type="time"
            id="toTime"
            name="toTime"
            value={logEntry.toTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Course Selection */}
        <div className="form-group">
          <label htmlFor="courseId">Course<span className="required">*</span></label>
          <select
            id="courseId"
            name="courseId"
            value={logEntry.courseId}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.courseName}
              </option>
            ))}
          </select>
        </div>

        {/* Module Selection */}
        <div className="form-group">
          <label htmlFor="moduleId">Module<span className="required">*</span></label>
          <select
            id="moduleId"
            name="moduleId"
            value={logEntry.moduleId}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Module</option>
            {modules.map((module) => (
              <option key={module.id} value={module.id}>
                {module.moduleName}
              </option>
            ))}
          </select>
        </div>

        {/* Status Selection */}
        <div className="form-group">
          <label htmlFor="status">Status<span className="required">*</span></label>
          <select
            id="status"
            name="status"
            value={logEntry.status}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="submitted">Submitted</option>
            <option value="verified">Verified</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit"  className="btn-submit">
          Add Log
        </button>
      </form>
    </div>
  );
};

export default LogSubmit;

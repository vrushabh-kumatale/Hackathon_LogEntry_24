import React from 'react';
import './Login.css'; // Import the CSS file

import {useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

     // On successful validation, navigate to the dashboard page
     navigate('/dashboard')
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-avatar">
          {/* Add an avatar image */}
          <img src="https://via.placeholder.com/100" alt="Avatar" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" placeholder="@sunbeaminfo.com" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </form>
        <div className="new-user">
           <a href="/registration">New User?</a> 
          
        </div>
      </div>
    </div>
  );
};

export default Login;

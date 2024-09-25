
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
  // State variables to hold user inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  // This function is used to navigate to different routes programmatically
  const navigate = useNavigate();

  // Function to handle signup button click
  const signup = async () => {
    // Basic form validation
    if (!firstName) {
      toast.error('Please enter first name');
      return;
    }
    if (!lastName) {
      toast.error('Please enter last name');
      return;
    }
    if (!email) {
      toast.error('Please enter email');
      return;
    }
    if (!password) {
      toast.error('Please enter password');
      return;
    }
    if (!role) {
      toast.error('Please enter role');
      return;
    }

    try {
      // Make a POST request to the signup API
      const response = await axios.post('http://localhost:8080/users/signup', {
        firstName,
        lastName,
        email,
        password,
        role,
      });

      // Handle the response from the server
      if (response.status === 201) {
        toast.success('Successfully registered a new user');
        navigate('/signin');
      } else {
        toast.error('User registration failed');
      }
    } catch (error) {
      console.error('There was an error signing up!', error);
      toast.error('User registration failed');
    }
  };

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            onChange={(event) => setFirstName(event.target.value)}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            onChange={(event) => setLastName(event.target.value)}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
            type="email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            type="password"
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select
            onChange={(event) => setRole(event.target.value)}
            className="form-control"
            value={role}
          >
            <option value="">Select Role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            
          </select>
        </div>

        <div style={{ marginTop: 30 }}>
          Already have an account? <Link to="/signin">Signin here</Link>
        </div>

        <div className="mb-3" style={{ marginTop: 20 }}>
          <button onClick={signup} style={styles.signupButton}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    padding: 20,
    margin: 'auto',
    borderColor: '#3FD2C7',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: '1px 1px 20px 5px #C9C9C9',
  },
  signupButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#0000FF',
    color: 'white',
    borderRadius: 5,
    border: 'none',
  },
};

export default Signup;

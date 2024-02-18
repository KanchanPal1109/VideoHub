import React, { useState } from "react";
import "../css/Register.css";
import { useUser } from '../ContextApi/UserContext'
import { Link } from 'react-router-dom';

function Register() {
  const { userData, setUserData } = useUser();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [inerrors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    console.log("errors",errors)
    if (errors !== '') {
      setUserData(formData);
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setErrors({});
    } else {
      setErrors(errors);
      console.log(inerrors)
    }
  };

  const validateForm = (values) => {
    let error = "";
    if (!values.username.trim()) {
        return error = 'Username is required';
    }
    if (!values.email.trim()) {
      return error = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      return error = 'Email is invalid';
    }
    if (!values.password.trim()) {
      return error = 'Password is required';
    } else if (values.password.length < 6) {
      return error = 'Password must be at least 6 characters long';
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-register">
          Register
        </button>
        <h4>Already have an account? <Link to="/login">LogIn.</Link></h4>

      </form>
    </div>
  );
}

export default Register;

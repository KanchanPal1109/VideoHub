import React, { useState } from "react";
import "../css/Register.css";
import { Link } from 'react-router-dom';
import { useUser } from '../ContextApi/UserContext'

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { userData } = useUser();
  console.log(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData) {
      alert("Invalid username or password");
      return; // Exit early if userData is not defined
    }

    const { username: storedUsername, password: storedPassword } = userData;
    const { username, password } = formData;

    if (storedUsername !== username || storedPassword !== password) {
      alert("Invalid username or password");
    } else {
      alert("User login successful");
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
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
          Login
        </button>
      </form>
      <h4>Don't have an account? <Link to="/register">SignUp</Link></h4>
    </div>
  );
}

export default Login;

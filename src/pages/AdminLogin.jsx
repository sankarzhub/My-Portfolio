import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        credentials
      );
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/messages");
      } else {
        alert("Login Failed!");
      }
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };
  return (
    <div className="admin-login">
    
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

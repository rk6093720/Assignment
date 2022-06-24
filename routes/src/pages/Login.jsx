import React, { useState } from "react";
import "../Styles/LoginStyles.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnClick = (el) => {
    el.preventDefault();
    // console.log(email.length);
    if (email.length > 0 && password.length > 0) {
      setEmail("");
      setPassword("");
      navigate("/");
    } else {
      console.log(email, password);
    
      navigate("/Login");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleOnClick}>
        <div>
          <label htmlFor="">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
           id="password"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ border: "none" }}>
          <input type="submit" style={{ margin: "auto" }} />
        </div>
      </form>
    </div>
  );
};

export default Login;
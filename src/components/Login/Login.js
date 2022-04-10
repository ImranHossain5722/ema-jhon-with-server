import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="from-container">
      <div className="div">
        <h2 className="loginTitle">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required />
          </div>
          <input className="submit-btn" type="submit" value="Login" />
        </form>
        <p className="form-bottom-text">
            New to Ema-John? <Link className="form-link" to ="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

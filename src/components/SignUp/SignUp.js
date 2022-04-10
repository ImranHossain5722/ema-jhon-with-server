import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    return (
        <div className="from-container">
        <div className="div">
          <h2 className="loginTitle">Sign Up</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" required />
            </div>
            <input className="submit-btn" type="submit" value="Sign Up" />
          </form>
          <p className="form-bottom-text">
              Already have an account ? <Link className="form-link" to ="/login">Login</Link>
          </p>
        </div>
      </div>
    );
};

export default SignUp;
import React, {useState}  from 'react';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')

    const [SignInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate('')

    const handelEmailBlur =event =>{
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }
    const handelLoginSubmit =event =>{
        event.preventDefault();
        SignInWithEmailAndPassword (email,password)

    }
  return (
    <div className="from-container">
      <div className="div">
        <h2 className="loginTitle">Login</h2>
        <form onSubmit={handelLoginSubmit} >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur= {handelEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handelPasswordBlur} type="password" name="password" required />
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {
              loading && <p>Loading..</p>
          }
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

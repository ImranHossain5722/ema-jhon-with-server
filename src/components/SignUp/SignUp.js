import React, {useState}  from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { createUserWithEmailAndPassword } from 'firebase/auth';



const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate =useNavigate('')
    const [createUserWithEmailAndPassword, user ]=useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur =(event)=>{
            setEmail(event.target.value)
    }

    const handelPasswordBlur = event =>{
        setPassword(event.target.value)
    }

    const handelConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
        if (user){
            navigate('/orders')
        }
    const handelCreateUser = event =>{
        event.preventDefault();
        if (password !== confirmPassword){
            setError('your two password did not match')
            return
        }
        if (password.length<6){
            setError('password must be 6 characters or longer')
            return
        }

        createUserWithEmailAndPassword(email, password)
    }
      
    return (
        <div className="from-container">
        <div className="div">
          <h2 className="loginTitle">Sign Up</h2>
          <form onSubmit={handelCreateUser} >
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handelEmailBlur} type="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input onBlur={handelPasswordBlur} type="password" name="password" required />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handelConfirmPasswordBlur} type="password" name="confirm-password" required />
            </div>
            <p style={{color:'red'}}> {error}</p>
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
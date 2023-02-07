import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React from 'react'
import avatar from '../photos/avatar.png'
import {Link} from 'react-router-dom'


const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='displat name'/>
          <input type='email'placeholder='email'/>
          <input type='password' placeholder='password'/>
          <input style={{display:"none"}}type='file' id='file'/>
          <label htmlFor="file">
            <img src={avatar} alt="avatar file"/>
            <span>Chose your avatar</span>
            </label>
          <button>Sign up</button>
        </form>
        <p>Already have account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  )
}

export default Register
import { ref, uploadBytesResumable } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , storage } from "../firebase";
import React from 'react'
import avatar from '../photos/avatar.png'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { async } from "@firebase/util";




const Register = () => {

  const [err, setErr] = useState(false);
  
  const errList = [
    "",
    "Fill Display Name",
    "Fill Email",
    "Fill Password",
    "Not existing email or already in use",
    "File Error"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    if(name=="") {setErr(1); return false};
    if(email=="") {setErr(2); return false};
    if(password=="") {setErr(3); return false};

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      setErr(0);
    } catch(err){
        setErr(4);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='displat name' style={{boxShadow: err===1 ? "inset 0px 0px 10px red":""}}/>
          <input type='email'placeholder='email' style={{boxShadow: err===2 ? "inset 0px 0px 10px red":""}}/>
          <input type='password' placeholder='password' minLength={6} style={{boxShadow: err===3 ? "inset 0px 0px 10px red":""}}/>
          <input style={{display:"none"}}type='file' id='file'/>
          <label htmlFor="file">
            <img src={avatar} alt="avatar file"/>
            <span>Chose your avatar</span>
            </label>
          <button>Sign up</button>
          {err ? <span style={{display:"flex",justifyContent:"center",color:"red", }}>{errList[err]}</span> : <></>}
        </form>
        <p>Already have account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  )
}

export default Register
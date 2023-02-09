import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"


const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const errList = [
    "",
    "Fill Email",
    "Fill Password",
    "Wrong password or email"
  ]

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if(email=="") {setErr(1); return false};
    if(password=="") {setErr(2); return false};

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setErr(0);
    }catch (err){
      setErr(3);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type='email'placeholder='email' style={{boxShadow: err===1 ? "inset 0px 0px 10px red":""}}/>
          <input type='password' placeholder='password' style={{boxShadow: err===2 ? "inset 0px 0px 10px red":""}}/>
          <button>Login</button>
        </form>
        {err ? <span style={{display:"flex",justifyContent:"center",color:"red", }}>{errList[err]}</span> : <></>}
        <p>No account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  )
}

export default Login
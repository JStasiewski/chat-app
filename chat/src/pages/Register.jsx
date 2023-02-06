import React from 'react'
import avatar from '../photos/avatar.png'
import {Link} from 'react-router-dom'


const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form>
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
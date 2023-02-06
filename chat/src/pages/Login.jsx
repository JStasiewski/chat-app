import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form>
          <input type='email'placeholder='email'/>
          <input type='password' placeholder='password'/>
          <button>Login</button>
        </form>
        <p>No account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  )
}

export default Login
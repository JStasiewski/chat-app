import React from 'react'

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
          <input type='file'/>
        </form>
        <p>Already have account? Login here</p>
      </div>
    </div>
  )
}

export default Register
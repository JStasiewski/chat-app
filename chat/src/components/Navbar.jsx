import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="https://media.istockphoto.com/id/609686580/pl/zdj%C4%99cie/dziewczyna-w-sankt-petersburgu.jpg?s=612x612&w=0&k=20&c=7jlJkRZydwXGJMfMM7uzpOo_T_X-5ooTJRv_4sk1Ub4=" alt="user" />
        <span>Jakub Stasiewski dupa dupa dupa dupa dupa</span>
        {/* <span>dupa</span> */}
        <Link to="/login"><button onClick={()=>signOut(auth)}>logout</button></Link>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
// import {Link} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
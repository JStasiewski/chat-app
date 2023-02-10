import React from 'react'
import userPhoto from '../photos/user.jpg'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src={userPhoto} alt="" />
      </div>
      <div className="messageContent">
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Message
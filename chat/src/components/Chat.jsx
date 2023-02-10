import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>username</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
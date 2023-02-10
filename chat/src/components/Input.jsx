import React from 'react'
import avatar from "../photos/avatar.png"
import clip from "../photos/clip.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={clip} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={avatar} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
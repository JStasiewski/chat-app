import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import avatar from "../photos/avatar.png"
import clip from "../photos/clip.png"
import { v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../firebase'
import { updateProfile } from 'firebase/auth'
import { ChatContext } from '../context/ChatContext'
import { AuthContext } from '../context/AuthContext'

const Input = () => {
  const [text,setText] = useState("")
  const [img,setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async() => {
    if(img) {

      const storageRef = ref(storage,uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // setErr(5);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateDoc(doc((db),"chats", data.chatId),{
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })
          });
        });
    }else {
      await updateDoc(doc((db),"chats", data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }
  }

  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <img src={clip} alt="" />
        <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={avatar} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
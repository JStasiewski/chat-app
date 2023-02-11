import {collection , query , where , getDocs , doc , getDoc , setDoc , serverTimestamp , updateDoc } from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";
import React, { useContext, useState } from "react";
import {AuthContext} from '../context/AuthContext'
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async() => {
    const q = query(collection(db, "users"), where("displayName", "==" , username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch(err) {
      setErr(true);
    }

  };

  const handleKey= (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    
    try{
      const res = await getDoc(doc(db, "chats", combinedId));
      if(!res.exists()){
        await setDoc(doc(db,"chats", combinedId), { messages: [] });
        
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch(err) {}
    
    setUser(null);
    setUsername("");
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find friend' onKeyDown={handleKey} onChange={(e)=>setUsername(e.target.value)} value={username}/>
      </div>
      {err && <span>User not found</span>}
      {user && (<div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} alt="user search" />
        <span>{user.displayName}</span>
      </div>)}
      <div style={{marginLeft: 10,marginRight: 10, borderTop: "1px solid white"}}></div>
    </div>
  )
} 

export default Search
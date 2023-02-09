import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

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

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find friend' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}/>
      </div>
      {err && <span>User not found</span>}
      {user && <div className='userChat'>
        <img src={user.photoURL} alt="user search" />
        <span>{user.displayName}</span>
      </div>}
      <div style={{marginLeft: 10,marginRight: 10, borderTop: "1px solid white"}}></div>
    </div>
  )
} 

export default Search
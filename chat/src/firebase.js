import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBI0PpFleigaRlCcqHV1xegE06m_XqayCA",
  authDomain: "chat-75017.firebaseapp.com",
  projectId: "chat-75017",
  storageBucket: "chat-75017.appspot.com",
  messagingSenderId: "600399540253",
  appId: "1:600399540253:web:16d4d081d741c96c6e96f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

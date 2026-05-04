import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBzlgpHS-87U1PBxOOtQkUOjrpuMQ1NM",
  authDomain: "react-blogging-66bf9.firebaseapp.com",
  projectId: "react-blogging-66bf9",
  storageBucket: "react-blogging-66bf9.firebasestorage.app",
  messagingSenderId: "750801237768",
  appId: "1:750801237768:web:037958ab09c73b416bdebd"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

const auth = getAuth()

export const authWithGoogle = async() =>{
    let user = null;
    await signInWithPopup(auth, provider).then((result) =>{
        user = result.user
    }).catch((err)=>
    {
        console.log(err)
    })
    return user;
}






import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { getStorage } from "firebase/storage";


import { userHandle } from "../utils";


const firebaseConfig = {
  apiKey: "AIzaSyAvMVDHLLOTMJEg0UDL7o51oC8NrESk5sg",
  authDomain: "instagram-react-clone-6ea61.firebaseapp.com",
  projectId: "instagram-react-clone-6ea61",
  storageBucket: "instagram-react-clone-6ea61.appspot.com",
  messagingSenderId: "519483788836",
  appId: "1:519483788836:web:7767611e2a82158a42d2b1"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);


onAuthStateChanged(auth, async user => {
  if (user) {
    userHandle(user)
  }
});


export const logout = async () => {
  try {
    await signOut(auth)
    return true;
  } catch (error) {
    return false;
  }
} 
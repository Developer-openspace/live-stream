  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  import{getFirestore,collection,getDocs,addDoc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBWmwV2GDFK6eMlBeQtTrCc2mjULw3D3Js",
    authDomain: "developer-openspace-dev.firebaseapp.com",
    projectId: "developer-openspace-dev",
    storageBucket: "developer-openspace-dev.appspot.com",
    messagingSenderId: "19575002090",
    appId: "1:19575002090:web:ab5a4fa895ab00f5055893"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider= new GoogleAuthProvider();
  const db=getFirestore(app);
  
export{
  auth,
  getAuth,
  provider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  getDocs,
  addDoc
}
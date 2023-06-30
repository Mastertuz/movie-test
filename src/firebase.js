
import { initializeApp } from "firebase/app";

import { getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3dWnX1YQwd3HMBUN3xLSBK1FLZ5iNL8o",
  authDomain: "moviesappauth.firebaseapp.com",
  projectId: "moviesappauth",
  storageBucket: "moviesappauth.appspot.com",
  messagingSenderId: "387822252594",
  appId: "1:387822252594:web:894d34bb0ed5b601ce822b",
  measurementId: "G-FW959Q6E5B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBFhHdH92SvfaCHqNObjfdP6UbgQeohlxM",
  authDomain: "miswak-8cb10.firebaseapp.com",
  projectId: "miswak-8cb10",
  storageBucket: "miswak-8cb10.appspot.com",
  messagingSenderId: "679048560007",
  appId: "1:679048560007:web:1bc776beda7af80ae46722"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_CHAT_APIKEY,
  authDomain: process.env.REACT_APP_CHAT_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_CHAT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_CHAT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_CHAT_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_CHAT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
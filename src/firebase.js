// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyDU_Lr0iNtJ9durRV2AwI91kFjOWmgnILg
//  REACT_APP_FIREBASE_AUTH_DOMAIN =netflix-react-yt-e35e8.firebaseapp.com
//  REACT_APP_FIREBASE_PROJECT_ID=netflix-react-yt-e35e8
//  REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-yt-e35e8.appspot.com
//  REACT_APP_MESSAGING_SENDER=838371391241
//  REACT_APP_APP_ID=1:838371391241:web:44f7f626ca8bcb8fa805d8
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

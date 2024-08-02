// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2c7d7.firebaseapp.com",
  projectId: "mern-estate-2c7d7",
  storageBucket: "mern-estate-2c7d7.appspot.com",
  messagingSenderId: "846657508009",
  appId: "1:846657508009:web:0600888185d4dd2d3c4fb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
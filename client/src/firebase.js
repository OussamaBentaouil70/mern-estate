// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-669dc.firebaseapp.com",
  projectId: "mern-estate-669dc",
  storageBucket: "mern-estate-669dc.appspot.com",
  messagingSenderId: "696259492457",
  appId: "1:696259492457:web:945e16c6deb058331180f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncDZTuoy5nao-w4I5H2gtMl-T4qoVhAM",
  authDomain: "vite-contact-00.firebaseapp.com",
  projectId: "vite-contact-00",
  storageBucket: "vite-contact-00.firebasestorage.app",
  messagingSenderId: "15781296026",
  appId: "1:15781296026:web:1cb855bfd7eec687be6c23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
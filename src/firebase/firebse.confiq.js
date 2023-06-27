// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGEgouE1WZtbKL5W121kirq4muVMcRKQ",
  authDomain: "toy-marketplace-1f45c.firebaseapp.com",
  projectId: "toy-marketplace-1f45c",
  storageBucket: "toy-marketplace-1f45c.appspot.com",
  messagingSenderId: "1080853803970",
  appId: "1:1080853803970:web:5c35a6e1fffaa0341c5c5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
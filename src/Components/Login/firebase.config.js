// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaR2b7rFlcjtmwDwx1mbXUkcod1BdNifE",
  authDomain: "pleasing-beauty-login.firebaseapp.com",
  projectId: "pleasing-beauty-login",
  storageBucket: "pleasing-beauty-login.appspot.com",
  messagingSenderId: "1091337940752",
  appId: "1:1091337940752:web:74866b7c2e200b9c377f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
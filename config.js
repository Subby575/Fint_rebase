// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFOusogkHAWAWEdy-6iI7EGBaMdPOo0L0",
  authDomain: "fintlogin-81715.firebaseapp.com",
  projectId: "fintlogin-81715",
  storageBucket: "fintlogin-81715.appspot.com",
  messagingSenderId: "240100730530",
  appId: "1:240100730530:web:405db498c1b7f74703d9fb",
  measurementId: "G-P4R5DKB9YS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
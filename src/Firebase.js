// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkd6rqLZBigNufd65zsVFEjncVAfNiw8U",
  authDomain: "fir-auth-150a5.firebaseapp.com",
  projectId: "fir-auth-150a5",
  storageBucket: "fir-auth-150a5.appspot.com",
  messagingSenderId: "171251619001",
  appId: "1:171251619001:web:75c68b7aeb30f128f8f768",
  measurementId: "G-ESG8RJ1TDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJlVD0I5E18EE8k66_UUo0baPmrcIePQ",
  authDomain: "car-doctor-a4d18.firebaseapp.com",
  projectId: "car-doctor-a4d18",
  storageBucket: "car-doctor-a4d18.appspot.com",
  messagingSenderId: "752235495131",
  appId: "1:752235495131:web:ec5245cd8c0b6dcc0a56fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
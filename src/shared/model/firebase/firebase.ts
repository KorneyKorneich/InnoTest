// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD68fW10PpzNpCk9QVrVLWbXfa-_OvDIWI",
  authDomain: "innotest-5a289.firebaseapp.com",
  projectId: "innotest-5a289",
  storageBucket: "innotest-5a289.firebasestorage.app",
  messagingSenderId: "461307165635",
  appId: "1:461307165635:web:2a2a7af76bf1d6038b5b76",
  measurementId: "G-WFV9GV6EGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
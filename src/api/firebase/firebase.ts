import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD68fW10PpzNpCk9QVrVLWbXfa-_OvDIWI",
  authDomain: "innotest-5a289.firebaseapp.com",
  projectId: "innotest-5a289",
  storageBucket: "innotest-5a289.firebasestorage.app",
  messagingSenderId: "461307165635",
  appId: "1:461307165635:web:2a2a7af76bf1d6038b5b76",
  measurementId: "G-WFV9GV6EGJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
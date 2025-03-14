import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkHfvW7DBYxdUm9HjAWhFY7yjwmxMRvHA",
  authDomain: "malindapractice.firebaseapp.com",
  projectId: "malindapractice",
  storageBucket: "malindapractice.firebasestorage.app",
  messagingSenderId: "869571835672",
  appId: "1:869571835672:web:6678a0ef44717e2bc0d06d",
  measurementId: "G-ZXHYVTSBMK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

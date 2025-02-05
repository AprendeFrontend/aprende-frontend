import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHISL10nLt9UvdvgDFoLCnMj_Z2Oz8Ris",
  authDomain: "aprende-frontend.firebaseapp.com",
  projectId: "aprende-frontend",
  storageBucket: "aprende-frontend.firebasestorage.app",
  messagingSenderId: "1075490429155",
  appId: "1:1075490429155:web:2c7a7d6c6b7f28ed068dd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Firestore Module
export const db = getFirestore(app);
export const usersCollectionReference = collection(db, "users");

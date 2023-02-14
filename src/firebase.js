// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail, deleteUser } from "@firebase/auth";
import {
  getDoc,
  getFirestore,
  collection,
  updateDoc,
  where,
  doc,
  query,
  getDocs,
  deleteDoc,
} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBfnSW4EawATOHKBhbs2DIeSRSBzqT2yew",
  authDomain: "nosediver-45ec3.firebaseapp.com",
  projectId: "nosediver-45ec3",
  storageBucket: "nosediver-45ec3.appspot.com",
  messagingSenderId: "777811457199",
  appId: "1:777811457199:web:be99b834be351917e3505a",
  measurementId: "G-6VYFN7CZCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };

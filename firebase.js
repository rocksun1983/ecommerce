// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDR3mdd-627IhH-tsqvYpLItk6umxyhKIY",
  authDomain: "paged-ecommerce-app.firebaseapp.com",
  projectId: "paged-ecommerce-app",
  storageBucket: "paged-ecommerce-app.appspot.com",
  messagingSenderId: "181039074171",
  appId: "1:181039074171:web:71afeb4c534610cf9ccbde",
  measurementId: "G-H1K5SQDZQJ",
};

// Initialize app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// ✅ Export only after all are initialized
export { app, db, storage, auth };
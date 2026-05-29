// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "finance-app-b2c1f.firebaseapp.com",
  projectId: "finance-app-b2c1f",
  storageBucket: "finance-app-b2c1f.firebasestorage.app",
  messagingSenderId: "97857346844",
  appId: "1:97857346844:web:25ddc6b0e3b41b5e012ed9"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
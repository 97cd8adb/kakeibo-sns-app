// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD-qJbkNFzsjhCEPXVZhd-fJ2WPNDiW4-M",
  authDomain: "kakeibo-sns.firebaseapp.com",
  projectId: "kakeibo-sns",
  storageBucket: "kakeibo-sns.firebasestorage.app",
  messagingSenderId: "985511523719",
  appId: "1:985511523719:web:d9a435d0b64ba0418ecf22",
  measurementId: "G-SE56BF9MKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider ,dpx}